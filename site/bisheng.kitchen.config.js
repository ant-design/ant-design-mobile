const path = require('path');
const pxtorem = require('postcss-pxtorem');
const commonConfig = require('./bisheng.common.config');
const indexDemos = require('./mobile/').indexDemos;

module.exports = Object.assign({}, commonConfig, {
  port: 8002,
  source: [
    './components',
  ],
  output: './_site/kitchen-sink',
  root: '/kitchen-sink/',
  entryName: 'kitchen-sink',
  theme: './site/mobile',
  htmlTemplate: './site/mobile/static/template.html',
  pick: {
    components: commonConfig.pick.components,
    /* eslint-disable consistent-return */
    indexDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-react?lang=__react',
    'bisheng-plugin-antd',
  ],
  doraConfig: {
    verbose: true,
    plugins: ['dora-plugin-upload'],
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
});
