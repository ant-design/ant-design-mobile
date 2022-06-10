import { components } from './components'

export const menus = {
  '/': [
    {
      title: 'Home',
      path: 'index',
    },
  ],
  '/zh': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: 'Quick Start',
      path: '/guide/quick-start',
    },
    {
      title: 'Migration',
      path: '/guide/migration',
    },
    {
      title: 'FAQ',
      path: '/guide/faq',
    },
    {
      title: 'CSS Variables',
      path: '/guide/css-variables',
    },
    {
      title: 'Theming',
      path: '/guide/theming',
    },
    {
      title: 'Dark Mode (Experimental)',
      path: '/guide/dark-mode',
    },
    {
      title: 'Load on Demand',
      path: '/guide/import-on-demand',
    },
    {
      title: 'Internationalization',
      path: '/guide/i18n',
    },
    {
      title: 'About Experimental',
      path: '/zh/guide/what-is-experimental',
    },
    {
      title: 'HD',
      path: '/guide/hd',
    },
    {
      title: 'SSR (Experimental)',
      path: '/guide/ssr',
    },
    {
      title: 'Reduce Motion (Experimental)',
      path: '/guide/reduce-motion',
    },
  ],
  '/zh/guide': [
    {
      title: '快速上手',
      path: '/zh/guide/quick-start',
    },
    {
      title: '迁移指南',
      path: '/guide/migration',
    },
    {
      title: '常见问题',
      path: '/zh/guide/faq',
    },
    {
      title: 'CSS 变量',
      path: '/zh/guide/css-variables',
    },
    {
      title: '主题',
      path: '/zh/guide/theming',
    },
    {
      title: '深色模式（试验性）',
      path: '/zh/guide/dark-mode',
    },
    {
      title: '按需加载',
      path: '/zh/guide/import-on-demand',
    },
    {
      title: '国际化',
      path: '/zh/guide/i18n',
    },
    {
      title: '关于试验性',
      path: '/zh/guide/what-is-experimental',
    },
    {
      title: '高清适配',
      path: '/zh/guide/hd',
    },
    {
      title: '服务端渲染 / SSR（试验性）',
      path: '/zh/guide/ssr',
    },
    {
      title: '减弱动效（试验性）',
      path: '/zh/guide/reduce-motion',
    },
  ],
  '/components': [
    {
      title: 'Common',
      children: components.common,
    },
    {
      title: 'Layout',
      children: components.layout,
    },
    {
      title: 'Navigation',
      children: components.navigation,
    },
    {
      title: 'Data Display',
      children: components.dataDisplay,
    },
    {
      title: 'Data Entry',
      children: components.dataEntry,
    },
    {
      title: 'Feedback',
      children: components.feedback,
    },
    {
      title: 'Guidance',
      children: components.guidance,
    },
    {
      title: 'Other',
      children: components.other,
    },
    {
      title: 'Experimental',
      children: components.experimental,
    },
  ],
  '/zh/components': [
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '导航',
      children: components.navigation,
    },

    {
      title: '信息展示',
      children: components.dataDisplay,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
    {
      title: '反馈',
      children: components.feedback,
    },
    {
      title: '引导提示',
      children: components.guidance,
    },
    {
      title: '其他',
      children: components.other,
    },
    {
      title: '试验性',
      children: components.experimental,
    },
  ],
}
