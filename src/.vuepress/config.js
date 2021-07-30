module.exports = {
  // 基础配置
  base: '/Web-Docker/', // 部署站点的基础路径
  description: 'Docker相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'Docker笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: '基础知识',
          items: [{
            text: '一.Docker基础',
            link: '/base/build/1.index'
          },
          {
            text: '二.docker相关实践',
            link: '/base/practice/1.docker',
          }
          ]
        },
        {
          text: '高级知识',
          items: [{
            text: '一.组件精讲',
            link: '/senior/use/1.recursionAndDynamics'
          },
          {
            text: '二.TypeScript',
            link: '/senior/typeScript'
          },
          ]
        },
        {
          text: '源码知识',
          items: [{
            text: '1.vue源码解析',
            link: '/source/vue/1.preparation'
          },
          {
            text: '2.vuex源码解析',
            link: '/source/vuex'
          },
          {
            text: '3.vue-router源码解析',
            link: '/source/vue-router'
          },
          ]
        }
        ],
        sidebar: {
          '/base/build/': [
            '1.index',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21'
          ],
          '/base/practice/': [
            '1.docker', '2.Jenkins', '3.gitlab', 'vscode', 'test', 'prem', 'i18n'],
          '/senior/use/': ['1.recursionAndDynamics', '2.extend', '3.componentCommunication', '4.render', '5.api', '6.form', '7.checkBox', '8.active', '9.alert', '10.table', '11.tree'],
          '/senior/npm/': [],
          '/source/vue/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
        }
      }
    }
  },
}