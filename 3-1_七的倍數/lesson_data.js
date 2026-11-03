window.LESSON = {
 "title": "3-1 列出 7 的倍數",
 "subtitle": "條件計數與累加・廣東話・十個步驟",
 "voice": "hk-male",
 "theme": {
  "accent": "#0f8b7d"
 },
 "speakers": {
  "老師": {
   "voice": "hk-male",
   "color": "#ffd27a"
  }
 },
 "ui": {
  "start": "開始學習",
  "prev": "上一步",
  "replay": "重播",
  "next": "繼續",
  "done": "完成",
  "restart": "再嚟一次",
  "step": "步驟",
  "paused": "已暫停・撳「繼續」去下一步",
  "finished": "學識咗！",
  "finishedSub": "逐一檢查 → 判斷條件 → 符合先計數同累加",
  "manual": "筆記",
  "mute": "靜音",
  "unmute": "開聲"
 },
 "steps": [
  {
   "title": "題目：[L, R] 入面搵 7 嘅倍數",
   "lines": [
    {
     "speaker": "老師",
     "text": "今日做 3-1。輸入兩個整數 L 同 R，例如 1 同 30。"
    },
    {
     "speaker": "老師",
     "text": "我哋要喺 1 到 30 入面，搵晒所有 7 嘅倍數，再計有幾多個、加埋係幾多。兩個端點都要包括埋。"
    }
   ],
   "code": {
    "add": [
     "1-6",
     18,
     19
    ],
    "focus": [
     5,
     6
    ]
   },
   "audio": [
    {
     "src": "audio/s01_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 1.933,
       "text": "今日做 3-1。"
      },
      {
       "start": 1.883,
       "end": 3.862,
       "text": "輸入兩個整數 L 同 R，"
      },
      {
       "start": 3.862,
       "end": 5.383,
       "text": "例如 1 同 30。"
      }
     ]
    },
    {
     "src": "audio/s01_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.4,
       "text": "我哋要喺 1 到 30 入面，"
      },
      {
       "start": 2.4,
       "end": 5.159,
       "text": "搵晒所有 7 嘅倍數，再計有幾多個、"
      },
      {
       "start": 5.159,
       "end": 6.079,
       "text": "加埋係幾多。"
      },
      {
       "start": 6.029,
       "end": 8.362,
       "text": "兩個端點都要包括埋。"
      }
     ]
    }
   ]
  },
  {
   "title": "語法：變數同 cin 讀入",
   "lines": [
    {
     "speaker": "老師",
     "text": "我哋由零開始睇語法。int L, R; 意思係開兩個整數變數，叫 L 同 R，好似兩個空盒。每句程式最後都要加分號。"
    },
    {
     "speaker": "老師",
     "text": "cin 就係由鍵盤讀入，後面嘅箭咀符號指向邊個變數，資料就放入邊個盒。輸入 1 同 30，L 就係 1，R 就係 30。"
    }
   ],
   "code": {
    "focus": [
     5,
     6
    ]
   },
   "audio": [
    {
     "src": "audio/s02_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.371,
       "text": "我哋由零開始睇語法。"
      },
      {
       "start": 2.321,
       "end": 5.33,
       "text": "int L,R;意思係開兩個整數變數，"
      },
      {
       "start": 5.33,
       "end": 7.706,
       "text": "叫 L 同 R，好似兩個空盒。"
      },
      {
       "start": 7.706,
       "end": 10.383,
       "text": "每句程式最後都要加分號。"
      }
     ]
    },
    {
     "src": "audio/s02_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.143,
       "text": "cin 就係由鍵盤讀入，"
      },
      {
       "start": 2.143,
       "end": 4.526,
       "text": "後面嘅箭咀符號指向邊個變數，"
      },
      {
       "start": 4.526,
       "end": 6.058,
       "text": "資料就放入邊個盒。"
      },
      {
       "start": 6.008,
       "end": 8.523,
       "text": "輸入 1 同 30，L 就係 1，"
      },
      {
       "start": 8.523,
       "end": 9.706,
       "text": "R 就係 30。"
      }
     ]
    }
   ]
  },
  {
   "title": "準備兩個變數：count 同 sum",
   "lines": [
    {
     "speaker": "老師",
     "text": "開始之前，先準備兩個變數。count 係計數器，負責數有幾多個符合；sum 係累加器，負責將符合嘅數加埋。"
    },
    {
     "speaker": "老師",
     "text": "兩個都喺迴圈之前，設做零。"
    }
   ],
   "code": {
    "add": [
     7,
     8
    ]
   },
   "audio": [
    {
     "src": "audio/s03_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.09,
       "text": "開始之前，先準備兩個變數。"
      },
      {
       "start": 3.04,
       "end": 4.664,
       "text": "count 係計數器，"
      },
      {
       "start": 4.664,
       "end": 7.469,
       "text": "負責數有幾多個符合；sum 係累加器，"
      },
      {
       "start": 7.469,
       "end": 8.946,
       "text": "負責將符合嘅數加埋。"
      }
     ]
    },
    {
     "src": "audio/s03_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.923,
       "text": "兩個都喺迴圈之前，設做零。"
      }
     ]
    }
   ]
  },
  {
   "title": "語法：for 迴圈",
   "lines": [
    {
     "speaker": "老師",
     "text": "跟住學 for 迴圈，用嚟重複做嘢。括號入面有三個部分，用分號分開。"
    },
    {
     "speaker": "老師",
     "text": "第一部分 int i = L，係起點，只做一次。第二部分 i 細過或等於 R，係條件，成立就做大括號入面嘅嘢。"
    },
    {
     "speaker": "老師",
     "text": "第三部分 i 加加，每做完一輪 i 就加 1，再返去檢查條件。條件唔成立，迴圈就結束。"
    }
   ],
   "code": {
    "add": [
     9,
     16
    ],
    "focus": [
     9
    ]
   },
   "audio": [
    {
     "src": "audio/s04_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.204,
       "text": "跟住學 for 迴圈，用嚟重複做嘢。"
      },
      {
       "start": 3.154,
       "end": 6.54,
       "text": "括號入面有三個部分，用分號分開。"
      }
     ]
    },
    {
     "src": "audio/s04_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.011,
       "text": "第一部分 int i = L，係起點，"
      },
      {
       "start": 3.011,
       "end": 3.777,
       "text": "只做一次。"
      },
      {
       "start": 3.727,
       "end": 6.862,
       "text": "第二部分 i 細過或等於 R，係條件，"
      },
      {
       "start": 6.862,
       "end": 8.842,
       "text": "成立就做大括號入面嘅嘢。"
      }
     ]
    },
    {
     "src": "audio/s04_l03.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 1.662,
       "text": "第三部分 i 加加，"
      },
      {
       "start": 1.662,
       "end": 3.694,
       "text": "每做完一輪 i 就加 1，"
      },
      {
       "start": 3.694,
       "end": 4.944,
       "text": "再返去檢查條件。"
      },
      {
       "start": 4.894,
       "end": 7.529,
       "text": "條件唔成立，迴圈就結束。"
      }
     ]
    }
   ]
  },
  {
   "title": "語法：if 判斷",
   "lines": [
    {
     "speaker": "老師",
     "text": "if 即係如果。括號入面放條件，條件成立，先會做大括號入面嘅嘢。"
    },
    {
     "speaker": "老師",
     "text": "百分號係取餘數，例如 14 除 7，餘數係 0。兩個等號係比較係咪相等，一個等號係放入數值，唔好搞亂。"
    },
    {
     "speaker": "老師",
     "text": "count 加加即係 count 加 1；sum 加等於 i，即係將 i 加落 sum 度。"
    }
   ],
   "code": {
    "add": [
     10,
     13,
     14,
     15
    ],
    "focus": [
     10,
     13,
     14
    ]
   },
   "audio": [
    {
     "src": "audio/s05_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 1.808,
       "text": "if 即係如果。"
      },
      {
       "start": 1.758,
       "end": 4.241,
       "text": "括號入面放條件，條件成立，"
      },
      {
       "start": 4.241,
       "end": 6.342,
       "text": "先會做大括號入面嘅嘢。"
      }
     ]
    },
    {
     "src": "audio/s05_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.092,
       "text": "百分號係取餘數，例如 14 除 7，"
      },
      {
       "start": 3.092,
       "end": 4.09,
       "text": "餘數係 0。"
      },
      {
       "start": 4.04,
       "end": 6.331,
       "text": "兩個等號係比較係咪相等，"
      },
      {
       "start": 6.331,
       "end": 9.196,
       "text": "一個等號係放入數值，唔好搞亂。"
      }
     ]
    },
    {
     "src": "audio/s05_l03.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.192,
       "text": "count 加加即係 count 加 1；"
      },
      {
       "start": 2.192,
       "end": 3.189,
       "text": "sum 加等於 i，"
      },
      {
       "start": 3.189,
       "end": 4.683,
       "text": "即係將 i 加落 sum 度。"
      }
     ]
    }
   ]
  },
  {
   "title": "i 逐個檢查：搵到 7",
   "lines": [
    {
     "speaker": "老師",
     "text": "i 由 L 開始，逐個檢查。1 到 6 除 7 都有餘數，唔符合，count 同 sum 都唔變。"
    },
    {
     "speaker": "老師",
     "text": "去到 7，除 7 餘數係零，符合！count 加一，變做 1；sum 加 7，變做 7。"
    }
   ],
   "code": {
    "add": [
     12
    ],
    "focus": [
     10,
     12,
     13,
     14
    ]
   },
   "audio": [
    {
     "src": "audio/s06_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.735,
       "text": "i 由 L 開始，逐個檢查。"
      },
      {
       "start": 2.685,
       "end": 4.964,
       "text": "1 到 6 除 7 都有餘數，唔符合，"
      },
      {
       "start": 4.964,
       "end": 6.883,
       "text": "count 同 sum 都唔變。"
      }
     ]
    },
    {
     "src": "audio/s06_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.246,
       "text": "去到 7，除 7 餘數係零，符合！"
      },
      {
       "start": 3.196,
       "end": 5.032,
       "text": "count 加一，變做 1；"
      },
      {
       "start": 5.032,
       "end": 6.737,
       "text": "sum 加 7，變做 7。"
      }
     ]
    }
   ]
  },
  {
   "title": "繼續：14、21、28",
   "lines": [
    {
     "speaker": "老師",
     "text": "一樣做法繼續落去。14 符合，count 係 2，sum 係 21。21 符合，count 係 3，sum 係 42。28 符合，count 係 4，sum 係 70。"
    },
    {
     "speaker": "老師",
     "text": "留意，count 每次只係加一，但 sum 每次加嘅係嗰個數本身。"
    }
   ],
   "code": {
    "focus": [
     13,
     14
    ]
   },
   "audio": [
    {
     "src": "audio/s07_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.319,
       "text": "一樣做法繼續落去。"
      },
      {
       "start": 2.269,
       "end": 4.422,
       "text": "14 符合，count 係 2，"
      },
      {
       "start": 4.422,
       "end": 5.633,
       "text": "sum 係 21。"
      },
      {
       "start": 5.633,
       "end": 7.913,
       "text": "21 符合，count 係 3，"
      },
      {
       "start": 7.913,
       "end": 9.196,
       "text": "sum 係 42。"
      },
      {
       "start": 9.196,
       "end": 11.389,
       "text": "28 符合，count 係 4，"
      },
      {
       "start": 11.389,
       "end": 12.623,
       "text": "sum 係 70。"
      }
     ]
    },
    {
     "src": "audio/s07_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.464,
       "text": "留意，count 每次只係加一，"
      },
      {
       "start": 2.464,
       "end": 4.975,
       "text": "但 sum 每次加嘅係嗰個數本身。"
      }
     ]
    }
   ]
  },
  {
   "title": "i 大過 R：迴圈結束、輸出",
   "lines": [
    {
     "speaker": "老師",
     "text": "i 加到 31，已經大過 R，迴圈結束。"
    },
    {
     "speaker": "老師",
     "text": "最後輸出三行：第一行係符合嘅數字，第二行係數量 4，第三行係總和 70。"
    }
   ],
   "code": {
    "add": [
     17
    ],
    "focus": [
     9,
     17
    ]
   },
   "audio": [
    {
     "src": "audio/s08_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.537,
       "text": "i 加到 31，已經大過 R，迴圈結束。"
      }
     ]
    },
    {
     "src": "audio/s08_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.968,
       "text": "最後輸出三行：第一行係符合嘅數字，"
      },
      {
       "start": 2.968,
       "end": 6.173,
       "text": "第二行係數量 4，第三行係總和 70。"
      }
     ]
    }
   ]
  },
  {
   "title": "輸出格式：空格同空行",
   "lines": [
    {
     "speaker": "老師",
     "text": "第一行數字之間用一個空格分隔，但第一個數字前面唔可以有空格。所以先判斷 count 大過零，先印空格，再印 i。"
    },
    {
     "speaker": "老師",
     "text": "如果一個都冇，例如 L 係 1、R 係 6，第一行就係空行，第二同第三行都係零。"
    }
   ],
   "code": {
    "add": [
     11
    ],
    "focus": [
     11,
     17
    ]
   },
   "audio": [
    {
     "src": "audio/s09_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.73,
       "text": "第一行數字之間用一個空格分隔，"
      },
      {
       "start": 2.73,
       "end": 5.36,
       "text": "但第一個數字前面唔可以有空格。"
      },
      {
       "start": 5.31,
       "end": 7.727,
       "text": "所以先判斷 count 大過零，"
      },
      {
       "start": 7.727,
       "end": 9.237,
       "text": "先印空格，再印 i。"
      }
     ]
    },
    {
     "src": "audio/s09_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.442,
       "text": "如果一個都冇，例如 L 係 1、"
      },
      {
       "start": 2.442,
       "end": 4.491,
       "text": "R 係 6，第一行就係空行，"
      },
      {
       "start": 4.491,
       "end": 5.954,
       "text": "第二同第三行都係零。"
      }
     ]
    }
   ]
  },
  {
   "title": "常見錯誤",
   "lines": [
    {
     "speaker": "老師",
     "text": "最後睇三個常見錯誤。第一，迴圈用 i 細過或等於 R，唔好漏咗端點。"
    },
    {
     "speaker": "老師",
     "text": "第二，判斷要用兩個等號。第三，計數係 count 加加，唔係 count 加 i。"
    }
   ],
   "code": {
    "focus": [
     9,
     10,
     13
    ]
   },
   "audio": [
    {
     "src": "audio/s10_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 2.537,
       "text": "最後睇三個常見錯誤。"
      },
      {
       "start": 2.487,
       "end": 5.291,
       "text": "第一，迴圈用 i 細過或等於 R，"
      },
      {
       "start": 5.291,
       "end": 6.446,
       "text": "唔好漏咗端點。"
      }
     ]
    },
    {
     "src": "audio/s10_l02.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.006,
       "text": "第二，判斷要用兩個等號。"
      },
      {
       "start": 2.956,
       "end": 4.922,
       "text": "第三，計數係 count 加加，"
      },
      {
       "start": 4.922,
       "end": 6.519,
       "text": "唔係 count 加 i。"
      }
     ]
    }
   ]
  }
 ],
 "rate": "+20%",
 "langName": "廣東話",
 "codeTitle": "main.cpp",
 "code": [
  "#include <iostream>",
  "using namespace std;",
  "",
  "int main() {",
  "    int L, R;",
  "    cin >> L >> R;",
  "    int count = 0;",
  "    int sum = 0;",
  "    for (int i = L; i <= R; i++) {",
  "        if (i % 7 == 0) {",
  "            if (count > 0) cout << \" \";",
  "            cout << i;",
  "            count++;",
  "            sum += i;",
  "        }",
  "    }",
  "    cout << \"\\n\" << count << \"\\n\" << sum << \"\\n\";",
  "    return 0;",
  "}"
 ],
 "i18n": {
  "en": {
   "langName": "English",
   "htmlLang": "en",
   "voice": "en-male",
   "rate": "+0%",
   "title": "3-1 List Multiples of 7",
   "subtitle": "Conditional counting & summation · 10 steps",
   "finishedSub": "Check each value → test the condition → count and add only when it matches",
   "ui": {
    "start": "Start",
    "prev": "Back",
    "replay": "Replay",
    "next": "Next",
    "done": "Done",
    "restart": "Play again",
    "step": "Step",
    "paused": "Paused · press Next to continue",
    "finished": "Well done!",
    "manual": "Notes",
    "mute": "Mute",
    "unmute": "Unmute",
    "finishedSub": "Check each value → test the condition → count and add only when it matches"
   },
   "speakers": {
    "Teacher": {
     "voice": "en-male",
     "color": "#ffd27a"
    }
   },
   "steps": [
    {
     "title": "Problem: multiples of 7 in [L, R]",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Lesson 3-1. We read two integers, L and R. For example, 1 and 30."
      },
      {
       "speaker": "Teacher",
       "text": "Find every multiple of 7 between them, then count them and add them up. Both ends are included."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s01_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.188,
         "text": "Lesson 3-1."
        },
        {
         "start": 2.138,
         "end": 5.2,
         "text": "We read two integers, L and R."
        },
        {
         "start": 5.2,
         "end": 7.825,
         "text": "For example, 1 and 30."
        }
       ]
      },
      {
       "src": "audio/en_s01_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.611,
         "text": "Find every multiple of 7 between them,"
        },
        {
         "start": 2.611,
         "end": 4.725,
         "text": "then count them and add them up."
        },
        {
         "start": 4.675,
         "end": 7.0,
         "text": "Both ends are included."
        }
       ]
      }
     ]
    },
    {
     "title": "Syntax: variables and cin",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Let's start from zero. int L, R; creates two integer variables named L and R, like two empty boxes. Every statement ends with a semicolon."
      },
      {
       "speaker": "Teacher",
       "text": "cin reads from the keyboard. The arrows point to the variable that receives the data. If we type 1 and 30, L becomes 1 and R becomes 30."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s02_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.275,
         "text": "Let's start from zero."
        },
        {
         "start": 2.225,
         "end": 6.259,
         "text": "int L,R;creates two integer variables named L and R,"
        },
        {
         "start": 6.259,
         "end": 7.887,
         "text": "like two empty boxes."
        },
        {
         "start": 7.888,
         "end": 10.85,
         "text": "Every statement ends with a semicolon."
        }
       ]
      },
      {
       "src": "audio/en_s02_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.837,
         "text": "cin reads from the keyboard."
        },
        {
         "start": 2.788,
         "end": 6.463,
         "text": "The arrows point to the variable that receives the data."
        },
        {
         "start": 6.463,
         "end": 10.675,
         "text": "If we type 1 and 30, L becomes 1 and R becomes 30."
        }
       ]
      }
     ]
    },
    {
     "title": "Two variables: count and sum",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Before the loop, we set up two variables. count is the counter: how many numbers match. sum is the accumulator: their total."
      },
      {
       "speaker": "Teacher",
       "text": "Both start at zero."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s03_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.413,
         "text": "Before the loop, we set up two variables."
        },
        {
         "start": 3.362,
         "end": 6.625,
         "text": "count is the counter: how many numbers match."
        },
        {
         "start": 6.625,
         "end": 9.812,
         "text": "sum is the accumulator: their total."
        }
       ]
      },
      {
       "src": "audio/en_s03_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.212,
         "text": "Both start at zero."
        }
       ]
      }
     ]
    },
    {
     "title": "Syntax: the for loop",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Next, the for loop. It repeats work. Inside the brackets are three parts, separated by semicolons."
      },
      {
       "speaker": "Teacher",
       "text": "Part one, int i equals L, is the start. It runs only once. Part two, i less than or equal to R, is the condition. While it is true, the code in the braces runs."
      },
      {
       "speaker": "Teacher",
       "text": "Part three, i plus plus, adds 1 to i after each round, then the condition is checked again. When the condition is false, the loop ends."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s04_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.3,
         "text": "Next, the for loop."
        },
        {
         "start": 2.25,
         "end": 4.3,
         "text": "It repeats work."
        },
        {
         "start": 4.3,
         "end": 8.787,
         "text": "Inside the brackets are three parts,separated by semicolons."
        }
       ]
      },
      {
       "src": "audio/en_s04_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.55,
         "text": "Part one, int i equals L, is the start."
        },
        {
         "start": 3.5,
         "end": 5.675,
         "text": "It runs only once."
        },
        {
         "start": 5.675,
         "end": 9.625,
         "text": "Part two, i less than or equal to R, is the condition."
        },
        {
         "start": 9.625,
         "end": 12.988,
         "text": "While it is true, the code in the braces runs."
        }
       ]
      },
      {
       "src": "audio/en_s04_l03.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.461,
         "text": "Part three,i plus plus,adds 1 to i after each round,"
        },
        {
         "start": 3.461,
         "end": 5.787,
         "text": "then the condition is checked again."
        },
        {
         "start": 5.737,
         "end": 8.912,
         "text": "When the condition is false, the loop ends."
        }
       ]
      }
     ]
    },
    {
     "title": "Syntax: if",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "if means: only when. The condition goes inside the brackets. When it is true, the code in the braces runs."
      },
      {
       "speaker": "Teacher",
       "text": "The percent sign gives the remainder. For example, 14 divided by 7 leaves 0. Two equal signs compare two values. One equal sign stores a value. Don't mix them up."
      },
      {
       "speaker": "Teacher",
       "text": "count plus plus adds 1 to count. sum plus equals i adds i to sum."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s05_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.475,
         "text": "if means: only when."
        },
        {
         "start": 2.425,
         "end": 5.312,
         "text": "The condition goes inside the brackets."
        },
        {
         "start": 5.312,
         "end": 8.688,
         "text": "When it is true, the code in the braces runs."
        }
       ]
      },
      {
       "src": "audio/en_s05_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.962,
         "text": "The percent sign gives the remainder."
        },
        {
         "start": 2.913,
         "end": 6.9,
         "text": "For example, 14 divided by 7 leaves 0."
        },
        {
         "start": 6.9,
         "end": 9.925,
         "text": "Two equal signs compare two values."
        },
        {
         "start": 9.925,
         "end": 12.638,
         "text": "One equal sign stores a value."
        },
        {
         "start": 12.637,
         "end": 14.562,
         "text": "Don't mix them up."
        }
       ]
      },
      {
       "src": "audio/en_s05_l03.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.925,
         "text": "count plus plus adds 1 to count."
        },
        {
         "start": 2.875,
         "end": 5.787,
         "text": "sum plus equals i adds i to sum."
        }
       ]
      }
     ]
    },
    {
     "title": "Check each i: found 7",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "i starts at L and checks each number. 1 to 6 are not multiples of 7, so count and sum stay the same."
      },
      {
       "speaker": "Teacher",
       "text": "At 7, i mod 7 is zero. It matches! count becomes 1, and sum becomes 7."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s06_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.95,
         "text": "i starts at L and checks each number."
        },
        {
         "start": 2.9,
         "end": 5.181,
         "text": "1 to 6 are not multiples of 7,"
        },
        {
         "start": 5.181,
         "end": 7.537,
         "text": "so count and sum stay the same."
        }
       ]
      },
      {
       "src": "audio/en_s06_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.087,
         "text": "At 7, i mod 7 is zero."
        },
        {
         "start": 3.038,
         "end": 4.775,
         "text": "It matches!"
        },
        {
         "start": 4.775,
         "end": 8.062,
         "text": "count becomes 1, and sum becomes 7."
        }
       ]
      }
     ]
    },
    {
     "title": "Keep going: 14, 21, 28",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Keep going. 14 matches: count is 2, sum is 21. 21: count is 3, sum is 42. 28: count is 4, sum is 70."
      },
      {
       "speaker": "Teacher",
       "text": "Notice: count goes up by one each time, but sum goes up by the number itself."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s07_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 1.75,
         "text": "Keep going."
        },
        {
         "start": 1.7,
         "end": 5.6,
         "text": "14 matches: count is 2, sum is 21."
        },
        {
         "start": 5.6,
         "end": 9.2,
         "text": "21: count is 3, sum is 42."
        },
        {
         "start": 9.2,
         "end": 12.637,
         "text": "28: count is 4, sum is 70."
        }
       ]
      },
      {
       "src": "audio/en_s07_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.709,
         "text": "Notice:count goes up by one each time,"
        },
        {
         "start": 2.709,
         "end": 5.25,
         "text": "but sum goes up by the number itself."
        }
       ]
      }
     ]
    },
    {
     "title": "i > R: loop ends, print output",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "When i reaches 31, it is greater than R, so the loop stops."
      },
      {
       "speaker": "Teacher",
       "text": "We print three lines: the matching numbers, the count, 4, and the sum, 70."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s08_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 4.487,
         "text": "When i reaches 31, it is greater than R, so the loop stops."
        }
       ]
      },
      {
       "src": "audio/en_s08_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 4.424,
         "text": "We print three lines:the matching numbers,the count,4,"
        },
        {
         "start": 4.424,
         "end": 5.625,
         "text": "and the sum,70."
        }
       ]
      }
     ]
    },
    {
     "title": "Output format: spaces and blank line",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Numbers on line one are separated by single spaces, with no space before the first. So we print a space only when count is greater than zero, then print i."
      },
      {
       "speaker": "Teacher",
       "text": "If nothing matches, for example L is 1 and R is 6, line one is blank, and lines two and three are zero."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s09_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.474,
         "text": "Numbers on line one are separated by single spaces,"
        },
        {
         "start": 3.474,
         "end": 5.525,
         "text": "with no space before the first."
        },
        {
         "start": 5.475,
         "end": 9.261,
         "text": "So we print a space only when count is greater than zero,"
        },
        {
         "start": 9.261,
         "end": 10.125,
         "text": "then print i."
        }
       ]
      },
      {
       "src": "audio/en_s09_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.316,
         "text": "If nothing matches,for example L is 1 and R is 6,"
        },
        {
         "start": 3.316,
         "end": 6.662,
         "text": "line one is blank,and lines two and three are zero."
        }
       ]
      }
     ]
    },
    {
     "title": "Common mistakes",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Three common mistakes. First, loop while i is less than or equal to R, so you don't miss the end point."
      },
      {
       "speaker": "Teacher",
       "text": "Second, use two equal signs in the test. Third, counting is count plus plus, not count plus equals i."
      }
     ],
     "audio": [
      {
       "src": "audio/en_s10_l01.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 2.413,
         "text": "Three common mistakes."
        },
        {
         "start": 2.362,
         "end": 5.289,
         "text": "First,loop while i is less than or equal to R,"
        },
        {
         "start": 5.289,
         "end": 7.325,
         "text": "so you don't miss the end point."
        }
       ]
      },
      {
       "src": "audio/en_s10_l02.mp3",
       "speaker": "Teacher",
       "voice": "en-US-GuyNeural",
       "cues": [
        {
         "start": 0.1,
         "end": 3.638,
         "text": "Second, use two equal signs in the test."
        },
        {
         "start": 3.587,
         "end": 8.062,
         "text": "Third, counting is count plus plus, not count plus equals i."
        }
       ]
      }
     ]
    }
   ]
  }
 }
};
