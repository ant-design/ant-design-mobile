const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');

module.exports = function (webpackConfig) {
  webpackConfig = getWebpackConfig(webpackConfig);
  // if (process.env.RUN_ENV === 'WEBSITE') {
  //   webpackConfig.entry['kitchen-sink'] = './kitchen-sink/entry/index.jsx';
  // }
  return webpackConfig;
};

