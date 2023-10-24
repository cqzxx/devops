import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  lastUpdated: true,
  title: "运维开发笔记",
  description: "运维开发者的工作学习笔记",
  head: [
    ['link', { rel: 'icon', href: '/abc.png' }],
    ['link', { rel: 'stylesheet', href: '/static/css/style.css' }],
    [
      'script',
      { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3829557881750869', crossorigin: 'anonymous' }
    ],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-KTBK3TKH1D' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KTBK3TKH1D');`
    ],
  ],
  cleanUrls: true,  // 干净的路由，不带 .html
  // rewrites: {
  //   'python/index.md': 'python/0083.md',
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/abc.png',
    nav: [
      // { text: 'Python', link: '/python/' },
      {
        text: 'Python',
        items: [
          { text: '语法', link: '/python/0083' },
          { text: '练习题', link: '/basic/8301' },
          { text: '常用代码', link: '/code/7857' },
        ]
      },
      { text: 'Linux', link: '/linux/2336' },
      { text: '前端', link: '/fe/8038' },
      { text: '运维', link: '/op/0473' },
    ],
    sidebar: {
      '/python/': [
        {
          text: 'Python 快速入门',
          items: [
            { text: '基础语法', link: '/python/0083' },
            { text: '数据类型', link: '/python/6668' },
            { text: '运算', link: '/python/1736' },
            { text: '条件语句', link: '/python/8369' },
            { text: '循环语句', link: '/python/0684' },
            { text: '函数', link: '/python/0508' },
            { text: '类', link: '/python/4807' },
            { text: '后续方向', link: '/python/7709' },
          ]
        },
        {
          text: 'Python 进阶',
          items: [
            { text: 'GIL 全局解释器锁', link: '/python/0512' },
            { text: '循环与异常中的 else 子句', link: '/python/7118' },
            { text: '简单语句', link: '/python/8230' },
            { text: 'match 语句（3.10 新增）', link: '/python/2440' },
            { text: 'lambda 表达式', link: '/python/2743' },
            { text: '复合语句', link: '/python/0086' },
            { text: '函数注解', link: '/python/2719' },
          ]
        },
      ],
      '/basic/': [
        {
          text: 'Python 练习题',
          items: [
            { text: '小游戏',
              items: [
                { text: '猜数游戏', link: '/basic/8301' },
                { text: '石头剪刀布', link: '/basic/1420' },
                { text: '统计字符数量', link: '/basic/1376' },
                { text: '字符串加密', link: '/basic/1253' },
              ]
            },
            { text: '数学',
              items: [
                { text: '九九乘法表', link: '/basic/9025' },
                { text: '水仙花数', link: '/basic/6142' },
                { text: '素数', link: '/basic/6708' },
                { text: '求阶乘', link: '/basic/1352' },
                { text: '杨辉三角形', link: '/basic/2668' },
                { text: '斐波那契数列', link: '/basic/6639' },
                { text: '回文数', link: '/basic/2989' },
                { text: '非利克瑞尔数', link: '/basic/1853' },
                { text: '十进制转二进制', link: '/basic/5844' },
                { text: '矩阵转置', link: '/basic/4322' },
                { text: '矩阵相加', link: '/basic/8961' },
                { text: '矩阵相乘', link: '/basic/3984' },
              ]
            },
            { text: '海龟绘图',
              items: [
                { text: '随机对称图形', link: '/basic/4144' },
                { text: '数字时钟', link: '/basic/7764' },
                { text: '黄金螺旋', link: '/basic/7859' },
                { text: '太极图', link: '/basic/9354' },
              ]
            },
            { text: '排序算法',
              items: [
                { text: '选择排序', link: '/basic/5982' },
                { text: '冒泡排序', link: '/basic/9746' },
                { text: '插入排序', link: '/basic/7394' },
                { text: '归并排序', link: '/basic/6936' },
                { text: '快速排序', link: '/basic/3002' },
                { text: '指鹿为马排序', link: '/basic/3982' },
              ]
            },
            { text: '爬虫',
              items: [
                { text: '正则表达式', link: '/basic/5995' },
                { text: 'BeautifulSoup 库', link: '/basic/5642' },
                { text: '豆瓣电影Top250（实战）', link: '/basic/0135' },
              ]
            },
            { text: '数独实现',
              items: [
                { text: '数独生成', link: '/basic/6625' },
                { text: '数独求解', link: '/basic/3765' },
              ]
            },
            { text: 'pygame 游戏开发',
              items: [
                { text: '贪吃蛇', link: '/basic/4882' },
                { text: '俄罗斯方块', link: '/basic/6270' },
              ]
            },
            { text: '检测密码强度', link: '/basic/1092' },
            { text: '检测自己的 python 等级', link: '/basic/9103' },
            { text: '读写文件', link: '/basic/6887' },
            { text: '注册登录系统（类）', link: '/basic/4007' },
            { text: '文字转二维码', link: '/basic/9604' },
          ]
        },
      ],
      '/code/': [
        {
          text: 'Python 常用代码示例',
          items: [
            { text: '字符串格式化', link: '/code/7857' },
            { text: '日期格式转换', link: '/code/8596' },
            { text: '正则表达式', link: '/code/2854' },
            { text: '装饰器', link: '/code/4578' },
            { text: '多线程的简单使用', link: '/code/1710' },
            { text: '协程的简单使用', link: '/code/5134' },
            { text: '连接数据库',
              items: [
                { text: 'PyMySQL 的封装使用', link: '/code/0409' },
                { text: 'PyMongo 的使用', link: '/code/5894' },
              ]
            },
            { text: '工具',
              items: [
                { text: 'PrettyTable 的使用', link: '/code/2001' },
                { text: '发送邮件', link: '/code/1363' },
                { text: 'Markdown 转 HTML', link: '/code/1172' },
                { text: 'Selenium 的使用', link: '/code/5127' },
                { text: 'Pandas 常用操作', link: '/code/6707' },
              ]
            },
            { text: '群 webhook 机器人',
              items: [
                { text: '企业微信群机器人', link: '/code/7887' },
                { text: '飞书群机器人', link: '/code/6743' },
                { text: '钉钉群机器人', link: '/code/9387' },
              ]
            },
            { text: 'QQ 机器人', link: '/code/5807' },
          ]
        },
      ],
      '/fe/': [
        {
          text: 'HTML',
          items: [
            { text: 'Server-Sent Events', link: '/fe/5189' },
          ]
        },
        {
          text: 'CSS',
          items: [
            { text: 'css 图标旋转', link: '/fe/4733' },
            { text: '滚动条美化', link: '/fe/3690' },
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'js 基础语法', link: '/fe/8038' },
            { text: 'js 常用属性与方法', link: '/fe/1845' },
            { text: '使用 moment 库显示相对时间', link: '/fe/0858' },
            { text: '点击复制到剪切板', link: '/fe/8504' },
          ]
        },
        {
          text: 'Vue.js',
          items: [
            { text: 'Vue 常用代码片段', link: '/fe/9541' },
            { text: 'Vue 中使用 echarts', link: '/fe/3384' },
          ]
        },
      ],
      '/linux/': [
        {
          // text: '',
          items: [
            { text: 'Linux 常用命令', link: '/linux/2336' },
            { text: 'Git 常用命令', link: '/linux/6749' },
            { text: 'systemctl 的使用', link: '/linux/7984' },
          ]
        },
      ],
      '/op/': [
        {
          // text: '',
          items: [
            { text: '运维四要素', link: '/op/0473' },
          ]
        },
        {
          text: '工具软件',
          items: [
            { text: 'Supervisor', link: '/op/0054' },
          ]
        },
      ],
    },
    outline: {
      level: 'deep',
      // label: '本页导航'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/shenxgan/devops' }
    ],
    editLink: {
      pattern: 'https://github.com/shenxgan/devops/edit/main/:path',
      text: 'Edit this page on GitHub',
      // text: '在 GitHub 上编辑此页',
    },
    lastUpdated: {
      text: '最近更新',
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Powered By <a href="https://vitepress.dev/"><img src="https://vitepress.dev/vitepress-logo-mini.svg"></img><b>VitePress</b></a>',
      // copyright: 'Copyright © 2023-present Shenxgan'
      copyright: '<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011302003970"><img src="https://www.beian.gov.cn/img/ghs.png" /><span>京公网安备11011302003970号</span></a><a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2022012301号-1</a>'
    },
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // }
  },
  markdown: {
    lineNumbers: true,
  },
  sitemap: {
    hostname: 'https://python-abc.xyz'
  },
})
