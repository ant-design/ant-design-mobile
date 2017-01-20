const path = require('path');

const indexDemos = ['drawer', 'list-view'];

module.exports = {
  siteTitle: 'AlipayUI',
  siteSubTitle: '支付宝移动端组件库',
  indexDemos: ['drawer', 'list-view'], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
  hashSpliter: '-demo-', // URL 中记录到 hash 里的特殊标记
  cateChinese: {
    Layout: '布局',
    Navigation: '导航',
    'Data Entry': '数据录入',
    'Data Display': '数据展示',
    Feedback: '操作反馈',
    Combination: '组合组件',
    Gesture: '手势',
  },
  categoryOrder: {
    Layout: 0,
    Navigation: 1,
    'Data Entry': 2,
    'Data Display': 3,
    Feedback: 4,
    Combination: 6,
    Gesture: 5,
  },
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
      if (paths[1] && indexDemos.indexOf(paths[1]) > -1 && paths[2] && paths[2] === 'demo') {
        return {
          component: paths[1],
          meta: markdownData.meta,
        };
      }
    },
  },
  plugins: [
    'bisheng-plugin-antd',
    'bisheng-plugin-react?lang=__react',
  ],
  routes: [{
    path: '/',
    component: './template/KitchenSink/index',
  }, {
    path: '/:component/',
    dataPath: '/components/:component',
    component: './template/KitchenSink/Demo',
  }],
};
