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

在 Remix 中使用 antd-mobile 需要做一些额外的配置。

在 `tsconfig.json` 的 `compilerOptions.paths` 中新增 antd-mobile 配置，`include` 中添加 `global.d.ts`:

```json
{
  "include": ["remix.env.d.ts", "global.d.ts", "**/*.ts", "**/*.tsx"],
  "compilerOptions": {
    ...
    "paths": {
      "antd-mobile": ["node_modules/antd-mobile/bundle/antd-mobile.es.js"]
    }
  }
}
```

在根目录新增 `global.d.ts` 文件:

```ts
declare module 'antd-mobile' {
  export * from 'antd-mobile/es';
}
```

最后在 `app/root.tsx` 中引入样式文件:

```ts
import styles from "antd-mobile/bundle/style.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
```

- [remix template](https://github.com/3lang3/antd-mobile-template/tree/main/remix)
