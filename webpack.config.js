const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const Visualizer = require('webpack-visualizer-plugin');
const pkg = require('./package.json');

module.exports = function (webpackConfig) {
  // fix `npm run dist` sourceMap error, do not know the reason
  delete webpackConfig.ts.compilerOptions.sourceMap;

  webpackConfig = getWebpackConfig(webpackConfig, true);
  if (!Array.isArray(webpackConfig)) {
    webpackConfig = [webpackConfig, webpackConfig];
  }
  webpackConfig.forEach((config, index) => {
    if (index === 0) {
      config.plugins.push(new Visualizer({
        filename: `../ant-design-analysis/${pkg.name}@${pkg.version}-stats.html`,
      }));
    }
  });

  return webpackConfig;
};
