// placeholder

// 1. below code will try to load this folder style/
// which nodejs will auto try to load style/index.js
// https://github.com/ant-design/ant-design-mobile/blob/master/components/carousel/style/index.web.tsx#L1

// 3. in ssr, we use require hacker to replace style/index.js with load style/index.web.js
//  https://www.npmjs.com/package/require-hacker
// but, if style/index.js is actually do not exist
// nodejs will throw a error, then require hack can not get chance to do his job
