const pxToRem = require('postcss-pxtorem')

export default {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/cadedaff-8c88-4af2-870f-0574d322761c.svg',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*ShzFT47r_F8AAAAAAAAAAAAAARQnAQ',
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
      title: '了解更多',
      children: [
        {
          title: 'Roadmap',
          path: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
        },
        {
          title: '参与贡献',
          path: 'https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md',
        },
      ],
    },
    {
      title: '返回旧版',
      children: [
        {
          title: 'v2',
          path: 'https://antd-mobile-v2.surge.sh',
        },
        {
          title: 'v2 国内站点',
          path: 'https://antd-mobile-doc-v2.gitee.io',
        },
        {
          title: 'v3 alpha',
          path: 'https://antd-mobile-v3.surge.sh',
        },
      ],
    },
    {
      title: '在线体验',
      path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
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
      {
        title: 'CSS 变量',
        path: '/guide/css-variables',
      },
      {
        title: '主题',
        path: '/guide/theme',
      },
      {
        title: '按需加载',
        path: '/guide/import-on-demand',
      },
      {
        title: '高清适配（试验性）',
        path: '/guide/hd',
      },
      {
        title: '服务端渲染 / SSR（试验性）',
        path: '/guide/ssr',
      },
    ],
    '/components': [
      {
        title: '基础',
        children: [
          '/components/button',
          '/components/icon',
          '/components/list',
          '/components/space',
        ],
      },
      {
        title: '数据展示',
        children: [
          '/components/badge',
          '/components/card',
          '/components/ellipsis',
          '/components/image',
          '/components/image-viewer',
          '/components/infinite-scroll',
          '/components/notice-bar',
          '/components/page-indicator',
          '/components/popover',
          '/components/steps',
          '/components/swiper',
          '/components/tag',
          '/components/water-mark',
        ],
      },
      {
        title: '数据录入',
        children: [
          '/components/check-list',
          '/components/checkbox',
          '/components/date-picker',
          '/components/form',
          '/components/input',
          '/components/picker',
          '/components/radio',
          '/components/rate',
          '/components/search',
          '/components/selector',
          '/components/slider',
          '/components/stepper',
          '/components/switch',
          '/components/text-area',
        ],
      },
      {
        title: '反馈',
        children: [
          '/components/action-sheet',
          '/components/dialog',
          '/components/empty',
          '/components/error-block',
          '/components/loading',
          '/components/mask',
          '/components/progress-bar',
          '/components/progress-circle',
          '/components/pull-to-refresh',
          '/components/result',
          '/components/swipe-action',
          '/components/toast',
        ],
      },
      {
        title: '导航和布局',
        children: [
          '/components/collapse',
          '/components/divider',
          '/components/dropdown',
          '/components/floating-panel',
          '/components/grid',
          '/components/index-bar',
          '/components/nav-bar',
          '/components/popup',
          '/components/tab-bar',
          '/components/tabs',
        ],
      },
      {
        title: '其他',
        children: ['/components/config-provider'],
      },
      {
        title: '试验性',
        children: [
          '/components/what-is-experimental',
          '/components/cascader',
          '/components/desense-text',
          '/components/image-uploader',
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
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#f5f5f5'
    }`,
    'https://s9.cnzz.com/z_stat.php?id=1280306924&web_id=1280306924',
  ],
  styles: [
    `
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    a[title='站长统计'] {
      display: none;
    }
    `,
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
