const webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {
  if (process.env.RUN_ENV === 'WEBSITE') {
    webpackConfig.entry = {
      'kitchen-sink':'./kitchen-sink/entry/index.jsx',
      index: './site/entry/index.jsx'
    };
    webpackConfig.resolve.root = process.cwd();
    webpackConfig.resolve.alias = {
      antm: process.cwd(),
      site: 'site',
    };
    
    const component = process.env.COMPONENT_STYLE;

    const babelConfig = require('atool-build/lib/getBabelCommonConfig')();
    
    babelConfig.plugins.push([
      'antd',
      {
        style: true,
        libraryName: 'antm',
        libDir: 'components',
      }
    ]);

    const componentRegExp = component && new RegExp(`components/${component.toLowerCase()}/demo/.*\.md`);
    webpackConfig.module.loaders[0].query = babelConfig;
    webpackConfig.module.loaders[1].query = babelConfig;
    webpackConfig.module.loaders.push({
      test: componentRegExp || /\.md$/,
      exclude: /node_modules/,
      loader: `babel?${JSON.stringify(babelConfig)}!antd-md`,
    });

    if (component !== undefined) {
      webpackConfig.module.loaders.push({
        test: /\.md$/,
        exclude: [/node_modules/, componentRegExp],
        loader: 'babel!antd-md',
      });
    }
  } else if (process.env.RUN_ENV === 'PRODUCTION') {
    const entry = ['./index.js'];
    webpackConfig.entry = {
      'antm.min': entry,
    };
    webpackConfig.externals = {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    };
    webpackConfig.output.library = 'antm';
    webpackConfig.output.libraryTarget = 'umd';

    const uncompressedWebpackConfig = Object.assign({}, webpackConfig);
    uncompressedWebpackConfig.entry = {
      antm: entry,
    };
    uncompressedWebpackConfig.plugins = webpackConfig.plugins.filter((plugin) => {
      return !(plugin instanceof webpack.optimize.UglifyJsPlugin);
    });

    return [
      webpackConfig,
      uncompressedWebpackConfig,
    ];
  }

  return webpackConfig;
};
