const path = require('path');
const commonConfig = require('./bisheng.common.config');

module.exports = Object.assign({}, commonConfig, {
  port: 8001,
  source: {
    components: './components',
    docs: './docs',
    CHANGELOG: 'CHANGELOG.md',
  },
  theme: './site/desktop/src',
  htmlTemplate: path.join(__dirname, './desktop/src/static/template.html'),
  doraConfig: {
    verbose: true,
  },
  webpackConfig(config) {
    config = commonConfig.webpackConfig(config);
    return config;
  },
});
