// Just import style for https://github.com/ant-design/ant-design/issues/3745
const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

// build for `dist/antd-mobile.css`
req.keys().forEach((mod) => {
  req(mod);
});

// build for `dist/antd-mobile.js`
module.exports = require('./components/index');
