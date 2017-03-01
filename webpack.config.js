const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const pxtorem = require('postcss-pxtorem');
const configSvg = require('./svg.config');

module.exports = function (webpackConfig) {
  webpackConfig = getWebpackConfig(webpackConfig);
  if (!Array.isArray(webpackConfig)) {
    webpackConfig = [webpackConfig, webpackConfig];
  }
  webpackConfig.forEach((config) => {
    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
    }));
    configSvg(config);
  });
  return webpackConfig;
};
