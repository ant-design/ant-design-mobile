module.exports = function (babelRc) {
  babelRc.plugins.push([
    require.resolve('babel-plugin-antd'),
    {
      libDir: 'components',
      libraryName: 'antm',
    }
  ]);
};