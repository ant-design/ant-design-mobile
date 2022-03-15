# 按需加载

antd-mobile 支持基于 Tree Shaking 的按需加载，大部分的构建工具（例如 webpack 4+ 和 rollup）都支持 Tree Shaking，所以**绝大多数情况下你无需做额外的配置**即可拥有较小的包体积。

## 手动的按需加载

如果你的环境不支持 Tree Shaking，那么你可以手动引入部分组件：

```js
import Button from 'antd-mobile/es/components/button'
```

需要注意的是，**在手动按需加载时，你还需要在入口文件中引入 `global` 文件来加载一些 antd-mobile 的全局性逻辑和样式**：

```js
import 'antd-mobile/es/global'
```

当然，如果你觉得上面的写法过于繁琐，你也可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行自动语法转换。可以在 `.babelrc` 中这样配置：

```js
module.exports = {
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es/components", "style": false}]
  ]
}
```

<Alert type="warning">
  即便你使用了 `babel-plugin-import`，你依然需要在入口文件中手动引入 `global` 文件。
</Alert>

不难发现，手动按需加载是非常难以维护的，特别是在你的项目中存在多个入口文件时。所以除非你对打包构建的过程和 antd-mobile 本身都有足够的了解，否则我们非常不推荐这样手动处理。
