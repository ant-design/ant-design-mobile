const path = require('path');
const pxtorem = require('postcss-pxtorem');
const commonConfig = require('./bisheng.common.config');

const kitchenConfig = {
  port: 8002,
  source: {
    components: './components',
  },
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/kitchen/src',
  htmlTemplate: path.join(__dirname, './kitchen/src/static/template.html'),
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
};

if (process.env.HD_ENV === 'hd') {
  kitchenConfig.webpackConfig = function (config) {
    config = commonConfig.webpackConfig(config);
    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
      // selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/], // does't exist these class now.
    }));
    return config;
  };
}

module.exports = Object.assign({}, commonConfig, kitchenConfig);
