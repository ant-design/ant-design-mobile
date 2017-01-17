const path = require('path');
const configSvg = require('../svg.config');

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
    configSvg(config, true);
    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };
    config.module.noParse = [/moment.js/];

    config.resolve.alias = {
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    config.babel.plugins.push([
      'babel-plugin-transform-runtime',
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    config.babel.plugins.push([
      'babel-plugin-import',
      {
        style: true,
        libraryName: 'antd-mobile',
        libraryDirectory: 'components',
      },
    ]);

    return config;
  },
};
