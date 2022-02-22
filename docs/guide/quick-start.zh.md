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

## 兼容性

如果你不做任何额外的处理，那么 antd-mobile 默认的兼容性为 iOS Safari >= 10 和 Chrome >= 51（也就是 ES6 的兼容标准）。

而通过下面的 babel 配置后，可以达到最大兼容性，为 iOS Safari >= 10 和 Chrome >= 49：

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

对于 TypeScript，我们兼容的版本是 >= 3.8。

对于 React，我们兼容的版本是 >= 16.8.0。

## 在线体验

如果你不想在本地配置环境，也可以直接在 [codesandbox](https://codesandbox.io/s/antd-mobile-snrxr?file=/package.json) 上进行体验。

## 讨论组

欢迎加入我们的钉钉交流群：

<img src="https://gw.alipayobjects.com/mdn/rms_25513e/afts/img/A*hBjlR4nUWjkAAAAAAAAAAAAAARQnAQ" alt="ding-group" width="300" />

或者也可以加入我们的 Discord 讨论组：

https://discord.gg/jmNvw4WFYn
