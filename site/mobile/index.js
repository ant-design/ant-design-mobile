module.exports = {
  routes: [{
    path: '/',
    component: './template/KitchenSink/index',
  }, {
    path: '/:component/',
    dataPath: '/components/:component',
    component: './template/KitchenSink/Demo',
  }],
};
