const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: {
    components: './components',
    docs: './docs',
    changelog: [
      'CHANGELOG.zh-CN.md',
      'CHANGELOG.en-US.md',
    ],
  },
  theme: './site/desktop/src',
  htmlTemplate: path.join(__dirname, './desktop/src/static/template.html'),
  themeConfig: {
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
    docVersions: {
      '0.7.x': 'http://07x.mobile.ant.design/',
      '0.8.x': 'http://08x.mobile.ant.design/',
      '0.9.x': 'http://09x.mobile.ant.design/',
    },
    siteTitle: 'ANT DESIGN MOBILE',
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    return config;
  },
});
