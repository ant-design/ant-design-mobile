/* eslint-disable no-underscore-dangle */
const path = require('path');

const _indexDemos = ['drawer'];
const _subListDemos = ['list-view'];

const pluginAntdConfig = {
  pxtorem: process.env.HD_ENV === 'hd',
  babelConfig: JSON.stringify({
    plugins: [
      [
        require.resolve('babel-plugin-import'), {
          style: true,
          libraryName: 'antd-mobile',
          libraryDirectory: 'components',
        },
      ],
      require.resolve('babel-plugin-transform-class-properties'),
      require.resolve('babel-plugin-transform-object-rest-spread'),
    ],
  }),
};

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
    /* eslint-disable consistent-return */
    indexDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && _indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
    subListDemos(markdownData) {
      const paths = markdownData.meta.filename.split('/');
      // add demos to index page, e.g. "components/drawer/demo/basic.md"
      if (paths[1] && _subListDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-description',
    `bisheng-plugin-antd?${JSON.stringify(pluginAntdConfig)}`,
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [{
    path: '/',
    component: './template/KitchenSink/index',
  }, {
    path: '/components/:component',
    component: './template/KitchenSink/Demo',
  }],
};
