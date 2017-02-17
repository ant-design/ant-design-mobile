module.exports = function (config, includeDemo) {
  var svgDirs = [
    /components\/icon\/style\/assets/,
    /components\/notice-bar\/style\/assets/,
    /components\/toast\/style\/assets/,
  ];
  if (includeDemo) {
    svgDirs = svgDirs.concat([
      /components\/steps\/demo/,
      /components\/icon\/demo/,
      /components\/popover\/demo/,
      /components\/action-sheet\/demo/,
      /components\/result\/demo/,
      /components\/menu\/demo/,
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
      test: /\.svg$/,
      loader: 'svg-sprite',
      include: svgDirs,
    });
  }
};
