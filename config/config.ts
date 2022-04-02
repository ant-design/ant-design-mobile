import { components } from './components'
import { IConfig } from 'dumi'

const pxToRem = require('postcss-pxtorem')

const config: IConfig = {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  navs: {
    'en': [
      {
        title: 'Guide',
        path: '/guide',
      },
      {
        title: 'Components',
        path: '/components',
      },
      {
        title: 'Discover More',
        children: [
          {
            title: 'Playground',
            path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
          },
          {
            title: 'Roadmap',
            path: 'https://github.com/ant-design/ant-design-mobile/discussions/3924',
          },
          {
            title: 'Contributing',
            path: 'https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md',
          },
        ],
      },
      {
        title: 'Legacy Versions',
        children: [
          {
            title: 'v2',
            path: 'https://antd-mobile-v2.surge.sh',
          },
          {
            title: 'v3 alpha',
            path: 'https://antd-mobile-v3.surge.sh',
          },
        ],
      },
      {
        title: 'Releases',
        path: 'https://github.com/ant-design/ant-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-mobile',
      },
    ],
    'zh': [
      {
        title: '指南',
        path: '/zh/guide',
      },
      {
        title: '组件',
        path: '/zh/components',
      },
      {
        title: '了解更多',
        children: [
          {
            title: '在线体验',
            path: 'https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json',
          },
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
        title: '发布日志',
        path: 'https://github.com/ant-design/ant-design-mobile/releases',
      },
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-mobile',
      },
    ],
  },
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/zh': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: 'Quick Start',
        path: '/guide/quick-start',
      },
      {
        title: 'Migration',
        path: '/guide/migration',
      },
      {
        title: 'FAQ',
        path: '/guide/faq',
      },
      {
        title: 'CSS Variables',
        path: '/guide/css-variables',
      },
      {
        title: 'Theming',
        path: '/guide/theming',
      },
      {
        title: 'Load on Demand',
        path: '/guide/import-on-demand',
      },
      {
        title: 'Internationalization',
        path: '/guide/i18n',
      },
      {
        title: 'About Experimental',
        path: '/zh/guide/what-is-experimental',
      },
      {
        title: 'HD (Experimental)',
        path: '/guide/hd',
      },
      {
        title: 'SSR (Experimental)',
        path: '/guide/ssr',
      },
    ],
    '/zh/guide': [
      {
        title: '快速上手',
        path: '/zh/guide/quick-start',
      },
      {
        title: '迁移指南',
        path: '/guide/migration',
      },
      {
        title: '常见问题',
        path: '/zh/guide/faq',
      },
      {
        title: 'CSS 变量',
        path: '/zh/guide/css-variables',
      },
      {
        title: '主题',
        path: '/zh/guide/theming',
      },
      {
        title: '按需加载',
        path: '/zh/guide/import-on-demand',
      },
      {
        title: '国际化',
        path: '/zh/guide/i18n',
      },
      {
        title: '关于试验性',
        path: '/zh/guide/what-is-experimental',
      },
      {
        title: '高清适配（试验性）',
        path: '/zh/guide/hd',
      },
      {
        title: '服务端渲染 / SSR（试验性）',
        path: '/zh/guide/ssr',
      },
    ],
    '/components': [
      {
        title: 'Basic',
        children: components.basic,
      },
      {
        title: 'Data Display',
        children: components.dataDisplay,
      },
      {
        title: 'Data Entry',
        children: components.dataEntry,
      },
      {
        title: 'Feedback',
        children: components.feedback,
      },
      {
        title: 'Navigation & Layout',
        children: components.navigationAndLayout,
      },
      {
        title: 'Other',
        children: components.other,
      },
      {
        title: 'Experimental',
        children: components.experimental,
      },
    ],
    '/zh/components': [
      {
        title: '基础',
        children: components.basic,
      },
      {
        title: '数据展示',
        children: components.dataDisplay,
      },
      {
        title: '数据录入',
        children: components.dataEntry,
      },
      {
        title: '反馈',
        children: components.feedback,
      },
      {
        title: '导航和布局',
        children: components.navigationAndLayout,
      },
      {
        title: '其他',
        children: components.other,
      },
      {
        title: '试验性',
        children: components.experimental,
      },
    ],
  },
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  alias: {
    'antd-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
  ],
  hash: true,
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.body.style.background = '#FAFBFC'
    }`,
    `
    if (!location.port) {
      // Enable Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-72788897-2');
    }
    `,
    'https://s9.cnzz.com/z_stat.php?id=1280306924&web_id=1280306924',
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-72788897-2',
      async: true,
    },
  ],
  locales: [
    ['en', 'English'],
    ['zh', '中文'],
  ],
  styles: [
    `
    html {
      touch-action: manipulation;
    }
    #root .__dumi-default-mobile-demo-layout {
      padding: 0;
    }
    a[title='站长统计'] {
      display: none;
    }
    html {
      min-height: 100vh;
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
  plugins: ['./.dumi/plugin-gallery/index.ts'],
}

export default config
