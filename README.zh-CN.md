<p align="center">
  <a href="http://mobile.ant.design">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/XyhtJExcOrXZnLv.png">
  </a>
</p>

# Ant Design Mobile [![](https://img.shields.io/travis/ant-design/ant-design-mobile.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-mobile) [![npm package](https://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](https://www.npmjs.org/package/antd-mobile) [![NPM downloads](http://img.shields.io/npm/dm/antd-mobile.svg?style=flat-square)](https://npmjs.org/package/antd-mobile) [![Dependency Status](https://david-dm.org/ant-design/ant-design-mobile.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-mobile)

Ant Design 移动端设计规范。

`antd-mobile` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 演示

### 在线演示

http://mobile.ant.design/kitchen-sink/

### 客户端应用

<img src="https://cloud.githubusercontent.com/assets/1698185/18130654/6ba4ccea-6fc2-11e6-9aa1-0a53cd74d9e1.png" />

## 安装

```bash
$ npm install antd-mobile --save
```

## 使用

### Web

```jsx
import 'antd-mobile/lib/button/style';
import Button from 'antd-mobile/lib/button';

ReactDOM.render(<Button>Start</Button>, mountNode);
```

需要在 webpack 中设置访问 `.web.js` 后缀的模块。

```
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['', '.web.js', '.js', '.json'],
},
```

### React-Native

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from 'antd-mobile/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

### 按需加载

推荐使用 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) 来降低打包体积。

```js
// .babelrc
// react-native 中无需设置 style 属性
{
 "plugins": [["antd", { style: "css", libraryName: "antd-mobile" }]]
}
```

并且可以直接用下面的语法加载模块。

```jsx
// import js and css modularly, parsed by babel-plugin-antd
import { Button } from 'antd-mobile';
```

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](http://mobile.ant.design)
- [开发文档](development.md)
- [底层 React 模块](http://github.com/react-component)

## 欢迎贡献

有任何建议或意见您可以进行 [提问](http://github.com/ant-design/ant-design-mobile/issues)。
