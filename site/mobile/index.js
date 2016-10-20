module.exports = {
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
