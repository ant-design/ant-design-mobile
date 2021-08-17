# 快速上手

## 安装

```bash
$ npm install --save antd-mobile@alpha
# or
$ yarn add antd-mobile@alpha
```

## 引入

需要先在入口文件（例如 `app.ts`）中引入样式文件：

```js
import 'antd-mobile/index.css'
```

如果是 2 倍布局的话（例如 750 高清方案），需要引入 2x 版本的样式文件：

```js
import 'antd-mobile/index@2x.css'
```

接下来就可以正常地使用组件了，例如：

```js
import { Button } from 'antd-mobile'
```

## 按需加载

antd-mobile 支持基于 Tree Shaking 的按需加载，大部分的构建工具都支持 Tree Shaking，所以一般来说你无需做额外的配置即可拥有较小的包体积。

但是如果你需要对样式文件也做按需加载，或者是在一些不支持 Tree Shaking 的场景下实现按需加载，那么你可以手动引入部分组件：

```js
import { Button } from 'antd-mobile/button'
import 'antd-mobile/button/style'
```

同样的，对于 2 倍布局，在引入样式的时候，需要把 `style` 换成 `style@2x`，例如：

```js
import 'antd-mobile/button/style@2x'
```

当然，你也可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行自动语法转换。可以在 `.babelrc` 中这样配置：

```js
module.exports = {
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es/components", "style": true}]
  ]
}
```

对于 2 倍布局，需要调整一下 `style` 配置：

```js
module.exports = {
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "libraryDirectory": "es/components", "style": (name) => `${name}/style@2x`}]
  ]
}
```

## 在线体验

<code src="./codesandbox.tsx" inline></code>
