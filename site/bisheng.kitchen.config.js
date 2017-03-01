const path = require('path');
const pxtorem = require('postcss-pxtorem');
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
    indexDemos: ['drawer', 'list-view'], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
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

    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
      // selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/], // does't exist these class now.
    }));

    return config;
  },
});
