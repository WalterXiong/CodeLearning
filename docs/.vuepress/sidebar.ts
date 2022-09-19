import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  
  '/language/': [
    {
      text: "目录介绍",        // 必要的，分组的标题文字
      icon: "creative",       // 可选的, 分组标题对应的图标
      prefix: "/language/",   // 可选的，会添加到每个 item 链接地址之前
      link: "/language/",     // 可选的, 分组标题对应的链接
      collapsable: false,     // 可选的，分组标题是否可以折叠
      children: [],           // 必要的，分组的子项目
    },
    {
      text: "Java",
      icon: "java",
      prefix: "java/",
      collapsable: true,
      children: [
        {
          text: "基础",
          icon: "null",
          prefix: "basis/",
          collapsable: true,
          children: ["语法基础"],
        },
        {
          text: "集合",
          icon: "box",
          prefix: "collection/",
          collapsable: true,
          children: ["HashMap"],
        },
        {
          text: "并发",
          icon: "asynchronous",
          prefix: "concurrent/",
          collapsable: true,
          children: "structure",
        },
        {
          text: "JVM",
          icon: "back-stage",
          prefix: "jvm/",
          collapsable: true,
          children: ["jvm-memoryarea", "jvm-gcandmemoryallocationstrategy"],
        },
        {
          text: "新特性",
          icon: "preview",
          prefix: "newfeatures/",
          collapsable: true,
          children: "structure",
        },
      ],
    },
    {
      text: "C#",
      icon: "mesh",
      prefix: "csharp/",
      collapsable: true,
      children: []
    },
  ],

  // 随笔的边栏
  '/essay/': [
    {
      text: "目录介绍",
      icon: "creative",
      prefix: "essay/",
      link: "essay/",
      collapsable: false,
      children: [],
    },
  ],

  //软件分享的边栏
  '/softwareshare/': [],

  // 设置在最后
  "/": [],

  /*"/":[
    "/",
    "/home",
    "/slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "/guide/",
      link: "/guide/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "/posts/",
      children: [
        {
          text: "文章 1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "文章 5-12",
          icon: "note",
          children: [
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ]*/


});
