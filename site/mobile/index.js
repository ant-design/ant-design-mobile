module.exports = {
  indexDemos: ['drawer', 'list-view'], // 这些组件每个 demo 都需要全屏展示，首页直接放其各个 demo 链接
  hashSpliter: '-demo-', // URL 中记录到 hash 里的特殊标记
  cateChinese: {
    Navigation: '导航',
    'Basic Components': '基础组件',
    Form: '表单',
    'Operation Feedback': '操作反馈',
    Others: '其他',
  },
  categoryOrder: {
    Navigation: 0,
    'Basic Components': 1,
    Form: 2,
    'Operation Feedback': 3,
    Others: 4,
  },
  routes: [{
    path: '/',
    component: './template/KitchenSink/index',
  }, {
    path: '/:component/',
    dataPath: '/components/:component',
    component: './template/KitchenSink/Demo',
  }],
};
