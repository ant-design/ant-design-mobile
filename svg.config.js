const path = require('path');

module.exports = function (config, includeDemo) {
  var svgDirs = [
    path.resolve(__dirname, 'components/icon/style/assets/'),
    path.resolve(__dirname, 'components/notice-bar/style/assets/'),
    path.resolve(__dirname, 'components/toast/style/assets/'),
    path.resolve(__dirname, 'components/stepper/style/assets/'),
  ];
  if (includeDemo) {
    svgDirs = svgDirs.concat([
      path.resolve(__dirname, 'components/steps/demo/'),
      path.resolve(__dirname, 'components/icon/demo/'),
      path.resolve(__dirname, 'components/popover/demo/'),
      path.resolve(__dirname, 'components/action-sheet/demo/'),
      path.resolve(__dirname, 'components/result/demo/'),
      path.resolve(__dirname, 'components/menu/demo/'),
    ]);
  }
  // exclude the default svg-url-loader from
  // atool-build https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L161
  config.module.loaders.forEach((loader) => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
      loader.exclude = svgDirs;
    }
  });
  // Note: https://github.com/kisenka/svg-sprite-loader/issues/4
  // Can not process SVG files twice
  if (config.module.loaders[0].loader !== 'svg-sprite') {
    config.module.loaders.unshift({
      test: /\.(svg)$/i,
      loader: 'svg-sprite',
      include: svgDirs,
    });
  }
};
