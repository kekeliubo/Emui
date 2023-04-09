export default {
    title:"Emui",
    base:'/',
    themeConfig: {
      logo:'/logo.png',
      siteTitle: "Emui",
      nav: [
        {text:"首页",link:"/"},
        { text: "指南", link: "/guide/" },
        { text: "组件", link: "/components/button/" },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/qddidi/easyest" },
      ],
      sidebar: {
        "/guild/": [
            {
                text: "基础",
                items: [
                    {
                        text: "安装",
                        link: "/guide/",
                    },
                ],
            },
            {
                text: "进阶",
                items: [
                    {
                        text: "xx",
                        link: "/xx",
                    },
                ],
            },
        ],
        "/components/": [
            {
                text: "基础组件",
                items: [
                    {
                        text: "Button",
                        link: "/components/button",
                    }
                ],
            }
        ]
    },
    },
  };