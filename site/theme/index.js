const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {
    'UI Bars': 0,
    'UI Views': 1,
    'UI Controls': 2,
    Others: 3,
  },
  typeOrder: {

  },
  docVersions: {
    '0.7.x': 'http://07x.mobile.ant.design/',
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
