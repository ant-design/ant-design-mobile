const path = require('path');
const pxtorem = require('postcss-pxtorem');

module.exports = {
  port: 8001,
  source: [
    './components',
    './docs',
    'CHANGELOG.md', // TODO: fix it in bisheng
  ],
  lazyLoad: true,
  entry: {
    index: {
      theme: './site/theme',
      htmlTemplate: './site/theme/static/template.html',
    },
    'kitchen-sink': {
      theme: './site/mobile',
      htmlTemplate: './site/mobile/static/template.html',
    },
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
  },
  webpackConfig(config) {
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
      require.resolve('babel-plugin-antd'),
      {
        style: true,
        libraryName: 'antd-mobile',
        libDir: 'components',
      },
    ]);

    return config;
  },
};
