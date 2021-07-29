const pxToRem = require('postcss-pxtorem')

export default {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/mdn/rms_2ddd4c/afts/img/A*XGPHS5H4-GkAAAAAAAAAAAAAARQnAQ',
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '发布日志',
      path: 'https://github.com/ant-design/ant-design-mobile/releases',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/ant-design/ant-design-mobile',
    },
  ],
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '快速上手',
        path: '/guide/quick-start',
      },
      {
        title: 'FAQ',
        path: '/guide/faq',
      },
    ],
    '/components': [
      {
        title: '基础组件',
        children: ['/components/button'],
      },
      {
        title: '数据展示',
        children: [
          '/components/notice-bar',
          '/components/water-mark',
          '/components/steps',
          '/components/index-bar',
          '/components/tag',
          '/components/desens-text',
          '/components/infinite-scroll',
          '/components/popover',
          '/components/ellipsis',
          '/components/badge',
          '/components/image',
          '/components/image-viewer',
          '/components/empty',
          '/components/card',
        ],
      },
      {
        title: '数据录入',
        children: [
          '/components/input',
          '/components/text-area',
          '/components/checkbox',
          '/components/radio',
          '/components/selector',
          '/components/switch',
          '/components/slider',
          '/components/picker',
          '/components/date-picker',
          '/components/form',
          '/components/cascader',
          '/components/search',
          '/components/rate',
        ],
      },
      {
        title: '反馈',
        children: [
          '/components/dialog',
          '/components/loading',
          '/components/mask',
          '/components/result',
          '/components/toast',
          '/components/error',
          '/components/progress-bar',
          '/components/progress-circle',
          '/components/pull-to-refresh',
          '/components/action-sheet',
        ],
      },
      {
        title: '导航和布局',
        children: [
          '/components/list',
          '/components/tabs',
          '/components/space',
          '/components/grid',
          '/components/dropdown',
          '/components/popup',
          '/components/tab-bar',
          '/components/divider',
          '/components/drawer',
        ],
      },
    ],
  },
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'antd-mobile/lib/index.less': process.cwd() + '/src/index.less',
  },
  styles: [
    `#root .__dumi-default-mobile-demo-layout {
      padding: 0;
      min-height: 100vh;
      background: #f5f5f5;
    }`,
  ],
  // extraPostCSSPlugins: [
  //   pxToRem({
  //     rootValue: 50,
  //     propList: ['*'],
  //   }),
  // ],
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
}
