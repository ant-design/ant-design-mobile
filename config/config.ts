import { IConfig } from 'dumi'
import { menus } from './menus'
import { navs } from './navs'

const shouldDisableCSSVar = Boolean(process.env.DISABLE_CSS_VAR)

if (shouldDisableCSSVar) {
  console.info('\nCSS Variables has been disabled for dev purpose.\n')
}

const pxToRem = require('postcss-pxtorem')
const postcssDisableCSSVars = require('../scripts/postcss-disable-css-vars.js')

const config: IConfig = {
  mode: 'site',
  title: 'Ant Design Mobile',
  logo: 'https://gw.alipayobjects.com/zos/bmw-prod/b874caa9-4458-412a-9ac6-a61486180a62.svg',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  navs,
  menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
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
    ['en', 'English'],
    ['zh', '中文'],
  ],
  extraPostCSSPlugins: [
    // pxToRem({
    //   rootValue: 50,
    //   propList: ['*'],
    // }),
    shouldDisableCSSVar && postcssDisableCSSVars(),
  ].filter(i => i),
  themeConfig: {
    hd: {
      rules: [
        // {mode: 'vw', options: [100, 750]}
      ],
    },
  },
  plugins: ['./.dumi/plugin-gallery/index.ts', './.dumi/plugin-theme/index.ts'],
  // ssr: {},
  exportStatic: {},
  dynamicImport: {},
}

export default config
