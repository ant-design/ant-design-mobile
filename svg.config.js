const path = require('path');

module.exports = (config, includeDemo) => {
  let svgDirs = [
    path.resolve(__dirname, 'components/icon/style/assets/'),
    path.resolve(__dirname, 'components/notice-bar/style/assets/'),
    path.resolve(__dirname, 'components/toast/style/assets/'),
    path.resolve(__dirname, 'components/stepper/style/assets/'),
  ];
  if (includeDemo) {
    svgDirs = svgDirs.concat([
      path.resolve(__dirname, 'components/steps/demo/'),
      path.resolve(__dirname, 'components/button/demo/'),
      path.resolve(__dirname, 'components/icon/demo/'),
      path.resolve(__dirname, 'components/popover/demo/'),
      path.resolve(__dirname, 'components/action-sheet/demo/'),
      path.resolve(__dirname, 'components/result/demo/'),
      path.resolve(__dirname, 'components/menu/demo/'),
      path.resolve(__dirname, 'components/toast/demo/'),
    ]);
  }
  // Can not process SVG files twice
  config.module.loaders.forEach((loader) => {
    if (loader.test && typeof loader.test.test === 'function' && loader.test.test('.svg')) {
      loader.exclude = svgDirs;
    }
  });
  config.module.loaders.unshift({
    test: /\.(svg)$/i,
    loader: 'svg-sprite',
    include: svgDirs,
  });
};
