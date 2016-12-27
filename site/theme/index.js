const contentTmpl = './template/Content/index';

module.exports = {
  siteTitle: 'ANT DESIGN MOBILE',
  categoryOrder: {
    Layout: 0,
    Navigation: 1,
    'Data Entry': 2,
    'Data Display': 3,
    Feedback: 4,
    Combination: 6,
    Gesture: 5,
  },
  typeOrder: {
    Layout: 0,
    Navigation: 1,
    'Data Entry': 2,
    'Data Display': 3,
    Feedback: 4,
    Gesture: 5,
    Combination: 6,
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
