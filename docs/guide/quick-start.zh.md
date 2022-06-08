# 快速上手

## 安装

```bash
$ npm install --save antd-mobile
# or
$ yarn add antd-mobile
```

## 引入

直接引入组件即可，antd-mobile 会自动为你加载 css 样式文件：

```js
import { Button } from 'antd-mobile'
```

如果你开发的是阿里/蚂蚁内部项目，那么请额外阅读一下[这篇指引](https://yuque.antfin.com/antd-mobile/kfcgs3/md4or5)。

如果你使用的是 umi 框架，那么推荐阅读一下常见问题中的 "[umi 项目安装 antd-mobile v5 后报错如何解决？](./faq#umi-%E9%A1%B9%E7%9B%AE%E5%AE%89%E8%A3%85-antd-mobile-v5-%E5%90%8E%E6%8A%A5%E9%94%99%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%EF%BC%9F)"。

## 兼容性

我们建议在项目中增加下面的 babel 配置，这样可以达到最大兼容性，为 iOS Safari `>= 10` 和 Chrome `>= 49`：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "chrome": "49",
          "ios": "10"
        }
      }
    ]
  ]
}
```

<Alert type="warning">
  不要把 node_modules 排除在 babel 编译之外，不然上面的配置不会有效果
</Alert>

对于 TypeScript，我们兼容的版本是 `>= 3.8`。

对于 React，我们兼容的版本是 `^16.8.0` `^17.0.0` `^18.0.0`。

由于 iOS 9 并不支持 CSS 变量，因此如果你需要支持 iOS 9，请参考 [这篇文档](./css-variables#css-变量自动降级) 启用 CSS 变量自动降级，并且将 babel 配置中的 target ios 设置为 `9`。

## 在线体验

如果你不想在本地配置环境，也可以直接在 [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) 或 [stackblitz](https://stackblitz.com/edit/antd-mobile?file=index.tsx) 上进行体验。

## 讨论组

欢迎加入我们的钉钉交流群：

<img src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ" alt="ding-group" width="300" />

或者也可以加入我们的 Discord 讨论组：

https://discord.gg/jmNvw4WFYn
