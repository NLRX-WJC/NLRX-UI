const path = require("path");
module.exports = {
  title: "NLRX-UI", 
  description: "一个只可亵玩不可生产的Vue组件库", 
  base: "/NLRX-UI/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "public", "assets")
      }
    }
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: `/logo.png`
      }
    ]
  ],
  themeConfig: {
    repo: "NLRX-WJC/NLRX-UI",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "主页",
        link: "/"
      } 
    ],
    sidebar: [
      {
        title: '开发指南',
        collapsable: false,
        children: [
          ['/install/','安装'],
          ['/started/','快速上手']
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          ['/components/button','Button 按钮'],
          ['/components/input','Input 输入框'],
          ['/components/layout','Layout 布局'],
          ['/components/container','Container 布局容器'],
          ['/components/message','Message 消息提示'],
          ['/components/progress','Progress 进度条'],
          ['/components/carousel','Carousel 走马灯'],
        ]
      }
    ]
  },
  plugins: [
    ["@vuepress/back-to-top", true]
  ],
  scss: {
    sassOptions: {
      includePaths: [path.join(__dirname, "../../src/styles")]
    }
  }
};
