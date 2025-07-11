import { defineConfig } from 'dumi'
import { menus } from './config/menus'
import { navs } from './config/navs'

const shouldDisableCSSVar = Boolean(process.env.DISABLE_CSS_VAR)

if (shouldDisableCSSVar) {
  console.info('\nCSS Variables has been disabled for dev purpose.\n')
}

const pxToRem = require('postcss-pxtorem')
const postcssDisableCSSVars = require('./scripts/postcss-disable-css-vars.js')

export default defineConfig({
  themeConfig: {
    name: 'Ant Design Mobile',
    logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
    nav: navs,
    sidebar: menus,
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
  favicons: [
    'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  ],
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src/components' }],
    codeBlockMode: 'passive',
  },
  alias: {
    'antd-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
    {
      name: 'keywords',
      content: 'antd-mobile, ant design mobile, React mobile components',
    },
    {
      name: 'description',
      content: 'Essential UI blocks for building mobile web apps.',
    },
    {
      name: 'google-site-verification',
      content: '2saDOufpfJI4y1cqfxvuviYg8bfo4gLmiEtSnt2oh50',
    },
  ],
  hash: true,
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.documentElement.setAttribute('data-is-demo', 'true')
    }`,
    `
    if (!location.port) {
      // Enable Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-72788897-2');
    }
    `,
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-72788897-2',
      async: true,
    },
  ],
  locales: [
    { id: 'en', name: 'English' },
    { id: 'zh', name: '中文' },
  ],
  extraPostCSSPlugins: [shouldDisableCSSVar && postcssDisableCSSVars()].filter(
    i => i
  ),
  plugins: [
    './.dumi/plugin-theme/theme-plugin.ts',
    './.dumi/plugin-gallery/gallery-plugin.ts',
  ],
  exportStatic: {},
})
