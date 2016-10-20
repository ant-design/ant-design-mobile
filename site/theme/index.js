const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {
    Navigation: 0,
    'Basic Components': 1,
    Form: 2,
    'Operation Feedback': 3,
    Others: 4,
  },
  typeOrder: {

  },
  docVersions: {
    '0.7.x': 'http://07x.mobile.ant.design/',
    '0.8.x': 'http://08x.mobile.ant.design/',
  },
  routes: {
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
  },
};
