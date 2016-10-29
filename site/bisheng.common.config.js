const path = require('path');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const filename = markdownData.meta.filename;
      if (!/^components/.test(filename) ||
          /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
  },
  webpackConfig(config) {
    config.module.loaders.forEach(loader => {
      if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
        loader.exclude = /components\/icon\/style\/assets/;
      }
    });

    config.module.loaders.unshift({
      test: /\.svg$/,
      loader: 'svg-sprite',
      include: /components\/icon\/style\/assets/,
    });

    config.module.noParse = [/moment.js/];
    config.resolve.alias = {
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    config.postcss.push(pxtorem({
      rootValue: 100,
      propWhiteList: [],
      selectorBlackList: [/^html$/, /^\.ant-/, /^\.github-/, /^\.gh-/],
    }));

    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    config.babel.plugins.push([
      require.resolve('babel-plugin-import'),
      {
        style: true,
        libraryName: 'antd-mobile',
        libraryDirectory: 'components',
      },
    ]);

    return config;
  },
};
