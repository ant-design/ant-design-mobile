export default {
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  // 用于替换 __VERSION__ pkg.version
  extraBabelPlugins: ['version'],
  pkgs: [
    'antd-mobile-styles',
    'antd-mobile-languages',
    'antd-mobile-touchable',
    'antd-mobile-icons',
    'antd-mobile',
  ],
}
