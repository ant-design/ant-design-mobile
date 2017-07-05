/* eslint no-console:0 */

const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.web\.tsx?$/);

// build for `dist/antd-mobile.css`
req.keys().forEach((mod) => {
  req(mod);
});

// export components to browser's window for `dist/antd-mobile.js`
module.exports = require('./components');

if (typeof console !== 'undefined' && console.warn) {
  console.warn(`You are using prebuilt antd-mobile,
please use https://github.com/ant-design/babel-plugin-import to reduce app bundle size.`);
}
