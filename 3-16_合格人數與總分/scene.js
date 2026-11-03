// 3-16 合格人數與總分：分數卡由後排逐張走到「score >= 50 ?」條件閘；
// 合格 → 平放到合格堆（count = 卡數），並長出 sum 方塊（高度與分數成正比）；唔合格 → 放入左前方的箱。
// 右側程式碼面板由 lesson.json 的 code 控制；api.lang === 'en' 時 3D 文字切換英文。
window.SCENE_BUILDER = function (THREE, api) {
  const T = (zh, en) => api.lang === 'en' ? en : zh;
  const TEAL = 0x0f8b7d, INK = 0x1d2330;
  const SCORES = [49, 50, 75, 0, 100];
  const FLAT = [-Math.PI / 2, 0, 0];

  // 左對齊／等寬字的文字貼片（引擎內建 textPlane 只能置中）
  const FONT = '"PingFang TC","Noto Sans TC",sans-serif', MONO = 'Menlo,Consolas,monospace';
  function txt(text, w, h, o = {}) {
    const cv = document.createElement('canvas'); cv.width = 1024; cv.height = Math.round(1024 * h / w);
    const g = cv.getContext('2d');
    if (o.bg) { g.fillStyle = o.bg; g.fillRect(0, 0, cv.width, cv.height); }
    g.fillStyle = o.color || '#1d2330';
    g.font = `700 ${Math.round(cv.height * (o.size || 0.62))}px ${o.mono ? MONO : FONT}`;
    g.textBaseline = 'middle'; g.textAlign = o.left ? 'left' : 'center';
    g.fillText(text, o.left ? 8 : cv.width / 2, cv.height / 2);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true }));
  }
  const at = (m, x, y, z) => { m.position.set(x, y, z); return m; };

  // ---- 分數卡（後排排隊位置 = 建立位置）----
  const QX = k => (k - 3) * 0.42, QZ = -0.95, CARD_Y = 0.25;
  SCORES.forEach((v, n) => {
    const k = n + 1;
    api.add('c' + k, api.group([
      api.box(0.36, 0.46, 0.03, 0xffffff),
      at(txt(String(v), 0.32, 0.2, { color: v >= 50 ? '#0f8b7d' : '#d64545', size: 0.85 }), 0, 0.05, 0.017),
      at(txt(T('第 ' + k + ' 筆', '#' + k), 0.3, 0.08, { color: '#8a93a3' }), 0, -0.15, 0.017),
    ], [QX(k), CARD_Y, QZ]));
  });

  // ---- 條件閘（框在卡後面，唔會遮住卡）----
  const GZ = -0.2;
  api.add('gate', api.group([
    api.cyl(0.03, 0.03, 0.75, TEAL, [-0.3, 0.375, GZ - 0.12]),
    api.cyl(0.03, 0.03, 0.75, TEAL, [0.3, 0.375, GZ - 0.12]),
    api.box(0.66, 0.06, 0.06, TEAL, [0, 0.75, GZ - 0.12]),
    api.box(0.95, 0.22, 0.04, INK, [0, 0.93, GZ - 0.12]),
    at(txt('score >= 50 ?', 0.86, 0.17, { color: '#7ee2b8', mono: true }), 0, 0.93, GZ - 0.095),
  ]));

  // ---- 唔合格箱、合格堆（count）、sum 塔 ----
  const RX = -0.8, PX = 0.2, SX = 0.85, FZ = 0.5;
  api.add('rTray', api.group([
    api.box(0.5, 0.03, 0.5, 0xf6d5d5, [0, 0.015, 0]),
    at(txt(T('唔合格', 'Fail'), 0.4, 0.1, { color: '#d64545' }), 0, 0.08, 0.26),
  ], [RX, 0, FZ]));
  api.add('pTray', api.box(0.5, 0.03, 0.5, 0xdbe7ff, [PX, 0.015, FZ]));
  api.add('sTray', api.box(0.5, 0.03, 0.5, 0xffe6d5, [SX, 0.015, FZ]));
  const pileY = n => 0.045 + n * 0.035;
  const blkPos = {};
  let y = 0.03;
  SCORES.forEach((v, n) => {
    if (v < 50) return;
    const h = v * 0.004;
    blkPos[n + 1] = [SX, y + h / 2, FZ];
    api.add('b' + (n + 1), api.group([
      api.box(0.32, h - 0.006, 0.32, n % 2 ? 0xff9a57 : 0xffb37d),
      at(txt(String(v), 0.26, Math.min(h * 0.6, 0.14), { color: '#7a3510', size: 0.85 }), 0, 0, 0.162),
    ], blkPos[n + 1]));
    y += h;
  });
  const plate = (name, text, x) =>
    api.add(name, at(txt(text, 0.56, 0.12, { color: '#1d2330', bg: 'rgba(255,255,255,0.95)', mono: true, size: 0.6 }), x, 0.09, FZ + 0.33));
  plate('cv0', 'count = 0', PX); plate('cv1', 'count = 1', PX); plate('cv3', 'count = 3', PX);
  plate('sv0', 'sum = 0', SX); plate('sv50', 'sum = 50', SX); plate('sv225', 'sum = 225', SX);

  // ---- 輸出控制台 ----
  const LINE_W = 1.0, LINE_H = 0.2;
  const line = (text, yy) => at(txt(text, LINE_W, LINE_H, { color: '#7ee2b8', mono: true, left: true, size: 0.7 }), -0.45 + LINE_W / 2, yy, 0.03);
  api.add('console', api.group([
    api.box(1.4, 0.85, 0.05, INK),
    at(txt(T('輸出', 'Output'), 0.6, 0.11, { color: '#8a93a3', left: true }), -0.35, 0.32, 0.03),
    at(txt('1', 0.1, 0.15, { color: '#5b6476', mono: true }), -0.57, 0.08, 0.03),
    at(txt('2', 0.1, 0.15, { color: '#5b6476', mono: true }), -0.57, -0.2, 0.03),
  ], [-0.3, 1.25, -1.5]));
  api.add('out1', line('3', 0.08), 'console');
  api.add('out2', line('225', -0.2), 'console');
  api.add('empty', api.group([
    api.box(1.0, 0.75, 0.05, 0x2b3242),
    at(txt(T('全部唔合格：0 49 20', 'All fail: 0 49 20'), 0.88, 0.12, { color: '#ffd27a' }), 0, 0.22, 0.03),
    at(txt('1 │ 0', 0.75, 0.15, { color: '#7ee2b8', left: true, mono: true }), 0, 0.0, 0.03),
    at(txt('2 │ 0', 0.75, 0.15, { color: '#7ee2b8', left: true, mono: true }), 0, -0.22, 0.03),
  ], [1.05, 1.15, -1.25], [0, -0.4, 0]));

  // ---- 常見錯誤卡（直排三張：上錯下對）----
  const card = (name, bad, good, yy) => api.add(name, api.group([
    api.box(1.5, 0.4, 0.04, 0xffffff),
    at(txt('✗ ' + bad, 1.4, 0.13, { color: '#d64545', mono: true, left: true, size: 0.6 }), 0, 0.08, 0.025),
    at(txt('✓ ' + good, 1.4, 0.13, { color: '#0f8b7d', mono: true, left: true, size: 0.6 }), 0, -0.09, 0.025),
  ], [0, yy, 1.05]));
  card('e1', T('cin 放喺迴圈外', 'cin outside the loop'), T('cin >> score 放喺迴圈入面', 'cin >> score in the loop'), 1.38);
  card('e2', 'score > 50', 'score >= 50', 0.93);
  card('e3', T('count++ 放喺 if 外面', 'count++ outside the if'), T('兩句更新都放喺 if 入面', 'both updates inside the if'), 0.48);

  // ---- 語法板（0 基礎）：放喺主場景右邊 x = 8，語法步驟鏡頭飛過去 ----
  // 每句程式拆成顏色積木，下面有中文註解；d = 出現秒數（配合旁白）
  const BX = 8, BY = 1.3;
  const SYN = { kw: '#8e5bd6', var: '#3d7cff', cond: '#e8702a', upd: '#0f8b7d', body: '#1d2330', pun: '#6b7385' };
  const noteW = s => [...s].reduce((w, ch) => w + (/[①-⓿　-鿿＀-￯]/.test(ch) ? 0.1 : 0.058), 0.08);
  function board(id, title, rows, caption) {
    api.add(id, api.group([
      api.box(3.9, 2.5, 0.06, 0xffffff),
      at(txt(title, 3.6, 0.2, { color: '#1d2330' }), 0, 1.0, 0.035),
    ], [BX, BY, 0]));
    const items = [];
    rows.forEach((row, r) => {
      const ty = rows.length === 1 ? 0.35 : [0.5, -0.3][r];
      const ws = row.map(k => k.t.length * 0.088 + 0.12);
      let x = -(ws.reduce((a, b) => a + b, 0) + 0.06 * (row.length - 1)) / 2;
      row.forEach((k, i) => {
        const w = ws[i], col = SYN[k.c], name = `${id}_${r}_${i}`;
        api.add(name, api.group([
          api.box(w, 0.28, 0.04, col),
          at(txt(k.t, w - 0.04, 0.2, { color: '#ffffff', mono: true, size: 0.72 }), 0, 0, 0.025),
        ], [x + w / 2, ty, 0.06]), id);
        items.push({ name, d: k.d });
        if (k.note) {
          api.add(name + 'n', at(txt(k.note, noteW(k.note), 0.13, { color: col, size: 0.75 }), x + w / 2, ty - 0.3 - (i % 2) * 0.17, 0.04), id);
          items.push({ name: name + 'n', d: k.d + 0.35 });
        }
        x += w + 0.06;
      });
    });
    if (caption) {
      api.add(id + 'cap', at(txt(caption.t, 3.7, 0.15, { color: '#4a5163', size: 0.75 }), 0, -1.0, 0.035), id);
      items.push({ name: id + 'cap', d: caption.d });
    }
    return items;
  }
  const synStep = (id, items, hide) => ({
    camera: { pos: [BX, BY + 0.25, 5.6], target: [BX, BY - 0.05, 0] }, hide,
    anims: [{ part: id, from: { scale: 0.01 }, dur: 0.6, ease: 'outBack' },
            ...items.map(k => ({ part: k.name, from: { offset: [0, 0.25, 0.2], scale: 0.01 }, delay: k.d, dur: 0.5, ease: 'outBack' }))],
  });
  const synCin = board('synCin', T('變數同讀入', 'Variables and input'), [
    [{ t: 'int', c: 'kw', note: T('整數類型', 'integer type'), d: 1.2 },
     { t: 'N', c: 'var', note: T('變數名', 'variable name'), d: 3.0 },
     { t: ';', c: 'pun', note: T('句尾分號', 'end with ;'), d: 6.0 }],
    [{ t: 'cin', c: 'kw', note: T('從鍵盤讀入', 'read from keyboard'), d: 8.0 },
     { t: '>> N', c: 'var', note: T('讀入嘅數放入 N', 'store it in N'), d: 10.0 },
     { t: ';', c: 'pun', d: 10.5 }],
  ], { t: T('輸入 5  →  N = 5', 'Input 5  →  N = 5'), d: 11.5 });
  const synFor = board('synFor', T('for 迴圈：重複做', 'for loop: repeat'), [
    [{ t: 'for (', c: 'kw', note: T('重複做', 'repeat'), d: 1.0 },
     { t: 'int k = 1;', c: 'var', note: T('① 起點：k 由 1 開始', '① start: k = 1'), d: 5.0 },
     { t: 'k <= N;', c: 'cond', note: T('② 條件：讀夠 N 次未', '② condition: N rounds yet?'), d: 8.0 },
     { t: 'k++)', c: 'upd', note: T('③ 每輪後 k 加 1', '③ after each round: k + 1'), d: 12.0 }],
    [{ t: '{', c: 'body', d: 15.0 },
     { t: 'int score;', c: 'var', note: T('④ 每輪開一個 score', '④ a score box each round'), d: 15.0 },
     { t: 'cin >> score;', c: 'kw', note: T('讀一個新分數', 'read one new score'), d: 16.0 },
     { t: '... }', c: 'body', d: 16.5 }],
  ], { t: T('N = 5  →  k = 1, 2, 3, 4, 5  →  做 5 次', 'N = 5  →  k = 1, 2, 3, 4, 5  →  5 rounds'), d: 18.5 });
  const synIf = board('synIf', T('if 判斷：條件成立先做', 'if: run only when true'), [
    [{ t: 'if (', c: 'kw', note: T('如果', 'if'), d: 0.8 },
     { t: 'score >= 50', c: 'cond', note: T('條件', 'condition'), d: 2.5 },
     { t: ')', c: 'kw', d: 2.5 },
     { t: '{ ... }', c: 'body', note: T('成立先做', 'run when true'), d: 4.5 }],
    [{ t: '>=', c: 'cond', note: T('大過或等於', 'greater or equal'), d: 7.0 },
     { t: 'count++', c: 'upd', note: T('count 加 1', 'count + 1'), d: 13.0 },
     { t: 'sum += score', c: 'upd', note: T('sum 加上 score', 'add score to sum'), d: 15.0 }],
  ], { t: T('50 >= 50 成立 ✓    49 >= 50 唔成立 ✗', '50 >= 50 is true ✓    49 >= 50 is false ✗'), d: 9.5 });

  // ---- 一張卡經過條件閘 ----
  let passN = 0, failN = 0;
  function judge(k, t) {
    const v = SCORES[k - 1], c = 'c' + k;
    const out = [{ part: c, to: { pos: [0, CARD_Y + 0.03, GZ] }, delay: t, dur: 0.9, ease: 'inOut' }];
    if (v >= 50) {
      out.push({ part: c, to: { pos: [PX, pileY(passN++), FZ], rot: FLAT }, delay: t + 1.6, dur: 0.9, ease: 'inOut' });
      const b = blkPos[k];
      out.push({ part: 'b' + k, from: { offset: [-b[0], CARD_Y - b[1], GZ - FZ], scale: 0.3 }, delay: t + 2.2, dur: 1.0, ease: 'inOut' });
    } else {
      out.push({ part: c, to: { pos: [RX, pileY(failN++), FZ], rot: FLAT }, delay: t + 1.6, dur: 0.9, ease: 'inOut' });
    }
    return out;
  }
  const WIDE = { pos: [0, 2.7, 3.5], target: [0, 0.3, -0.15] };
  const SEP = T('：', ': ');
  const GATE_LBL = (text, delay) => ({ text, at: [0, 0.6, GZ], delay });

  return {
    camera: WIDE,
    steps: [
      { // 1 題目：五張分數卡
        camera: { pos: [0, 1.5, 2.5], target: [0, 0.3, -0.95] },
        anims: SCORES.map((_, n) => ({ part: 'c' + (n + 1), from: { offset: [0, 0.8, 0], scale: 0.01 }, delay: 0.3 + n * 0.45, dur: 0.7, ease: 'outBack' })),
        labels: [{ text: 'N = 5', at: [QX(3), 0.62, QZ], delay: 2.6 }],
      },
      synStep('synCin', synCin),
      { // 2 count / sum / 條件閘
        camera: WIDE,
        anims: [
          { part: 'pTray', from: { scale: 0.01 }, dur: 0.6, ease: 'outBack' },
          { part: 'cv0', from: { scale: 0.01 }, delay: 0.4, dur: 0.5, ease: 'outBack' },
          { part: 'sTray', from: { scale: 0.01 }, delay: 0.8, dur: 0.6, ease: 'outBack' },
          { part: 'sv0', from: { scale: 0.01 }, delay: 1.2, dur: 0.5, ease: 'outBack' },
          { part: 'rTray', from: { scale: 0.01 }, delay: 1.6, dur: 0.6, ease: 'outBack' },
          { part: 'gate', from: { offset: [0, 1.2, 0], scale: 0.01 }, delay: 6.5, dur: 1.0, ease: 'outBack' },
        ],
        labels: [{ text: T('k：第幾筆', 'k: which score'), part: 'c1', at: [0, 0.3, 0], delay: 3.2 }],
        highlight: ['gate'],
      },
      synStep('synFor', synFor, ['synCin']),
      synStep('synIf', synIf, ['synFor']),
      { // 3 第 1 筆 49
        camera: WIDE,
        anims: judge(1, 0.4),
        labels: [GATE_LBL('k = 1' + SEP + '49 >= 50 ✗', 1.3)],
        highlight: ['c1'],
      },
      { // 4 第 2 筆 50
        camera: WIDE, hide: ['cv0', 'sv0'],
        anims: [...judge(2, 0.4),
          { part: 'cv1', from: { scale: 0.01 }, delay: 2.6, dur: 0.4, ease: 'outBack' },
          { part: 'sv50', from: { scale: 0.01 }, delay: 3.3, dur: 0.4, ease: 'outBack' }],
        labels: [GATE_LBL('k = 2' + SEP + '50 >= 50 ✓', 1.3)],
        highlight: ['c2'],
      },
      { // 5 第 3–5 筆
        camera: WIDE, hide: ['cv1', 'sv50'],
        anims: [...judge(3, 0.3), ...judge(4, 3.6), ...judge(5, 6.9),
          { part: 'cv3', from: { scale: 0.01 }, delay: 9.0, dur: 0.4, ease: 'outBack' },
          { part: 'sv225', from: { scale: 0.01 }, delay: 9.9, dur: 0.4, ease: 'outBack' }],
      },
      { // 6 結束、輸出
        camera: { pos: [0.25, 2.35, 2.7], target: [0.25, 1.1, -1.4] },
        anims: [
          { part: 'console', from: { offset: [0, -0.8, 0], scale: 0.01 }, delay: 0.8, dur: 0.9, ease: 'outBack' },
          { part: 'out1', from: { offset: [-0.3, 0, 0], scale: 0.01 }, delay: 2.4, dur: 0.6, ease: 'out' },
          { part: 'out2', from: { offset: [-0.3, 0, 0], scale: 0.01 }, delay: 3.6, dur: 0.6, ease: 'out' },
          { part: 'empty', from: { offset: [0.6, 0, 0], scale: 0.01 }, delay: 5.5, dur: 0.9, ease: 'outBack' },
        ],
        labels: [{ text: T('k = 6 > N，結束', 'k = 6 > N, stop'), at: [0, 1.15, GZ], delay: 0.2 }],
      },
      { // 7 常見錯誤
        camera: { pos: [0, 1.3, 3.9], target: [0, 0.9, 0.95] },
        anims: ['e1', 'e2', 'e3'].map((e, n) => ({ part: e, from: { offset: [0, -0.6, 0], scale: 0.01 }, delay: [0.4, 3.6, 5.6][n], dur: 0.8, ease: 'outBack' })),
        highlight: ['e1', 'e2', 'e3'],
      },
    ],
  };
};
