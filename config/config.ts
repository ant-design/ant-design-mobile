// this file only used by dev
// not used by father-build

const componentMenus = [
  {
    title: 'Navigation',
    'title.zh-CN': '导航',
    children: [
      'Badge',
      'GuideModal',
      'HorizontalScrollbar',
      'NoticeBar',
      'TabBar',
      'Tabs',
      'Tag',
      'Tips',
    ],
  },
  {
    title: 'Data Display',
    'title.zh-CN': '数据展示',
    children: [
      'Avatar',
      'Collapse',
      'Container',
      'Coupon',
      'Footer',
      'Icon',
      'List',
      'SearchBar',
      'Steps',
      'Swiper',
    ],
  },
  {
    title: 'Data Entry',
    'title.zh-CN': '数据录入',
    children: [
      'Button',
      'Checkbox',
      'InputItem',
      'NumericInput',
      'Picker',
      'Radio',
      'Selector',
      'Stepper',
      'Switch',
      'Terms',
    ],
  },
  {
    title: 'Feedback',
    'title.zh-CN': '反馈',
    children: [
      'ActionSheet',
      'ErrorBlock',
      'ErrorPage',
      'Loading',
      'Modal',
      'Popover',
      'PullToRefresh',
      'Result',
      'SwipeAction',
      'Toast',
    ],
  },
  {
    title: 'Other',
    'title.zh-CN': '其他',
    children: ['CountDown', 'LocaleProvider', 'Tracker'],
  },
]

function getComponentMenus(locale) {
  return componentMenus.map(item => ({
    title: item[locale === 'zh-CN' ? 'title.zh-CN' : 'title'],
    children: item.children,
  }))
}

export default {
  title: 'Ant Design Mobile',
  mode: 'site',
  exportStatic: {},
  hash: true,
  base: '/ant-design-mobile',
  publicPath: '/ant-design-mobile/',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  logo:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  menus: {
    '/components': getComponentMenus('en-US'),
    '/zh-CN/components': getComponentMenus('zh-CN'),
  },
  theme: {
    '@hd': '0.02rem',
  },
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  styles: [
    `.__dumi-default-mobile-demo-layout {
      min-height: 100vh;
      background: #f5f5f5;
      padding: 0 !important;
      overflow: hidden;
      font-size: 0.26rem;
    }
    .__dumi-default-device-status {
      border-bottom: 1px solid #e3e3e3;
    }
    .__dumi-default-mobile-previewer {
      font-size: initial;
    }
    `,
  ],
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
}
