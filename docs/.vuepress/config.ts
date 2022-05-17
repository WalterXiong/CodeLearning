import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  port: 8080,
  lang: "zh-CN",
  title: "主题演示",
  description: "vuepress-theme-hope 的演示",

  //指定 vuepress build 的输出目录
  dest: "docs/.vuepress/dist",

  // 是否开启默认预加载 js
  shouldPrefetch: (file, type) => false,

  base: "/CodeLearing/",

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
