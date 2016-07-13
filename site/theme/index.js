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
    '0.1.x': 'http://01x.antm.alipay.net',
    '0.5.x': 'http://05x.antm.alipay.net',
    '0.6.x': 'http://06x.antm.alipay.net',
  },
  routes: {
    '/': './template/Home/index',
    '/docs/practice/:children': contentTmpl,
    '/docs/pattern/:children': contentTmpl,
    '/docs/react/:children': contentTmpl,
    '/changelog': contentTmpl,
    '/components/:children': contentTmpl,
    '/kitchen-sink/:component': './template/KitchenSink/Demo',
    '/kitchen-sink': './template/KitchenSink/index',
    '/kitchen-sink/test': './template/Home/index',
    '/mobile': './template/KitchenSink/Demo',
  },
};
