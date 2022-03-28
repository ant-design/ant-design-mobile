# 服务端渲染 / SSR <Experimental></Experimental>

对 SSR（服务端渲染）的支持目前还处在比较初始的阶段，如果你在使用过程中发现了 bug，欢迎向我们提交 issue。

## Next.js

在 Next.js 中使用 antd-mobile 需要做一些额外的配置。

首先，需要安装 `next-transpile-modules` 依赖：

```bash
$ npm install --save-dev next-transpile-modules
# or
$ yarn add -D next-transpile-modules
```

然后在 `next.config.js` 中进行配置：

```js
const withTM = require('next-transpile-modules')([
  'antd-mobile',
]);

module.exports = withTM({
  // 你项目中其他的 Next.js 配置
});
```

## Remix

在 Remix 项目中，antd-mobile 会根据当前所处的环境自动 import 对应的文件。在服务端环境下，antd-mobile 会只加载 js 部分的逻辑，所以你需要再手动引入一下 `antd-mobile/bundle/antd-mobile.css`。
