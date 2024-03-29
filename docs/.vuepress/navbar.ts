import { navbar } from "vuepress-theme-hope";

export default navbar([
  
  // docs 下的 README.md blog 页面
  "/",

  // 文档主页
  //{ text: "主页", icon: "home", link: "/home", },

  // 代码笔记
  { text: "代码笔记", icon: "code", link: "/language", },
  
  // 随笔
  { text: "随笔", icon: "edit", link: "/essay", },

  // 软件教程
  {
    text: "软件教程",
    icon: "software",
    prefix: "/softwareshare/",
    children: [
      // 暂时还没有随笔 不知道写啥
      { text: "Git", icon: "edit", link: "git" },
      { text: "NPM", icon: "edit", link: "npm" },
      { text: "CMD", icon: "edit", link: "cmd" },
      //"article4",
    ]
  },

  /*"/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "文章 1", icon: "edit", link: "article1" },
          { text: "文章 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "文章 5-12",
        icon: "edit",
        children: [
          {
            text: "文章 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "文章 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "文章 9", icon: "edit", link: "article9" },
      { text: "文章 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },*/
]);
