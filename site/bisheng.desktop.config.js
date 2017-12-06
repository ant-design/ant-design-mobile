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
  docVersions: {
    '0.7.x': 'http://07x.mobile.ant.design',
    '0.8.x': 'http://08x.mobile.ant.design',
    '0.9.x': 'http://09x.mobile.ant.design',
    '1.x': 'http://1x.mobile.ant.design',
  },
});
