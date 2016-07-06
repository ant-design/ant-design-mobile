const contentTmpl = './template/Content/index';

module.exports = {
  categoryOrder: {
    组件: 0,
    十大原则: 0,
    设计基础: 1,
    动画: 2,
  },
  typeOrder: {
    APIS: 0,
    COMPONENTS: 1,
  },
  docVersions: {
    '0.9.x': 'http://09x.ant.design/',
    '0.10.x': 'http://010x.ant.design/',
    '0.11.x': 'http://011x.ant.design/',
    '0.12.x': 'http://012x.ant.design/',
  },
  routes: {
    '/': './template/Home/index',
    '/docs/practice/:children': contentTmpl,
    '/docs/pattern/:children': contentTmpl,
    '/docs/react/:children': contentTmpl,
    '/changelog': contentTmpl,
    '/components/:children': contentTmpl,
    '/kitchen-sink': './template/KitchenSink/index',
    '/kitchen-sink/:component': './template/KitchenSink/Demo'
  },
};
