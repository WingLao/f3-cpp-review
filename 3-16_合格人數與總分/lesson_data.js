window.LESSON = {
 "title": "3-16 合格人數與總分",
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
  "finishedSub": "每筆都要讀，合格先計數同累加",
  "manual": "筆記",
  "mute": "靜音",
  "unmute": "開聲"
 },
 "steps": [
  {
   "title": "題目：合格人數同總分",
   "lines": [
    {
     "speaker": "老師",
     "text": "3-16 輸入 N 個分數，只計 50 分或以上嘅合格分數。"
    },
    {
     "speaker": "老師",
     "text": "例如 N 係 5，分數係 49、50、75、0、100。要輸出合格人數，同合格分數嘅總和。"
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
       "end": 2.273,
       "text": "3-16 輸入 N 個分數，"
      },
      {
       "start": 2.273,
       "end": 4.756,
       "text": "只計 50 分或以上嘅合格分數。"
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
       "end": 3.74,
       "text": "例如 N 係 5，分數係 49、50、"
      },
      {
       "start": 3.74,
       "end": 5.465,
       "text": "75、0、100。"
      },
      {
       "start": 5.415,
       "end": 8.862,
       "text": "要輸出合格人數，同合格分數嘅總和。"
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
     "text": "我哋由零開始睇語法。int N; 意思係開一個整數變數，叫 N，好似一個空盒。每句程式最後都要加分號。"
    },
    {
     "speaker": "老師",
     "text": "cin 就係由鍵盤讀入，箭咀符號指向 N，讀入嘅數就放入 N。輸入 5，N 就係 5。"
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
       "end": 5.129,
       "text": "int N;意思係開一個整數變數，"
      },
      {
       "start": 5.129,
       "end": 6.946,
       "text": "叫 N，好似一個空盒。"
      },
      {
       "start": 6.946,
       "end": 9.612,
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
       "end": 2.019,
       "text": "cin 就係由鍵盤讀入，"
      },
      {
       "start": 2.019,
       "end": 5.058,
       "text": "箭咀符號指向 N，讀入嘅數就放入 N。"
      },
      {
       "start": 5.008,
       "end": 7.446,
       "text": "輸入 5，N 就係 5。"
      }
     ]
    }
   ]
  },
  {
   "title": "count、sum 同條件閘",
   "lines": [
    {
     "speaker": "老師",
     "text": "同上一題一樣，先設 count 同 sum 做零。k 負責控制讀幾多次，由 1 去到 N；score 就係而家讀入嘅分數。"
    },
    {
     "speaker": "老師",
     "text": "中間呢道閘就係條件：score 大過或等於 50。"
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
       "end": 1.022,
       "text": "同上一題一樣，"
      },
      {
       "start": 1.022,
       "end": 3.392,
       "text": "先設 count 同 sum 做零。"
      },
      {
       "start": 3.342,
       "end": 6.16,
       "text": "k 負責控制讀幾多次，由 1 去到 N；"
      },
      {
       "start": 6.16,
       "end": 8.415,
       "text": "score 就係而家讀入嘅分數。"
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
       "end": 1.746,
       "text": "中間呢道閘就係條件："
      },
      {
       "start": 1.746,
       "end": 4.215,
       "text": "score 大過或等於 50。"
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
     "text": "第一部分 int k = 1，係起點，只做一次。第二部分 k 細過或等於 N，係條件，成立就做大括號入面嘅嘢。第三部分 k 加加，每做完一輪 k 就加 1。"
    },
    {
     "speaker": "老師",
     "text": "大括號入面，每輪都會讀一個新分數。N 係 5，k 就由 1 去到 5，總共做 5 次。"
    }
   ],
   "code": {
    "add": [
     9,
     10,
     11,
     16
    ],
    "focus": [
     9,
     10,
     11
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
       "end": 3.11,
       "text": "第一部分 int k = 1，係起點，"
      },
      {
       "start": 3.11,
       "end": 3.902,
       "text": "只做一次。"
      },
      {
       "start": 3.852,
       "end": 7.044,
       "text": "第二部分 k 細過或等於 N，係條件，"
      },
      {
       "start": 7.044,
       "end": 9.06,
       "text": "成立就做大括號入面嘅嘢。"
      },
      {
       "start": 9.06,
       "end": 10.637,
       "text": "第三部分 k 加加，"
      },
      {
       "start": 10.637,
       "end": 12.685,
       "text": "每做完一輪 k 就加 1。"
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
       "end": 3.475,
       "text": "大括號入面，每輪都會讀一個新分數。"
      },
      {
       "start": 3.425,
       "end": 6.014,
       "text": "N 係 5，k 就由 1 去到 5，"
      },
      {
       "start": 6.014,
       "end": 7.165,
       "text": "總共做 5 次。"
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
     "text": "大過等於號，即係大過或者等於。所以 50 大過或等於 50 成立，49 就唔成立。"
    },
    {
     "speaker": "老師",
     "text": "count 加加即係 count 加 1；sum 加等於 score，即係將分數加落 sum 度。"
    }
   ],
   "code": {
    "add": [
     12,
     13,
     14,
     15
    ],
    "focus": [
     12,
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
       "end": 3.465,
       "text": "大過等於號，即係大過或者等於。"
      },
      {
       "start": 3.415,
       "end": 6.328,
       "text": "所以 50 大過或等於 50 成立，"
      },
      {
       "start": 6.328,
       "end": 7.623,
       "text": "49 就唔成立。"
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
       "end": 2.292,
       "text": "count 加加即係 count 加 1；"
      },
      {
       "start": 2.292,
       "end": 3.753,
       "text": "sum 加等於 score，"
      },
      {
       "start": 3.753,
       "end": 5.215,
       "text": "即係將分數加落 sum 度。"
      }
     ]
    }
   ]
  },
  {
   "title": "第 1 筆：49 唔合格",
   "lines": [
    {
     "speaker": "老師",
     "text": "k 等於 1，讀入第一個分數 49。49 細過 50，唔合格，count 同 sum 保持零。"
    },
    {
     "speaker": "老師",
     "text": "記住，唔合格都一定要讀，咁先會輪到下一筆。"
    }
   ],
   "code": {
    "focus": [
     10,
     11,
     12
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
       "end": 3.454,
       "text": "k 等於 1，讀入第一個分數 49。"
      },
      {
       "start": 3.404,
       "end": 5.179,
       "text": "49 細過 50，唔合格，"
      },
      {
       "start": 5.179,
       "end": 7.362,
       "text": "count 同 sum 保持零。"
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
       "end": 2.41,
       "text": "記住，唔合格都一定要讀，"
      },
      {
       "start": 2.41,
       "end": 4.142,
       "text": "咁先會輪到下一筆。"
      }
     ]
    }
   ]
  },
  {
   "title": "第 2 筆：50 合格",
   "lines": [
    {
     "speaker": "老師",
     "text": "k 等於 2，讀入 50。50 大過或等於 50，合格！count 變做 1，sum 加 50。"
    },
    {
     "speaker": "老師",
     "text": "留意，用大過或等於，唔係大過，所以 50 分都計合格。"
    }
   ],
   "code": {
    "focus": [
     12,
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
       "end": 2.548,
       "text": "k 等於 2，讀入 50。"
      },
      {
       "start": 2.498,
       "end": 5.321,
       "text": "50 大過或等於 50，合格！"
      },
      {
       "start": 5.321,
       "end": 7.717,
       "text": "count 變做 1，sum 加 50。"
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
       "end": 2.826,
       "text": "留意，用大過或等於，唔係大過，"
      },
      {
       "start": 2.826,
       "end": 5.006,
       "text": "所以 50 分都計合格。"
      }
     ]
    }
   ]
  },
  {
   "title": "第 3 至 5 筆",
   "lines": [
    {
     "speaker": "老師",
     "text": "跟住 75 合格，count 係 2，sum 係 125。"
    },
    {
     "speaker": "老師",
     "text": "0 唔合格，數值唔變。100 合格，count 係 3，sum 係 225。"
    }
   ],
   "code": {
    "focus": [
     11,
     12,
     13,
     14
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
       "end": 2.782,
       "text": "跟住 75 合格，count 係 2，"
      },
      {
       "start": 2.782,
       "end": 4.194,
       "text": "sum 係 125。"
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
       "end": 2.496,
       "text": "0 唔合格，數值唔變。"
      },
      {
       "start": 2.446,
       "end": 4.886,
       "text": "100 合格，count 係 3，"
      },
      {
       "start": 4.886,
       "end": 6.321,
       "text": "sum 係 225。"
      }
     ]
    }
   ]
  },
  {
   "title": "k 大過 N：迴圈結束、輸出",
   "lines": [
    {
     "speaker": "老師",
     "text": "k 加到 6，大過 N，迴圈結束。輸出兩行：第一行合格人數 3，第二行總和 225。"
    },
    {
     "speaker": "老師",
     "text": "如果冇人合格，兩行都輸出 0。"
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
     "src": "audio/s09_l01.mp3",
     "speaker": "老師",
     "voice": "zh-HK-WanLungNeural",
     "cues": [
      {
       "start": 0.1,
       "end": 3.131,
       "text": "k 加到 6，大過 N，迴圈結束。"
      },
      {
       "start": 3.081,
       "end": 5.944,
       "text": "輸出兩行：第一行合格人數 3，"
      },
      {
       "start": 5.944,
       "end": 7.852,
       "text": "第二行總和 225。"
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
       "end": 2.975,
       "text": "如果冇人合格，兩行都輸出 0。"
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
     "text": "最後三個重點。第一，讀分數要放喺迴圈入面。第二，條件係 score 大過或等於 50。"
    },
    {
     "speaker": "老師",
     "text": "第三，count 加加同 sum 加 score，兩句都要放喺 if 入面。"
    }
   ],
   "code": {
    "focus": [
     11,
     12,
     13,
     14
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
       "end": 2.09,
       "text": "最後三個重點。"
      },
      {
       "start": 2.04,
       "end": 5.112,
       "text": "第一，讀分數要放喺迴圈入面。"
      },
      {
       "start": 5.112,
       "end": 5.577,
       "text": "第二，"
      },
      {
       "start": 5.577,
       "end": 8.519,
       "text": "條件係 score 大過或等於 50。"
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
       "end": 0.442,
       "text": "第三，"
      },
      {
       "start": 0.442,
       "end": 2.951,
       "text": "count 加加同 sum 加 score，"
      },
      {
       "start": 2.951,
       "end": 4.433,
       "text": "兩句都要放喺 if 入面。"
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
  "    int N;",
  "    cin >> N;",
  "    int count = 0;",
  "    int sum = 0;",
  "    for (int k = 1; k <= N; k++) {",
  "        int score;",
  "        cin >> score;",
  "        if (score >= 50) {",
  "            count++;",
  "            sum += score;",
  "        }",
  "    }",
  "    cout << count << \"\\n\" << sum << \"\\n\";",
  "    return 0;",
  "}"
 ],
 "i18n": {
  "en": {
   "langName": "English",
   "htmlLang": "en",
   "voice": "en-male",
   "rate": "+0%",
   "title": "3-16 Passing Count and Score Sum",
   "subtitle": "Conditional counting & summation · 10 steps",
   "finishedSub": "Read every score; count and add only the passing ones",
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
    "finishedSub": "Read every score; count and add only the passing ones"
   },
   "speakers": {
    "Teacher": {
     "voice": "en-male",
     "color": "#ffd27a"
    }
   },
   "steps": [
    {
     "title": "Problem: passing count and score sum",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Lesson 3-16. We read N scores, and only scores of 50 or more pass."
      },
      {
       "speaker": "Teacher",
       "text": "For example, N is 5, and the scores are 49, 50, 75, 0, and 100. Print how many passed, and the total of the passing scores."
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
         "end": 2.538,
         "text": "Lesson 3-16."
        },
        {
         "start": 2.487,
         "end": 6.7,
         "text": "We read N scores, and only scores of 50 or more pass."
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
         "end": 6.65,
         "text": "For example,N is 5,and the scores are 49,50,75,0,and 100."
        },
        {
         "start": 6.6,
         "end": 10.6,
         "text": "Print how many passed, and the total of the passing scores."
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
       "text": "Let's start from zero. int N; creates an integer variable named N, like an empty box. Every statement ends with a semicolon."
      },
      {
       "speaker": "Teacher",
       "text": "cin reads from the keyboard. The arrows point to N, so the number goes into N. If we type 5, N becomes 5."
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
         "end": 6.988,
         "text": "int N;creates an integer variable named N,like an empty box."
        },
        {
         "start": 6.987,
         "end": 9.95,
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
         "end": 6.588,
         "text": "The arrows point to N, so the number goes into N."
        },
        {
         "start": 6.588,
         "end": 9.675,
         "text": "If we type 5, N becomes 5."
        }
       ]
      }
     ]
    },
    {
     "title": "count, sum and the condition gate",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Like before, count and sum start at zero. k controls how many times we read, from 1 to N. score is the value we just read."
      },
      {
       "speaker": "Teacher",
       "text": "This gate is the condition: score is greater than or equal to 50."
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
         "end": 3.312,
         "text": "Like before, count and sum start at zero."
        },
        {
         "start": 3.263,
         "end": 5.646,
         "text": "k controls how many times we read,"
        },
        {
         "start": 5.646,
         "end": 8.8,
         "text": "from 1 to N. score is the value we just read."
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
         "end": 1.993,
         "text": "This gate is the condition:"
        },
        {
         "start": 1.993,
         "end": 4.588,
         "text": "score is greater than or equal to 50."
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
       "text": "Part one, int k equals 1, is the start. Part two, k less than or equal to N, is the condition. Part three, k plus plus, adds 1 to k after each round."
      },
      {
       "speaker": "Teacher",
       "text": "Inside the braces, each round reads one new score. N is 5, so k goes from 1 to 5. That is 5 rounds."
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
         "end": 3.712,
         "text": "Part one, int k equals 1, is the start."
        },
        {
         "start": 3.663,
         "end": 7.75,
         "text": "Part two, k less than or equal to N, is the condition."
        },
        {
         "start": 7.75,
         "end": 12.137,
         "text": "Part three, k plus plus, adds 1 to k after each round."
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
         "end": 3.913,
         "text": "Inside the braces, each round reads one new score."
        },
        {
         "start": 3.862,
         "end": 7.225,
         "text": "N is 5, so k goes from 1 to 5."
        },
        {
         "start": 7.225,
         "end": 9.412,
         "text": "That is 5 rounds."
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
       "text": "The greater-than-or-equal sign means greater than, or equal to. So 50 is greater than or equal to 50, which is true. 49 is not."
      },
      {
       "speaker": "Teacher",
       "text": "count plus plus adds 1 to count. sum plus equals score adds the score to sum."
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
         "end": 3.386,
         "text": "The greater-than-or-equal sign means greater than,"
        },
        {
         "start": 3.386,
         "end": 4.175,
         "text": "or equal to."
        },
        {
         "start": 4.125,
         "end": 8.137,
         "text": "So 50 is greater than or equal to 50, which is true."
        },
        {
         "start": 8.137,
         "end": 10.237,
         "text": "49 is not."
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
         "end": 6.188,
         "text": "sum plus equals score adds the score to sum."
        }
       ]
      }
     ]
    },
    {
     "title": "Score 1: 49 fails",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "k is 1. We read the first score, 49. It is less than 50, so it fails. count and sum stay at zero."
      },
      {
       "speaker": "Teacher",
       "text": "Remember: read every score, even a failing one, so the next score comes up."
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
         "end": 1.863,
         "text": "k is 1."
        },
        {
         "start": 1.812,
         "end": 4.838,
         "text": "We read the first score, 49."
        },
        {
         "start": 4.838,
         "end": 7.825,
         "text": "It is less than 50, so it fails."
        },
        {
         "start": 7.825,
         "end": 10.287,
         "text": "count and sum stay at zero."
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
         "end": 3.358,
         "text": "Remember:read every score,even a failing one,"
        },
        {
         "start": 3.358,
         "end": 5.313,
         "text": "so the next score comes up."
        }
       ]
      }
     ]
    },
    {
     "title": "Score 2: 50 passes",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "k is 2. We read 50. 50 is greater than or equal to 50, so it passes! count becomes 1, and sum adds 50."
      },
      {
       "speaker": "Teacher",
       "text": "Use greater than or equal to, not just greater than, so fifty counts."
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
         "end": 1.875,
         "text": "k is 2."
        },
        {
         "start": 1.825,
         "end": 3.75,
         "text": "We read 50."
        },
        {
         "start": 3.75,
         "end": 7.7,
         "text": "50 is greater than or equal to 50, so it passes!"
        },
        {
         "start": 7.7,
         "end": 10.9,
         "text": "count becomes 1, and sum adds 50."
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
         "end": 3.611,
         "text": "Use greater than or equal to,not just greater than,"
        },
        {
         "start": 3.611,
         "end": 4.713,
         "text": "so fifty counts."
        }
       ]
      }
     ]
    },
    {
     "title": "Scores 3 to 5",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "Next, 75 passes: count is 2, sum is 125."
      },
      {
       "speaker": "Teacher",
       "text": "0 fails, so nothing changes. 100 passes: count is 3, sum is 225."
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
         "end": 5.387,
         "text": "Next, 75 passes: count is 2, sum is 125."
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
         "end": 3.113,
         "text": "0 fails, so nothing changes."
        },
        {
         "start": 3.062,
         "end": 7.7,
         "text": "100 passes: count is 3, sum is 225."
        }
       ]
      }
     ]
    },
    {
     "title": "k > N: loop ends, print output",
     "lines": [
      {
       "speaker": "Teacher",
       "text": "k reaches 6, which is greater than N, so the loop ends. We print two lines: 3 passed, and the total is 225."
      },
      {
       "speaker": "Teacher",
       "text": "If nobody passes, both lines are 0."
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
         "end": 4.312,
         "text": "k reaches 6, which is greater than N, so the loop ends."
        },
        {
         "start": 4.263,
         "end": 9.213,
         "text": "We print two lines: 3 passed, and the total is 225."
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
         "end": 3.375,
         "text": "If nobody passes, both lines are 0."
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
       "text": "Three key points. First, read each score inside the loop. Second, the condition is score greater than or equal to 50."
      },
      {
       "speaker": "Teacher",
       "text": "Third, count plus plus and sum plus equals score both go inside the if block."
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
         "end": 2.163,
         "text": "Three key points."
        },
        {
         "start": 2.112,
         "end": 5.188,
         "text": "First, read each score inside the loop."
        },
        {
         "start": 5.188,
         "end": 9.387,
         "text": "Second, the condition is score greater than or equal to 50."
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
         "end": 0.496,
         "text": "Third,"
        },
        {
         "start": 0.496,
         "end": 5.112,
         "text": "count plus plus and sum plus equals score both go inside the if block."
        }
       ]
      }
     ]
    }
   ]
  }
 }
};
