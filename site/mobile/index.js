module.exports = {
  categoryOrder: {
    'UI Bars': 0,
    'UI Views': 1,
    'UI Controls': 2,
    Others: 3,
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
