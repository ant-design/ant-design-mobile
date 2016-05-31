/* eslint no-console:0 */

function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}

const req = require.context('./components', true, /^\.\/[^_][\w-]+\/(style\/)?index\.jsx?$/);

req.keys().forEach((mod) => {
  const v = req(mod);
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.jsx?$/);
  if (match && match[1]) {
    exports[camelCase(match[1])] = v;
  }
});


if (typeof console !== 'undefined' && console.warn) {
  console.warn(`you are using prebuild antm,
please use https://github.com/ant-design/babel-plugin-antd to reduce app bundle size.`);
}
