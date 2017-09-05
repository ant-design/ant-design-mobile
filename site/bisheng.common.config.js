const path = require('path');
const webpack = require('webpack');

const useReact = process.env.DEMO_ENV === 'react';
const isDev = process.env.NODE_ENV === 'development';

const reactExternals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'react-router': 'ReactRouter',
};
const preactExternals = {
  react: 'preactCompat',
  'react-dom': 'preactCompat',
};

const preactAlias = {
  react: 'preact-compat',
  'react-dom': 'preact-compat',
  'create-react-class': 'preact-compat/lib/create-react-class',
};

const prodExternals = useReact ? reactExternals : preactExternals;

module.exports = {
  webpackConfig(config) {
    config.externals = {
      history: 'History',
      'babel-polyfill': 'this', // hack babel-polyfill has no exports
    };
    // dev 环境下统一不 external
    // 因为 preact/devtools 未提供 umd
    if (!isDev) {
      config.externals = Object.assign(config.externals, prodExternals);
    }
    config.resolve.alias = {
      'antd-mobile/lib': path.join(process.cwd(), 'components'),
      'antd-mobile': process.cwd(),
      site: path.join(process.cwd(), 'site'),
    };

    if (!useReact) {
      config.resolve.alias = Object.assign(config.resolve.alias, preactAlias);
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

    config.plugins.push(
      new webpack.DefinePlugin({
        PREACT_DEVTOOLS: isDev && !useReact,
      }),
    );
    return config;
  },
  htmlTemplateExtraData: {
    isDev,
    useReact,
  },
};
