const pxToRem = require('postcss-pxtorem')

export default {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/mdn/rms_2ddd4c/afts/img/A*XGPHS5H4-GkAAAAAAAAAAAAAARQnAQ',
  navs: [
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '文档',
      path: '/docs',
    },
  ],
  menus: {
    '/docs': [
      {
        title: '使用文档',
        children: ['quick-start'],
      },
    ],
    '/components': [
      {
        title: '基础组件',
        children: ['button'],
      },
      {
        title: '数据展示',
        children: [
          'notice-bar',
          'water-mark',
          'steps',
          'index-bar',
          'tag',
          'desens-text',
          'infinite-scroll',
          'popover',
          'ellipsis',
          'badge',
          'image',
          'image-viewer',
          'empty',
          'card',
        ],
      },
      {
        title: '数据录入',
        children: [
          'input',
          'checkbox',
          'radio',
          'selector',
          'switch',
          'slider',
          'picker',
          'date-picker',
          'form',
          'cascader',
          'search',
          'rate',
          'image-uploader',
        ],
      },
      {
        title: '反馈',
        children: [
          'dialog',
          'loading',
          'mask',
          'result',
          'toast',
          'error',
          'progress-bar',
          'progress-circle',
          'pull-to-refresh',
          'action-sheet',
        ],
      },
      {
        title: '导航和布局',
        children: [
          'list',
          'tabs',
          'space',
          'grid',
          'dropdown',
          'popup',
          'tab-bar',
          'divider',
        ],
      },
    ],
  },
  resolve: {
    includes: ['docs', 'src', 'src/components'],
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
