// 3-1 列出 7 的倍數：1–30 排成 3 行 × 10 格，指標 i 逐格檢查；
// count = 藍色代幣（每次 +1），sum = 橙色方塊塔（每次加入該數值，高度與數值成正比）。
// 右側程式碼面板由 lesson.json 的 code 控制；api.lang === 'en' 時 3D 文字切換英文。
window.SCENE_BUILDER = function (THREE, api) {
  const T = (zh, en) => api.lang === 'en' ? en : zh;
  const TEAL = 0x0f8b7d, ORANGE = 0xff8a3d, BLUE = 0x3d7cff, GRAY = 0xdfe3ea, INK = 0x1d2330;
  const MULT = [7, 14, 21, 28];
  const FLAT = [-Math.PI / 2, 0, 0];
  const P = i => [((i - 1) % 10 - 4.5) * 0.21, 0, -1.0 + Math.floor((i - 1) / 10) * 0.27];   // 第 i 格（地面）

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
  const at = (m, x, y, z, rot) => { m.position.set(x, y, z); if (rot) m.rotation.set(...rot); return m; };

  // ---- 1..30 方格（數字印在頂面）----
  const cells = [];
  for (let i = 1; i <= 30; i++) {
    const [x, , z] = P(i);
    cells.push(api.box(0.17, 0.17, 0.17, GRAY, [x, 0.085, z]));
    cells.push(at(txt(String(i), 0.16, 0.16, { color: '#4a5163', size: 0.62 }), x, 0.172, z, FLAT));
  }
  api.add('grid', api.group(cells));
  for (const v of MULT) {
    const [x, , z] = P(v);
    api.add('m' + v, api.group([
      api.box(0.19, 0.19, 0.19, ORANGE),
      at(txt(String(v), 0.18, 0.18, { color: '#ffffff', size: 0.62 }), 0, 0.096, 0, FLAT),
    ], [x, 0.095, z]));
  }

  // 指標 i
  const PY = 0.42;
  api.add('ptr', api.group([
    api.cone(0.06, 0.14, TEAL, [0, 0, 0], [Math.PI, 0, 0]),
    at(txt('i', 0.2, 0.16, { color: '#0f8b7d', mono: true, size: 0.9 }), 0, 0.17, 0),
  ], [P(1)[0], PY, P(1)[2]]));

  // ---- count 托盤與代幣、sum 托盤與方塊塔 ----
  const CX = -0.75, SX = 0.75, TZ = 0.45;
  api.add('cTray', api.box(0.6, 0.04, 0.6, 0xdbe7ff, [CX, 0.02, TZ]));
  api.add('sTray', api.box(0.6, 0.04, 0.6, 0xffe6d5, [SX, 0.02, TZ]));
  MULT.forEach((_, n) => api.add('tok' + (n + 1), api.cyl(0.16, 0.16, 0.06, BLUE, [CX, 0.07 + n * 0.065, TZ])));
  const blkPos = {};
  let y = 0.04;
  for (const v of MULT) {
    const h = v * 0.009;
    blkPos[v] = [SX, y + h / 2, TZ];
    api.add('b' + v, api.group([
      api.box(0.34, h - 0.006, 0.34, v % 14 ? 0xff9a57 : 0xffb37d),
      at(txt(String(v), 0.28, Math.min(h * 0.75, 0.15), { color: '#7a3510', size: 0.85 }), 0, 0, 0.172),
    ], blkPos[v]));
    y += h;
  }
  // 數值牌
  const plate = (name, text, x) =>
    api.add(name, at(txt(text, 0.56, 0.12, { color: '#1d2330', bg: 'rgba(255,255,255,0.95)', mono: true, size: 0.6 }), x, 0.09, TZ + 0.36));
  plate('cv0', 'count = 0', CX); plate('cv1', 'count = 1', CX); plate('cv4', 'count = 4', CX);
  plate('sv0', 'sum = 0', SX); plate('sv7', 'sum = 7', SX); plate('sv70', 'sum = 70', SX);

  // ---- 輸出控制台 ----
  const CZ = -1.65, LEFT = -0.72;
  api.add('console', api.group([
    api.box(1.9, 1.0, 0.05, INK),
    at(txt(T('輸出', 'Output'), 0.6, 0.11, { color: '#8a93a3', left: true }), -0.6, 0.4, 0.03),
    ...[1, 2, 3].map(k => at(txt(String(k), 0.1, 0.15, { color: '#5b6476', mono: true }), -0.84, 0.46 - k * 0.26, 0.03)),
  ], [0, 1.05, CZ]));
  const LINE_W = 1.5, LINE_H = 0.19, LINE_SIZE = 0.7;
  const outLine = (name, text, k) => api.add(name,
    at(txt(text, LINE_W, LINE_H, { color: '#7ee2b8', mono: true, left: true, size: LINE_SIZE }), LEFT + LINE_W / 2, 0.46 - k * 0.26, 0.035), 'console');
  outLine('out1', '7 14 21 28', 1); outLine('out2', '4', 2); outLine('out3', '70', 3);
  // 第 1 行的空格位置（等寬字：字寬 ≈ 0.602 × 字高）
  const charW = 0.602 * LINE_H * LINE_SIZE, x0 = LEFT + 8 * LINE_W / 1024;
  [1, 4, 7].forEach((c, n) => api.add('gap' + n, api.box(charW * 0.8, 0.03, 0.03, ORANGE, [x0 + (c + 0.5) * charW, 0.46 - 0.26 - 0.085, 0.05]), 'console'));

  // 冇符合時：L = 1, R = 6
  api.add('empty', api.group([
    api.box(0.95, 0.85, 0.05, 0x2b3242),
    at(txt('L = 1, R = 6', 0.8, 0.13, { color: '#ffd27a' }), 0, 0.3, 0.03),
    at(txt(T('1 │ (空行)', '1 │ (blank)'), 0.8, 0.14, { color: '#8a93a3', left: true, mono: true }), 0, 0.1, 0.03),
    at(txt('2 │ 0', 0.8, 0.14, { color: '#7ee2b8', left: true, mono: true }), 0, -0.1, 0.03),
    at(txt('3 │ 0', 0.8, 0.14, { color: '#7ee2b8', left: true, mono: true }), 0, -0.3, 0.03),
  ], [1.4, 1.0, -1.35], [0, -0.45, 0]));

  // 常見錯誤卡（直排三張：左錯右對）
  const card = (name, bad, good, yy) => api.add(name, api.group([
    api.box(1.5, 0.36, 0.04, 0xffffff),
    at(txt('✗ ' + bad, 0.7, 0.15, { color: '#d64545', mono: true, left: true }), -0.36, 0, 0.025),
    at(txt('✓ ' + good, 0.7, 0.15, { color: '#0f8b7d', mono: true, left: true }), 0.38, 0, 0.025),
  ], [0, yy, 1.0]));
  card('e1', 'i < R', 'i <= R', 1.32);
  card('e2', 'i % 7 = 0', 'i % 7 == 0', 0.9);
  card('e3', 'count += i', 'count++', 0.48);

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
     { t: 'L, R', c: 'var', note: T('兩個變數名', 'two variable names'), d: 3.0 },
     { t: ';', c: 'pun', note: T('句尾分號', 'end with ;'), d: 6.0 }],
    [{ t: 'cin', c: 'kw', note: T('從鍵盤讀入', 'read from keyboard'), d: 8.5 },
     { t: '>> L', c: 'var', note: T('第 1 個數放入 L', '1st number → L'), d: 10.5 },
     { t: '>> R', c: 'var', note: T('第 2 個數放入 R', '2nd number → R'), d: 11.5 },
     { t: ';', c: 'pun', d: 12.0 }],
  ], { t: T('輸入 1 30  →  L = 1，R = 30', 'Input 1 30  →  L = 1, R = 30'), d: 13.5 });
  const synFor = board('synFor', T('for 迴圈：重複做', 'for loop: repeat'), [
    [{ t: 'for (', c: 'kw', note: T('重複做', 'repeat'), d: 1.0 },
     { t: 'int i = L;', c: 'var', note: T('① 起點：只做一次', '① start: runs once'), d: 5.0 },
     { t: 'i <= R;', c: 'cond', note: T('② 條件：成立就做', '② condition: true → run'), d: 8.5 },
     { t: 'i++)', c: 'upd', note: T('③ 每輪後 i 加 1', '③ after each round: i + 1'), d: 14.5 }],
    [{ t: '{ ... }', c: 'body', note: T('④ 大括號：每輪要做嘅嘢', '④ braces: work for each round'), d: 11.0 }],
  ], { t: T('次序：① → ② → { } → ③ → ② → { } → ③ …  ② 唔成立就停', 'Order: ① → ② → { } → ③ → ② → …  stop when ② is false'), d: 17.5 });
  const synIf = board('synIf', T('if 判斷：條件成立先做', 'if: run only when true'), [
    [{ t: 'if (', c: 'kw', note: T('如果', 'if'), d: 0.8 },
     { t: 'i % 7 == 0', c: 'cond', note: T('條件', 'condition'), d: 2.5 },
     { t: ')', c: 'kw', d: 2.5 },
     { t: '{ ... }', c: 'body', note: T('成立先做', 'run when true'), d: 4.5 }],
    [{ t: '%', c: 'cond', note: T('取餘數：14 % 7 = 0', 'remainder: 14 % 7 = 0'), d: 7.0 },
     { t: '==', c: 'cond', note: T('比較：係咪相等', 'compare: equal?'), d: 10.0 },
     { t: 'count++', c: 'upd', note: T('count 加 1', 'count + 1'), d: 15.0 },
     { t: 'sum += i', c: 'upd', note: T('sum 加上 i', 'add i to sum'), d: 17.0 }],
  ], { t: T('= 係放入數值；== 先係比較', '= stores a value;  == compares'), d: 12.5 });

  // ---- 時間軸工具 ----
  const hit = (v, t, n) => [
    { part: 'm' + v, from: { scale: 0.01 }, delay: t, dur: 0.5, ease: 'outBack' },
    { part: 'tok' + n, from: { offset: [0, 1.0, 0] }, delay: t + 0.45, dur: 0.7, ease: 'outBounce' },
    { part: 'b' + v, from: { offset: [P(v)[0] - blkPos[v][0], 0.1 - blkPos[v][1], P(v)[2] - TZ], scale: 0.35 }, delay: t + 0.8, dur: 1.0, ease: 'inOut' },
  ];
  // 指標由 a 走到 b（每格一次 to），遇到 7 的倍數就停下做 hit
  function walk(a, b, t, slow, firstTok) {
    const out = []; let n = firstTok;
    for (let i = a + 1; i <= b; i++) {
      out.push({ part: 'ptr', to: { pos: [P(i)[0], PY, P(i)[2]] }, delay: t, dur: slow * 0.8, ease: 'inOut' }); t += slow;
      if (i % 7 === 0) { out.push(...hit(i, t, n++)); t += 1.9; }
    }
    return { anims: out, t };
  }
  const s3 = walk(1, 7, 0.6, 0.38, 1);
  const s4 = walk(7, 28, 0.3, 0.17, 2);
  const WIDE = { pos: [0, 2.7, 2.9], target: [0, 0.25, -0.3] };

  return {
    camera: WIDE,
    steps: [
      { // 1 題目：1–30
        camera: { pos: [0, 2.5, 1.5], target: [0, 0.1, -0.75] },
        anims: [{ part: 'grid', from: { scale: [1, 0.01, 1] }, dur: 1.6, ease: 'outBack' }],
        labels: [{ text: 'L = 1', at: [P(1)[0], 0.25, P(1)[2]], delay: 1.6 }, { text: 'R = 30', at: [P(30)[0], 0.25, P(30)[2]], delay: 2.2 }],
      },
      synStep('synCin', synCin),
      { // 2 count / sum = 0
        camera: WIDE,
        anims: [
          { part: 'cTray', from: { scale: 0.01 }, dur: 0.7, ease: 'outBack' },
          { part: 'cv0', from: { offset: [0, -0.3, 0], scale: 0.01 }, delay: 0.5, dur: 0.6, ease: 'outBack' },
          { part: 'sTray', from: { scale: 0.01 }, delay: 1.8, dur: 0.7, ease: 'outBack' },
          { part: 'sv0', from: { offset: [0, -0.3, 0], scale: 0.01 }, delay: 2.3, dur: 0.6, ease: 'outBack' },
        ],
        labels: [{ text: T('計數器：有幾多個', 'counter: how many'), part: 'cTray', at: [0, 0.3, 0], delay: 0.9 },
                 { text: T('累加器：加埋係幾多', 'accumulator: total'), part: 'sTray', at: [0, 0.3, 0], delay: 2.7 }],
        highlight: ['cTray', 'sTray'],
      },
      synStep('synFor', synFor, ['synCin']),
      synStep('synIf', synIf, ['synFor']),
      { // 3 i 走到 7
        camera: WIDE, hide: ['cv0', 'sv0'],
        anims: [
          { part: 'ptr', from: { offset: [0, 0.6, 0], scale: 0.01 }, dur: 0.5, ease: 'outBack' },
          ...s3.anims,
          { part: 'cv1', from: { scale: 0.01 }, delay: s3.t - 1.2, dur: 0.4, ease: 'outBack' },
          { part: 'sv7', from: { scale: 0.01 }, delay: s3.t - 0.2, dur: 0.4, ease: 'outBack' },
        ],
        labels: [{ text: 'i % 7 == 0 ✓', part: 'm7', at: [0, 0.5, 0], delay: s3.t - 1.9 }],
        highlight: ['m7'],
      },
      { // 4 14、21、28
        camera: WIDE, hide: ['cv1', 'sv7'],
        anims: [
          ...s4.anims,
          { part: 'cv4', from: { scale: 0.01 }, delay: s4.t - 0.6, dur: 0.4, ease: 'outBack' },
          { part: 'sv70', from: { scale: 0.01 }, delay: s4.t - 0.3, dur: 0.4, ease: 'outBack' },
        ],
        labels: [{ text: 'count + 1', part: 'tok4', at: [0, 0.25, 0], delay: s4.t - 1.0 }, { text: 'sum + 28', part: 'b28', at: [0, 0.2, 0], delay: s4.t - 1.0 }],
      },
      { // 5 i = 31 結束，輸出
        camera: { pos: [0, 2.5, 3.4], target: [0, 0.7, -0.9] },
        anims: [
          { part: 'ptr', to: { pos: [P(30)[0] + 0.21, PY, P(30)[2]] }, dur: 0.9, ease: 'inOut' },
          { part: 'console', from: { offset: [0, -0.8, 0], scale: 0.01 }, delay: 1.4, dur: 0.9, ease: 'outBack' },
          { part: 'out1', from: { offset: [-0.4, 0, 0], scale: 0.01 }, delay: 3.0, dur: 0.6, ease: 'out' },
          { part: 'out2', from: { offset: [-0.4, 0, 0], scale: 0.01 }, delay: 4.6, dur: 0.6, ease: 'out' },
          { part: 'out3', from: { offset: [-0.4, 0, 0], scale: 0.01 }, delay: 5.6, dur: 0.6, ease: 'out' },
        ],
        labels: [{ text: T('i = 31 > R，結束', 'i = 31 > R, stop'), part: 'ptr', at: [0, 0.38, 0], delay: 0.9 }],
      },
      { // 6 空格與空行
        camera: { pos: [0.45, 1.75, 2.5], target: [0.45, 1.0, -1.5] },
        anims: [
          ...[0, 1, 2].map(n => ({ part: 'gap' + n, from: { offset: [0, 0.2, 0], scale: 0.01 }, delay: 1.5 + n * 0.5, dur: 0.5, ease: 'outBack' })),
          { part: 'empty', from: { offset: [0.6, 0, 0], scale: 0.01 }, delay: 7.0, dur: 0.9, ease: 'outBack' },
        ],
        labels: [{ text: T('數字之間先有空格', 'spaces only between numbers'), part: 'gap1', at: [0, -0.14, 0], delay: 3.2 }],
        highlight: ['gap0', 'gap1', 'gap2'],
      },
      { // 7 常見錯誤
        camera: { pos: [0, 1.3, 3.9], target: [0, 0.85, 0.9] },
        anims: ['e1', 'e2', 'e3'].map((e, n) => ({ part: e, from: { offset: [0, -0.6, 0], scale: 0.01 }, delay: [0.4, 4.0, 5.8][n], dur: 0.8, ease: 'outBack' })),
        highlight: ['e1', 'e2', 'e3'],
      },
    ],
  };
};
