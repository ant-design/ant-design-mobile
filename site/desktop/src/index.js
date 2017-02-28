const path = require('path');

const enLocaleData = require('react-intl/locale-data/en');
const zhLocaleData = require('react-intl/locale-data/zh');

const homeTmpl = './template/Home/index';
const contentTmpl = './template/Content/index';

function pickerGenerator(module) {
  const tester = new RegExp(`^docs/${module}`);
  /* eslint-disable consistent-return */
  return (markdownData) => {
    const filename = markdownData.meta.filename;
    if (tester.test(filename) && !/\.en-US\.md/.test(filename)) {
      return {
        meta: markdownData.meta,
      };
    }
  };
  /* eslint-enable consistent-return */
}

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


module.exports = {
  enLocale,
  zhLocale,
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true;
    }
    return nodePath.endsWith('/demo');
  },
  pick: {
    components(markdownData) {
      const filename = markdownData.meta.filename;
      if (!/^components/.test(filename) ||
          /\/demo$/.test(path.dirname(filename))) return;
      /* eslint-disable consistent-return */
      return {
        meta: markdownData.meta,
      };
      /* eslint-enable consistent-return */
    },
    /* eslint-disable consistent-return */
    changelog(markdownData) {
      if (markdownData.meta.filename === 'CHANGELOG.md') {
        return {
          meta: markdownData.meta,
        };
      }
    },
    /* eslint-enable consistent-return */
    'docs/react': pickerGenerator('react'),
  },
  plugins: [
    'bisheng-plugin-description',
    'bisheng-plugin-toc?maxDepth=2',
    'bisheng-plugin-antd?noPreview',
  ],
  routes: {
    path: '/',
    component: './template/Layout/index',
    indexRoute: { component: homeTmpl },
    childRoutes: [{
      path: 'index-cn',
      component: homeTmpl,
    }, {
      path: '/docs/practice/:children',
      component: contentTmpl,
    }, {
      path: '/docs/pattern/:children',
      component: contentTmpl,
    }, {
      path: '/docs/react/:children',
      component: contentTmpl,
    }, {
      path: 'changelog',
      component: contentTmpl,
    }, {
      path: 'changelog-cn',
      component: contentTmpl,
    }, {
      path: '/components/:children',
      component: contentTmpl,
    }],
  },
};
