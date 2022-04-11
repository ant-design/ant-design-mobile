# 服务端渲染 / SSR <Experimental></Experimental>

对 SSR（服务端渲染）的支持目前还处在比较初始的阶段，如果你在使用过程中发现了 bug，欢迎向我们提交 issue。

## Next.js

在 Next.js 中使用 antd-mobile 需要做一些额外的配置。

首先，需要安装 `next-transpile-modules` 和 `next-images` 依赖：

```bash
$ npm install --save-dev next-transpile-modules next-images
# or
$ yarn add -D next-transpile-modules next-images
```

然后在 `next.config.js` 中进行配置：

```js
const withImages = require('next-images')

const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM(withImages({
  // 你项目中其他的 Next.js 配置
}));
```
