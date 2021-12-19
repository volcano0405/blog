module.exports = {
  base: '/blog/',
  dest: 'dist',
  title: '三十岁大叔爱做梦',
  description: '学习是一种习惯，以此记录自己学习的过程',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }],
  ],
  serviceWorker: false,
  theme: 'antdocs',
  themeConfig: {
    // logo: '/assets/logo.png', //网页顶端导航栏左上角的图标
    search: true,
    searchMaxSuggestions: 10,
    repo: 'https://github.com/volcano0405/blog',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    backToTop: true,
    displayAllHeaders: true,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'LeetCode',
        link: '/leetcode/'
      },
    ],
    sidebar: {
      '/leetcode/': [
        '',     
        '997.找到小镇的法官',
      ],
    },
  },
}