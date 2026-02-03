// 词汇数据库
// 版本: 2.0
// 最后更新: 2025-02-03
// 数据来源: dict.md

const vocabularyData = {
  // 元数据
  meta: {
    version: "2.0",
    source: "新编大学德语",
    lastUpdated: "2025-02-03"
  },

  // 按课次组织的词汇
  lessons: {
    "Lektion 1": {
      title: "问候与介绍",
      words: [
        { type: "noun", article: "der", word: "Morgen", plural: "-", chinese: "早晨" },
        { type: "other", word: "wie", chinese: "怎样" },
        { type: "pronoun", word: "du", chinese: "你" },
        { type: "verb", word: "heißen", chinese: "称为，名叫", verbType: "vi" },
        { type: "pronoun", word: "ich", chinese: "我" }
      ]
    },
    "Lektion 2": {
      title: "进入教室",
      words: [
        { type: "verb", word: "klopfen", chinese: "敲，拍打" },
        { type: "adverb", word: "herein", chinese: "进来" },
        { type: "other", word: "bitte", chinese: "请" },
        { type: "noun", article: "der", word: "Tag", plural: "-e", chinese: "日，天" },
        { type: "pronoun", word: "er", chinese: "他" },
        { type: "pronoun", word: "sie", chinese: "她" }
      ]
    },
    "Lektion 3": {
      title: "介绍他人",
      words: [
        { type: "noun", article: "der", word: "Abend", plural: "-e", chinese: "晚上，傍晚" },
        { type: "pronoun", word: "das", chinese: "这，这个" },
        { type: "verb", word: "ist", chinese: "是" },
        { type: "noun", article: "der", word: "Mitschüler", plural: "-", chinese: "同学" },
        { type: "pronoun", word: "sein", forms: ["sein", "seine"], chinese: "他的" },
        { type: "noun", article: "der", word: "Lehrer", plural: "-", chinese: "老师" },
        { type: "noun", article: "der", word: "Herr", plural: "-en", chinese: "先生" },
        { type: "verb", word: "kommen", chinese: "来" },
        { type: "other", word: "und", chinese: "和" }
      ]
    },
    "Lektion 4": {
      title: "家庭成员",
      words: [
        { type: "noun", article: "der", word: "Bruder", plural: "¨", chinese: "兄弟" },
        { type: "noun", article: "der", word: "Vater", plural: "¨", chinese: "父亲" },
        { type: "pronoun", word: "ihr", forms: ["ihr", "ihre"], chinese: "她的" }
      ]
    },
    "Lektion 5": {
      title: "物品与动作",
      words: [
        { type: "pronoun", word: "dein", forms: ["dein", "deine"], chinese: "你的" },
        { type: "noun", article: "der", word: "Füller", plural: "-", chinese: "钢笔" },
        { type: "other", word: "ja", chinese: "是的" },
        { type: "pronoun", word: "mein", forms: ["mein", "meine"], chinese: "我的" },
        { type: "adjective", word: "rot", chinese: "红色的" },
        { type: "verb", word: "nehmen", chinese: "拿，握" },
        { type: "other", word: "Danke!", chinese: "谢谢！" },
        { type: "verb", word: "herkommen", chinese: "走近，靠近" }
      ]
    },
    "Lektion 6": {
      title: "学习用品",
      words: [
        { type: "adjective", word: "blau", chinese: "蓝色的" },
        { type: "noun", article: "das", word: "Lineal", plural: "-e", chinese: "尺" },
        { type: "adjective", word: "gelb", chinese: "黄色的" },
        { type: "noun", article: "der", word: "Bleistift", plural: "-e", chinese: "铅笔" },
        { type: "adjective", word: "grün", chinese: "绿色的" },
        { type: "noun", article: "das", word: "Buch", plural: "¨er", chinese: "书" },
        { type: "noun", article: "das", word: "Heft", plural: "-e", chinese: "练习本" },
        { type: "noun", article: "das", word: "Etui", plural: "-s", chinese: "铅笔盒" }
      ]
    },
    "Lektion 7": {
      title: "上课",
      words: [
        { type: "verb", word: "läuten", chinese: "响铃", verbType: "vi" },
        { type: "noun", article: "die", word: "Stunde", plural: "-n", chinese: "小时，课时" },
        { type: "verb", word: "beginnen", chinese: "开始", verbType: "vi" },
        { type: "verb", word: "aufstehen", chinese: "起床", verbType: "vi" },
        { type: "noun", article: "die", word: "Frau", plural: "-en", chinese: "妇女，太太" },
        { type: "verb", word: "sich setzen", chinese: "坐下", verbType: "vr" },
        { type: "pronoun", word: "euch", chinese: "你们" },
        { type: "other", word: "was", chinese: "什么" },
        { type: "noun", article: "die", word: "Kassette", plural: "-n", chinese: "录音带（小盘）" },
        { type: "noun", article: "das", word: "Tonband", plural: "¨er", chinese: "录音带（大盘）" },
        { type: "other", word: "ein", forms: ["ein", "eine"], chinese: "一个" },
        { type: "other", word: "kein", forms: ["kein", "keine"], chinese: "无，没有" },
        { type: "noun", article: "das", word: "Tonbandgerät", plural: "¨e", chinese: "录音机" },
        { type: "noun", article: "der", word: "Kassettenrecorder", plural: "-", chinese: "小型录音机" },
        { type: "noun", article: "die", word: "Lehrerin", plural: "-nen", chinese: "女教师" },
        { type: "noun", article: "das", word: "Raumschiff", plural: "-e", chinese: "宇宙飞船" },
        { type: "noun", article: "der", word: "Computer", plural: "-", chinese: "电脑" },
        { type: "noun", article: "die", word: "U-Bahn", plural: "", chinese: "地铁" },
        { type: "noun", article: "die", word: "Nanpu-Brücke", plural: "", chinese: "南浦大桥" },
        { type: "noun", article: "die", word: "Brücke", plural: "-n", chinese: "桥" },
        { type: "noun", article: "die", word: "Perle Asiens", plural: "", chinese: "东方明珠" },
        { type: "noun", article: "die", word: "Hoch-Bahn", plural: "", chinese: "高架铁道" },
        { type: "noun", article: "der", word: "Geldautomat", plural: "-en", chinese: "自动取款机" },
        { type: "noun", article: "die", word: "Scheckkarte", plural: "-n", chinese: "信用卡" }
      ]
    },
    "Lektion 8": {
      title: "家具",
      words: [
        { type: "noun", article: "der", word: "Tisch", plural: "-e", chinese: "桌子" },
        { type: "noun", article: "der", word: "Stuhl", plural: "¨e", chinese: "椅子" },
        { type: "noun", article: "das", word: "Bett", plural: "-en", chinese: "床" },
        { type: "noun", article: "der", word: "Spitzer", plural: "-", chinese: "卷笔刀" }
      ]
    },
    "Lektion 9": {
      title: "礼貌用语",
      words: [
        { type: "noun", article: "die", word: "Tasche", plural: "-n", chinese: "袋、包" },
        { type: "other", word: "wessen", chinese: "谁的" },
        { type: "other", word: "hallo", chinese: "喂" },
        { type: "pronoun", word: "Ihr", forms: ["Ihr", "Ihre"], chinese: "您的" },
        { type: "other", word: "Wie bitte?", chinese: "您说什么？（因没有听懂，请求重复一遍）" },
        { type: "other", word: "Vielen Dank!", chinese: "多谢！" },
        { type: "other", word: "Nichts zu danken!", chinese: "不用谢！" }
      ]
    },
    "Lektion 10": {
      title: "服装与家人",
      words: [
        { type: "noun", article: "die", word: "Jacke", plural: "-n", chinese: "上衣" },
        { type: "noun", article: "die", word: "Hose", plural: "-n", chinese: "裤子" },
        { type: "noun", article: "der", word: "Pullover", plural: "-", chinese: "羊毛衫" },
        { type: "noun", article: "der", word: "Schal", plural: "-e", chinese: "围巾" },
        { type: "noun", article: "die", word: "Mutter", plural: "¨", chinese: "母亲" },
        { type: "noun", article: "die", word: "Schwester", plural: "-n", chinese: "姐妹" },
        { type: "noun", article: "die", word: "Oma", plural: "-s", chinese: "奶奶" },
        { type: "noun", article: "die", word: "Tochter", plural: "¨", chinese: "女儿" }
      ]
    },
    "Lektion 11": {
      title: "告别",
      words: [
        { type: "other", word: "zu Ende sein", chinese: "结束" },
        { type: "other", word: "Auf Wiedersehen!", chinese: "再见！" },
        { type: "noun", article: "das", word: "Messer", plural: "-", chinese: "刀" },
        { type: "other", word: "nicht", chinese: "不，没有" }
      ]
    },
    "Lektion 12": {
      title: "餐具与文具",
      words: [
        { type: "noun", article: "die", word: "Tasse", plural: "-n", chinese: "杯（连同下面的碟）" },
        { type: "noun", article: "der", word: "Becher", plural: "", chinese: "（有脚无柄的）杯，酒杯" },
        { type: "noun", article: "der", word: "Kugelschreiber", plural: "-", chinese: "圆珠笔" },
        { type: "noun", article: "der", word: "Radiergummi", plural: "-s", chinese: "橡皮" },
        { type: "other", word: "auch", chinese: "也" }
      ]
    },
    "Lektion 13": {
      title: "时间与地点",
      words: [
        { type: "noun", article: "der", word: "Sonntag", plural: "", chinese: "星期天" },
        { type: "other", word: "an", chinese: "在…的旁边" },
        { type: "other", word: "bei", chinese: "在…那里，靠近" },
        { type: "other", word: "zu Hause", chinese: "在家" },
        { type: "noun", article: "die", word: "Tür", plural: "-en", chinese: "门" },
        { type: "other", word: "ach", chinese: "啊，哎呀" },
        { type: "other", word: "da", chinese: "那儿" },
        { type: "verb", word: "(du) bist", chinese: "（你）是" },
        { type: "verb", word: "(ich) bin", chinese: "（我）是" },
        { type: "adjective", word: "alt", chinese: "老的，旧的" },
        { type: "other", word: "zwölf", chinese: "十二" },
        { type: "noun", article: "das", word: "Jahr", plural: "-e", chinese: "年，岁" }
      ]
    },
    "Lektion 14": {
      title: "数字",
      words: [
        { type: "other", word: "dreizehn", chinese: "十三" },
        { type: "other", word: "elf", chinese: "十一" },
        { type: "other", word: "neun", chinese: "九" }
      ]
    },
    "Lektion 15": {
      title: "用餐",
      words: [
        { type: "adjective", word: "hungrig", chinese: "饿的" },
        { type: "verb", word: "(wir) sind", chinese: "（我们）是" },
        { type: "verb", word: "(ihr) seid", chinese: "（你们）是" },
        { type: "adverb", word: "immer", chinese: "总是" },
        { type: "other", word: "Was gibt's?", chinese: "吃什么？" },
        { type: "other", word: "denn", chinese: "究竟，倒底" },
        { type: "adverb", word: "heute", chinese: "今天" },
        { type: "noun", article: "der", word: "Fisch", plural: "-e", chinese: "鱼" },
        { type: "adjective", word: "prima", chinese: "好极了" },
        { type: "other", word: "also", chinese: "如此" },
        { type: "noun", article: "der", word: "Appetit", plural: "-e", chinese: "胃口" },
        { type: "other", word: "Guten Appetit!", chinese: "胃口好！" }
      ]
    },
    "Lektion 16": {
      title: "少先队",
      words: [
        { type: "noun", article: "der", word: "Pionier", plural: "-e", chinese: "少先队员" },
        { type: "verb", word: "(sie) sind", chinese: "（他们）是" }
      ]
    },
    "Lektion 17": {
      title: "职业",
      words: [
        { type: "noun", article: "der", word: "Freitag", plural: "", chinese: "星期五" },
        { type: "verb", word: "abholen", chinese: "接，取来", verbType: "vt" },
        { type: "other", word: "wer", chinese: "谁" },
        { type: "adverb", word: "sehr", chinese: "很" },
        { type: "adjective", word: "groß", chinese: "大" },
        { type: "noun", article: "der", word: "Arbeiter", plural: "-", chinese: "工人" },
        { type: "noun", article: "der", word: "Bauer", plural: "-n", chinese: "农民" },
        { type: "other", word: "tschüß", chinese: "再见" },
        { type: "other", word: "Was ist er von Beruf?", chinese: "他是干什么的?" }
      ]
    },
    "Lektion 18": {
      title: "职业名称",
      words: [
        { type: "noun", article: "der", word: "Arzt", plural: "¨e", chinese: "医生" },
        { type: "noun", article: "der", word: "Techniker", plural: "-", chinese: "技术员" },
        { type: "noun", article: "die", word: "Ärztin", plural: "-nen", chinese: "女医生" },
        { type: "noun", article: "die", word: "Verkäuferin", plural: "-nen", chinese: "女售货员" },
        { type: "noun", article: "die", word: "Bäuerin", plural: "-nen", chinese: "女农民" },
        { type: "noun", article: "der", word: "Verkäufer", plural: "-", chinese: "售货员" },
        { type: "noun", article: "die", word: "Technikerin", plural: "-nen", chinese: "女技术员" },
        { type: "noun", article: "der", word: "Soldat", plural: "-en", chinese: "士兵" }
      ]
    },
    "Lektion 19": {
      title: "学校生活",
      words: [
        { type: "verb", word: "arbeiten", chinese: "工作", verbType: "vi" },
        { type: "noun", article: "der", word: "Schulgarten", plural: "¨", chinese: "校园" },
        { type: "other", word: "im = in dem", chinese: "在…里面" },
        { type: "pronoun", word: "unser", forms: ["unser", "unsere"], chinese: "我们的" },
        { type: "noun", article: "der", word: "Klassenleiter", plural: "-", chinese: "班主任" },
        { type: "noun", article: "der", word: "Klassenlehrer", plural: "-", chinese: "班主任" },
        { type: "adjective", word: "müde", chinese: "累的，疲倦的" },
        { type: "adjective", word: "durstig", chinese: "口渴的" },
        { type: "verb", word: "trinken", chinese: "喝", verbType: "vt" },
        { type: "other", word: "etwas", chinese: "少许，有些" },
        { type: "noun", article: "das", word: "Wasser", plural: "", chinese: "水" },
        { type: "adverb", word: "hier", chinese: "这儿" }
      ]
    },
    "Lektion 20": {
      title: "同学",
      words: [
        { type: "pronoun", word: "euer", forms: ["euer", "euere"], chinese: "你们的" },
        { type: "noun", article: "die", word: "Mitschülerin", plural: "-nen", chinese: "女同学" }
      ]
    },
    "Lektion 21": {
      title: "阅读与学习",
      words: [
        { type: "verb", word: "lesen", chinese: "阅读", verbType: "vt" },
        { type: "adverb", word: "zusammen", chinese: "一起" },
        { type: "noun", article: "das", word: "Bilderbuch", plural: "¨er", chinese: "连环画" },
        { type: "verb", word: "machen", chinese: "干，做", verbType: "vt" },
        { type: "adjective", word: "hilfsbereit", chinese: "乐于帮助人的" },
        { type: "verb", word: "wollen", chinese: "想" },
        { type: "other", word: "von", chinese: "从（…地方来）" },
        { type: "pronoun", word: "ihm", chinese: "他（第三格）" },
        { type: "verb", word: "lernen", chinese: "学习", verbType: "vt" }
      ]
    },
    "Lektion 22": {
      title: "绘画",
      words: [
        { type: "verb", word: "malen", chinese: "画，绘" },
        { type: "noun", article: "das", word: "Bild", plural: "-er", chinese: "图画" },
        { type: "other", word: "drei", chinese: "三" }
      ]
    },
    "Lektion 23": {
      title: "日常活动",
      words: [
        { type: "adverb", word: "schon", chinese: "已经" },
        { type: "adjective", word: "spät", chinese: "晚的，迟的" },
        { type: "verb", word: "gehen", chinese: "走", verbType: "vi" },
        { type: "verb", word: "schlafen", chinese: "睡觉", verbType: "vi" },
        { type: "verb", word: "vorbeikommen", chinese: "经过", verbType: "vi" },
        { type: "noun", article: "das", word: "Lehrerzimmer", plural: "-", chinese: "教师办公室" },
        { type: "adverb", word: "dort", chinese: "那儿" },
        { type: "adverb", word: "noch", chinese: "还" },
        { type: "verb", word: "schreiben", chinese: "写", verbType: "vt" },
        { type: "other", word: "doch", chinese: "然而，究竟" },
        { type: "adjective", word: "wirklich", chinese: "真实的，真正的" },
        { type: "adjective", word: "fleißig", chinese: "认真的，努力的" }
      ]
    },
    "Lektion 24": {
      title: "唱歌与说话",
      words: [
        { type: "verb", word: "singen", chinese: "唱", verbType: "vt" },
        { type: "noun", article: "das", word: "Lied", plural: "-er", chinese: "歌曲" },
        { type: "verb", word: "sagen", chinese: "说", verbType: "vt" },
        { type: "verb", word: "essen", chinese: "吃" }
      ]
    },
    "Lektion 25": {
      title: "看与取",
      words: [
        { type: "verb", word: "sehen", chinese: "看" },
        { type: "other", word: "mal", chinese: "一次，一下" },
        { type: "other", word: "wo", chinese: "哪儿" },
        { type: "noun", article: "die", word: "Thermosflasche", plural: "-n", chinese: "热水瓶" },
        { type: "verb", word: "holen", chinese: "取", verbType: "vt" }
      ]
    },
    "Lektion 26": {
      title: "",
      words: []
    },
    "Lektion 27": {
      title: "运动与作业",
      words: [
        { type: "adverb", word: "jetzt", chinese: "现在" },
        { type: "verb", word: "spielen", chinese: "玩", verbType: "vt" },
        { type: "noun", article: "der", word: "Korbball", plural: "¨e", chinese: "篮球" },
        { type: "noun", article: "die", word: "Schulaufgabe", plural: "-n", chinese: "学校作业" },
        { type: "adverb", word: "zuerst", chinese: "首先" },
        { type: "adverb", word: "dann", chinese: "然后" },
        { type: "adverb", word: "nachher", chinese: "以后，此后" }
      ]
    },
    "Lektion 28": {
      title: "球类运动",
      words: [
        { type: "noun", article: "der", word: "Federball", plural: "¨e", chinese: "羽毛球" },
        { type: "noun", article: "das", word: "Tischtennis", plural: "", chinese: "乒乓球" }
      ]
    },
    "Lektion 29": {
      title: "提问与设备",
      words: [
        { type: "verb", word: "wissen", chinese: "知道", verbType: "vt" },
        { type: "verb", word: "fragen", chinese: "问", verbType: "vt" },
        { type: "noun", article: "der", word: "Projektor", plural: "-en", chinese: "投影仪，幻灯机" },
        { type: "noun", article: "das", word: "Dia", plural: "-s", chinese: "幻灯片" },
        { type: "adverb", word: "einmal", chinese: "一次" },
        { type: "adjective", word: "schön", chinese: "美丽，漂亮" }
      ]
    },
    "Lektion 30": {
      title: "交通与建筑",
      words: [
        { type: "noun", article: "das", word: "Wörterbuch", plural: "¨er", chinese: "词典" },
        { type: "noun", article: "der", word: "Bus", plural: "-se", chinese: "公共汽车" },
        { type: "noun", article: "das", word: "Haus", plural: "¨er", chinese: "房屋" },
        { type: "other", word: "zwei", chinese: "2" }
      ]
    },
    "Lektion 31": {
      title: "去电影院",
      words: [
        { type: "adverb", word: "wohin", chinese: "去哪儿" },
        { type: "noun", article: "das", word: "Kino", plural: "-s", chinese: "电影院" },
        { type: "other", word: "ins Kino gehen", chinese: "去看电影" },
        { type: "other", word: "was für ein", forms: ["was für ein", "was für eine"], chinese: "怎样的一个" },
        { type: "noun", article: "der", word: "Film", plural: "-e", chinese: "电影" },
        { type: "verb", word: "laufen", chinese: "跑、放映", verbType: "vi" }
      ]
    }
  },

  // 语法练习数据
  grammar: {
    possessive: [
      { base: "dein", feminine: "deine", chinese: "你的" },
      { base: "mein", feminine: "meine", chinese: "我的" },
      { base: "sein", feminine: "seine", chinese: "他的" },
      { base: "ihr", feminine: "ihre", chinese: "她的" },
      { base: "unser", feminine: "unsere", chinese: "我们的" },
      { base: "euer", feminine: "euere", chinese: "你们的" },
      { base: "Ihr", feminine: "Ihre", chinese: "您的" }
    ],
    article: [
      { base: "ein", feminine: "eine", chinese: "一个" },
      { base: "kein", feminine: "keine", chinese: "没有" }
    ]
  }
};

// 导出（兼容多种使用方式）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = vocabularyData;
}
