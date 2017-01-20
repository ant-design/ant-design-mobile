const enLocaleData = require('react-intl/locale-data/en');
const zhLocaleData = require('react-intl/locale-data/zh');

// 网站中需要配置中英文的地方比较少，不再单独分开不同语言的国际化文件，统一放到这里。
// 这样能使上层 UI 库(如聚宝/网商等 UI)，不需要再拷贝网站文件，只需参照此配置文件模板、直接改变配置值并替换此文件即可。
const enLocale = {
  locale: 'en-US',
  data: enLocaleData,
  messages: {
    'app.header.menu.home': 'Home',
    'app.header.menu.react': 'React',
    'app.header.lang': '中文',
  },
};
const zhLocale = {
  locale: 'zh-CN',
  data: zhLocaleData,
  messages: {
    'app.header.menu.home': '首页',
    'app.header.menu.react': '组件',
    'app.header.lang': 'EN',
  },
};

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
  enLocale,
  zhLocale,
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
