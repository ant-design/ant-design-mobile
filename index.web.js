/* eslint no-console:0 */

function camelCase(name) {
  return name.charAt(0).toUpperCase() +
    name.slice(1).replace(/-(\w)/g, (m, n) => {
      return n.toUpperCase();
    });
}

const req = require.context('./components', true, /^\.\/[^_][\w-]+\/(style\/)?index\.web\.tsx?$/);

req.keys().forEach((mod) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.web\.tsx?$/);
  if (match && match[1]) {
    exports[camelCase(match[1])] = v;
  }
});


if (typeof console !== 'undefined' && console.warn) {
  console.warn(`you are using prebuild antm,
please use https://github.com/ant-design/babel-plugin-antd to reduce app bundle size.`);
}
