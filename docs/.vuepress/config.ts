import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "CodeLearning",
  description: "Mr.Xiong Code学习",

  //指定 vuepress build 的输出目录
  dest: "./dist",

  // 是否开启默认预加载 js
  shouldPrefetch: (file, type) => false,

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  theme,
});
