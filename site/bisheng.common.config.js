const path = require('path');

module.exports = {
  webpackConfig(config) {
    // config.externals = {
    //   react: 'preactCompat',
    //   'react-dom': 'preactCompat',
    //   'react-router': 'ReactRouter',
    //   'prop-types': 'PropTypes',
    //   history: 'History',
    //   'babel-polyfill': 'this', // hack babel-polyfill has no exports
    // };

    // rc-trigger 在 preact 下有 bug， desktop 版本先不改
    config.externals = {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router': 'ReactRouter',
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };

    config.resolve.alias = {
      'antd-mobile/lib': path.join(process.cwd(), 'components'),
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    // config.resolve.alias = {
    //   'antd-mobile/lib': path.join(process.cwd(), 'components'),
    //   'antd-mobile': process.cwd(),
    //   site: path.join(process.cwd(), 'site'),
    //   react: 'preact-compat',
    //   'react-dom': 'preact-compat',
    //   'create-react-class': 'preact-compat/lib/create-react-class',
    // };

    config.babel.plugins.push([
      'babel-plugin-transform-runtime',
      {
        polyfill: false,
        regenerator: true,
      },
    ], [
      require.resolve('babel-plugin-import'),
      {
        libraryName: 'antd-mobile',
        libraryDirectory: 'components',
      },
    ]);
    return config;
  },
};
