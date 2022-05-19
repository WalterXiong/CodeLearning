//import { docsearchPlugin } from "@vuepress/plugin-docsearch";
//import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CodeLearning",
  description: "This is a learning project",

  base: "/CodeLearning/",

  //dest: "docs/.vuepress/dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  plugins: [

    // docsearchPlugin({
    //   // 你的选项
    //   // appId, apiKey 和 indexName 是必填的
    //   appId: "",
    //   apiKey: "",
    //   indexName: "",
      
    // }),

    // searchPlugin({
    //   // https://v2.vuepress.vuejs.org/zh/reference/plugin/search.html
    //   // 排除首页
    //   isSearchable: (page) => page.path !== "/",
    //   maxSuggestions: 10,
    //   hotKeys: ["s", "/"],
    //   // 用于在页面的搜索索引中添加额外字段
    //   getExtraFields: () => [],
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     },
    //   },
    // }),

  ],

  theme,
});
