// this file only used by dev
// not used by father-build

const componentMenus = [
  {
    title: 'Navigation',
    'title.zh-CN': '导航',
    children: [
      'Tag',
      'Tabs',
      'Tips',
      'Badge',
      'TabBar',
      'NoticeBar',
      'GuideModal',
      'HorizontalScrollbar',
    ],
  },
  {
    title: 'Data Display',
    'title.zh-CN': '数据展示',
    children: [
      'Icon',
      'List',
      'Steps',
      'Avatar',
      'Footer',
      'Carousel',
      'Collapse',
      'Container',
      'SearchBar',
    ],
  },
  {
    title: 'Data Entry',
    'title.zh-CN': '数据录入',
    children: [
      'Radio',
      'Terms',
      'Button',
      'Picker',
      'Switch',
      'Stepper',
      'Checkbox',
      'Selector',
      'InputItem',
      'NumericInput',
    ],
  },
  {
    title: 'Feedback',
    'title.zh-CN': '反馈',
    children: [
      'Toast',
      'Modal',
      'Result',
      'Loading',
      'Popover',
      'ErrorPage',
      'ErrorBlock',
      'ActionSheet',
      'SwipeAction',
      'PullToRefresh',
    ],
  },
  {
    title: 'Other',
    'title.zh-CN': '其他',
    children: ['Coupon', 'Tracker', 'CountDown', 'LocaleProvider'],
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
  favicon:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  logo:
    'https://gw.alipayobjects.com/mdn/rms/afts/img/A*ANrfQaxlbVcAAAAAAAAAAABkARQnAQ',
  menus: {
    '/components': getComponentMenus('en-US'),
    '/zh-CN/components': getComponentMenus('zh-CN'),
  },
  styles: [
    `
.__dumi-default-previewer-demo {
  margin: 20px auto;
  max-width: 375px;
  height: 667px;
  overflow-y: auto;
  border: 12px solid #ccc;
  border-radius: 42px;
  box-shadow: 0 0 0 1px #e3e3e3;
  background: #f5f5f5;
  padding: 0!important;
}

.__dumi-default-layout-footer-meta a {
  display: none!important;
}
  `,
  ],
  targets: {
    ios: 8,
  },
  outputPath: 'doc_dist',
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
}
