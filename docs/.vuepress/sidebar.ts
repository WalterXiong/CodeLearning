import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  
  '/language/': [
    {
      text: "目录介绍",        // 必要的，分组的标题文字
      icon: "creative",       // 可选的, 分组标题对应的图标
      prefix: "/language/",   // 可选的，会添加到每个 item 链接地址之前
      link: "/language/",     // 可选的, 分组标题对应的链接
      collapsible: false,     // 可选的，分组标题是否可以折叠
      children: [],           // 必要的，分组的子项目
    },

    {
      text: "Java",
      icon: "java",
      prefix: "java/",
      collapsible: true,
      children: [
        {
          text: "基础",
          icon: "null",
          prefix: "basis/",
          collapsible: true,
          children: ["语法基础"],
        },
        {
          text: "集合",
          icon: "box",
          prefix: "collection/",
          collapsible: true,
          children: [
            "Collection", 
            "HashMap"
          ],
        },
        {
          text: "并发",
          icon: "asynchronous",
          prefix: "concurrent/",
          collapsible: true,
          children: [
            "线程安全与锁优化",
            "线程安全与锁优化 - Synchronized 原理剖析"
          ],
        },
        {
          text: "JVM",
          icon: "back-stage",
          prefix: "jvm/",
          collapsible: true,
          children: [
            "jvm-memoryarea", 
            "jvm-gcandmemoryallocationstrategy"
          ],
        },
        {
          text: "新特性",
          icon: "preview",
          prefix: "newfeatures/",
          collapsible: true,
          children: "structure",
        },


        {
          text: "Spring框架",
          icon: "operate",
          prefix: "frame/SpringFamily/",
          collapsible: true,
          children: [
            "Spring-IoC", 
            "Spring-AoP",
            "Spring-MVC", 
            "Spring-事务", 
            "SpringBoot-自动装配原理详解"
          ]
        },

      ],
    },

    {
      text: "C#",
      icon: "mesh",
      prefix: "csharp/",
      collapsible: true,
      children: [
        "BasicDefinitionAndOperator", 
        "ExpressionAndStatement"
      ]
    },
  ],

  // 随笔的边栏
  '/essay/': [
    {
      text: "目录介绍",
      icon: "creative",
      prefix: "essay/",
      link: "essay/",
      collapsible: false,
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
