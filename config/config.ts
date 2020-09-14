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
