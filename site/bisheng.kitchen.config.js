const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/kitchen/src',
  htmlTemplate: path.join(__dirname, './kitchen/src/static/template.html'),
  themeConfig: {
    siteTitle: 'Ant Design Mobile',
    siteSubTitle: '支付宝移动端组件库',
    indexDemos: ['drawer'], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
    subListDemos: ['list-view'], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
    hashSpliter: '-demo-', // URL 中记录到 hash 里的特殊标记
    categoryOrder: {
      Layout: 0,
      布局: 0,
      Navigation: 1,
      导航: 1,
      'Data Entry': 2,
      数据录入: 2,
      'Data Display': 3,
      数据展示: 3,
      Feedback: 4,
      操作反馈: 4,
      Gesture: 5,
      手势: 5,
      Combination: 6,
      组合组件: 6,
      Other: 7,
      其他: 7,
    },
    cateChinese: {
      Layout: '布局',
      Navigation: '导航',
      'Data Entry': '数据录入',
      'Data Display': '数据展示',
      Feedback: '操作反馈',
      Gesture: '手势',
      Combination: '组合组件',
      Other: '其他',
    },
  },
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    config.externals = {
      react: 'preactCompat',
      'react-dom': 'preactCompat',
      'react-router': 'ReactRouter',
      'prop-types': 'PropTypes',
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };
    config.resolve.alias = {
      'antd-mobile/lib': path.join(process.cwd(), 'components'),
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
      react: 'preact-compat',
      'react-dom': 'preact-compat',
      'create-react-class': 'preact-compat/lib/create-react-class',
    };
    return config;
  },
});
