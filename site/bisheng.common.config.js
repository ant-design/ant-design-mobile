const path = require('path');
const pkg = require('../package.json');

const useReact = process.env.DEMO_ENV === 'react';

module.exports = {
  webpackConfig(config) {
    // rc-trigger 在 preact 下有 bug
    config.externals = {
      react: useReact ? 'React' : 'preactCompat',
      'react-dom': useReact ? 'ReactDOM' : 'preactCompat',
      'react-router': 'ReactRouter',
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
      'prop-types': 'PropTypes',
    };

    config.resolve.alias = {
      'antd-mobile/lib': path.join(process.cwd(), 'components'),
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    if (!useReact) {
      config.resolve.alias = Object.assign(config.resolve.alias, {
        react: 'preact-compat',
        'react-dom': 'preact-compat',
        'create-react-class': 'preact-compat/lib/create-react-class',
      });
    }

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
  htmlTemplateExtraData: {
    isDev: process.env.NODE_ENV === 'development',
    reactVersion: pkg.devDependencies.react.replace(/~|\^/, ''),
    preactVersion: pkg.devDependencies.preact.replace(/~|\^/, ''),
    preactCompatVersion: pkg.devDependencies['preact-compat'].replace(/~|\^/, ''),
    useReact,
  },
};
