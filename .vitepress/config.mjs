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
  ],
  cleanUrls: true,  // 干净的路由，不带 .html
  // rewrites: {
  //   'python/index.md': 'python/0083.md',
  // },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/abc.png',
    nav: [
      { text: 'Python', link: '/python/' },
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
            { text: '=后续学习方向=', link: '/python/7709' },
            // { text: 'GIL 全局解释器锁', link: '/python/0512' },
            // { text: '循环与异常中的 else 子句', link: '/python/7118' },
            // { text: '简单语句', link: '/python/8230' },
            // { text: 'match 语句（3.10 新增）', link: '/python/2440' },
            // { text: 'lambda 表达式', link: '/python/2743' },
            // { text: '复合语句', link: '/python/0086' },
            // { text: '函数注解', link: '/python/2719' },
          ]
        },
        {
          text: 'Python 练习题',
          items: [
            { text: '小游戏',
              items: [
                { text: '猜数游戏', link: '/python/8301' },
                { text: '石头剪刀布', link: '/python/1420' },
                { text: '字符串加密', link: '/python/1253' },
              ]
            },
            { text: '数学',
              items: [
                { text: '九九乘法表', link: '/python/9025' },
                { text: '水仙花数', link: '/python/6142' },
                { text: '求阶乘', link: '/python/1352' },
                { text: '杨辉三角形', link: '/python/2668' },
                { text: '回文数', link: '/python/2989' },
                { text: '素数', link: '/python/6708' },
                { text: '非利克瑞尔数', link: '/python/1853' },
                { text: '十进制转二进制', link: '/python/5844' },
              ]
            },
            { text: '统计字符数量', link: '/python/1376' },
            { text: '注册登录系统（类）', link: '/python/4007' },
            { text: '海龟绘图',
              items: [
                { text: '随机对称图形', link: '/python/4144' },
                { text: '数字时钟', link: '/python/7764' },
                { text: '黄金螺旋', link: '/python/7859' },
                { text: '太极图', link: '/python/9354' },
              ]
            },
            { text: '检测密码强度', link: '/python/1092' },
            { text: '检测自己的 Python 等级', link: '/python/9103' },
            { text: '斐波那契数列', link: '/python/6639' },
            { text: '矩阵',
              items: [
                { text: '矩阵转置', link: '/python/4322' },
                { text: '矩阵相加', link: '/python/8961' },
                { text: '矩阵相乘', link: '/python/3984' },
              ]
            },
            { text: '排序算法',
              items: [
                { text: '选择排序', link: '/python/5982' },
                { text: '冒泡排序', link: '/python/9746' },
                { text: '插入排序', link: '/python/7394' },
                { text: '归并排序', link: '/python/6936' },
                { text: '快速排序', link: '/python/3002' },
                { text: '指鹿为马排序', link: '/python/3982' },
              ]
            },
            { text: '读写文件', link: '/python/6887' },
            { text: '爬虫',
              items: [
                { text: '正则表达式', link: '/python/5995' },
                { text: 'BeautifulSoup 库', link: '/python/5642' },
                { text: '豆瓣电影Top250（实战）', link: '/python/0135' },
              ]
            },
            { text: '数独实现',
              items: [
                { text: '数独生成', link: '/python/6625' },
                { text: '数独求解', link: '/python/3765' },
              ]
            },
            { text: '文字转二维码', link: '/python/9604' },
            { text: 'pygame 游戏开发',
              items: [
                { text: '贪吃蛇', link: '/python/4882' },
                { text: '俄罗斯方块', link: '/python/6270' },
              ]
            },
          ]
        },
        {
          text: 'Python 常用代码示例',
          items: [
            { text: 'PrettyTable 的使用', link: '/python/2001' },
            { text: '装饰器', link: '/python/4578' },
            { text: '发送邮件', link: '/python/1363' },
            { text: '日期格式转换', link: '/python/8596' },
            { text: '字符串格式化', link: '/python/7857' },
            { text: 'PyMySQL 的封装使用', link: '/python/0409' },
            { text: 'PyMongo 的使用', link: '/python/5894' },
            { text: '企业微信群机器人', link: '/python/7887' },
            { text: '飞书群机器人', link: '/python/6743' },
            { text: '钉钉群机器人', link: '/python/9387' },
            { text: '多线程的简单使用', link: '/python/1710' },
            { text: 'Markdown 转 HTML', link: '/python/1172' },
            { text: '正则表达式', link: '/python/2854' },
            { text: 'Selenium 的使用', link: '/python/5127' },
            { text: 'QQ 机器人', link: '/python/5807' },
            { text: '协程的简单使用', link: '/python/5134' },
            { text: 'Pandas 常用操作', link: '/python/6707' },
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
      message: '<div>Powered By <a href="https://vitepress.dev/"><img style="display: unset; height: 21px; margin-bottom: -6px;" src="https://vitepress.dev/vitepress-logo-mini.svg"></img><b>VitePress</b></a></div>',
      // copyright: 'Copyright © 2023-present Shenxgan'
    },
    // docFooter: {
    //   prev: '上一页',
    //   next: '下一页'
    // }
  },
  markdown: {
    lineNumbers: true,
  },
})
