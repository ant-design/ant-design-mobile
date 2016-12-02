---
order: 0
english: Ant Design Mobile of React
---

`antd-mobile` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

<div class="pic-plus">
  <img width="160" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

[Ant Design](http://ant.design) 在中后台领域的耕耘取得了很多成绩，使得 Ant Design 设计规范和 React 逐渐成为蚂蚁金服主流的前端产品开发模式，也受到社区的广泛关注。我们没有止步于此，一年后推出了 Ant Design 移动端规范及其实现。

随着蚂蚁金服中后台的移动端需求增多，不同的设计规范及研发方式，给设计者和开发者带来大量的重复工作，降低了产品的研发效率。

我们希望为设计者和开发者提供一套统一的设计规范，可以降低设计、开发成本，减少沟通误差。不同于大多数设计规范，我们抽象出通用组件的基础样式和组件属性，使得拓展性更强。基于这套规范我们可以快速实现页面，提高研发效率，也希望借此推进蚂蚁金服各应用向设计规范化的方向发展。

在工程方面，我们继续推进和发展 React 全家桶技术栈，探索多端同栈、可预测、高效的研发模式。

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 安装

```bash
$ npm install antd-mobile --save
```

## 使用

> 遇到报错，请先参考 [示例脚手架](https://github.com/ant-design/ant-design-mobile/issues/56)

Set webpack to resolve .web.js suffix

```
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['', '.web.js', '.js', '.json'],
},
```

无需单独引入样式，使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 按需加载，插件设置如下：

```js
// .babelrc
{"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}
// or webpack config file
webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
```

#### Web 使用场景

首先需要引入『高清方案』设置：具体方法
见 wiki 里 [antd-mobile-0.8-以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE)

```jsx
// import js and css modularly, parsed by babel-plugin-import
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

如何自定义主题？[见此文档](https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md)

#### React-Native 使用场景

> 注：`Accordion`、`Icon`、`Result`、`Table`、`Menu`、`NavBar` 组件暂无 React Native 版本；
> antd-mobile 0.9.x 建议用 react-native v0.34，1.0 (目前为 alpha) 建议 v0.39

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button } from 'antd-mobile';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

> 更多常见问题，请查看 [wiki pages](https://github.com/ant-design/ant-design-mobile/wiki)

## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](http://npmjs.com/package/antd-mobile)
- 开发版：[![npm package](https://cnpmjs.org/badge/v/antd-mobile.svg?tag=beta&style=flat-square)](http://npmjs.com/package/antd-mobile)

## 体积

- 构建后总体积：`~110KB`
- 按需加载：只需引入业务中需要的组件即可，未 import 进来的组件不会打包进来。

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](/)
- [开发文档](http://github.com/ant-design/ant-design-mobile/blob/master/development.md)
- [React 模块](http://github.com/react-component)

## 谁在使用

- 蚂蚁金服
- 阿里巴巴
- 口碑

## 欢迎参与

有任何建议或意见您可以进行 [提问](http://github.com/ant-design/ant-design-mobile/issues)。
