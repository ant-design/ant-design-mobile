const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');

module.exports = function (webpackConfig) {
  webpackConfig=getWebpackConfig(webpackConfig);
  
  if (process.env.RUN_ENV === 'WEBSITE') {
    webpackConfig.entry = {
      'kitchen-sink': './kitchen-sink/entry/index.jsx',
      index: './site/entry/index.jsx'
    };
    webpackConfig.resolve.alias.site = 'site';
  }

  return webpackConfig;
};
