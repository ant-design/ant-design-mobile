const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {},
  typeOrder: {
    APIS: 0,
    COMPONENTS: 1,
  },
  docVersions: {
  },
  routes: [{
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: './template/Home/index' },
    childRoutes: [{
      path: '/docs/practice/:children',
      component: contentTmpl,
    }, {
      path: '/docs/pattern/:children',
      component: contentTmpl,
    }, {
      path: '/docs/react/:children',
      component: contentTmpl,
    }, {
      path: '/changelog',
      component: contentTmpl,
    }, {
      path: '/components/:children',
      component: contentTmpl,
    }],
  }, {
    path: '/kitchen-sink',
    component: './template/KitchenSink/index',
  }, {
    path: '/kitchen-sink/:component',
    dataPath: '/components/:component',
    component: './template/KitchenSink/Demo',
  }, {
    path: '/kitchen-sink/:component/:index',
    dataPath: '/components/:component/demo/:index',
    component: './template/KitchenSink/Demo',
  }],
};
