# Ant Design Mobile

Ant Design 移动端设计规范。

`antd-mobile` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 安装

```bash
$ npm install antd-mobile --save
```

## 使用

```jsx
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>按钮</Button>, mountNode);
```

无需单独引入样式，使用 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) 按需加载，并引入相关样式。

```js
{
  "plugins": [["antd", {
    style: 'css',  // 'less',
    libraryName: 'antd-mobile',
  }]]
}
```

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](http://mobile.ant.design)
- [开发文档](development.md)
- [底层 React 模块](http://github.com/react-component)

## 欢迎参与

有任何建议或意见您可以进行 [提问](http://github.com/ant-design/ant-design-mobile/issues)。
