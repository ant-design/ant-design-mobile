# 快速上手

- category: 1
- order: 1

---

Ant Mobile 致力于提供给程序员**愉悦**的无线端开发体验。

## Demo演示

[antm-demo](http://demo.antm.alipay.net)仓库为所有组件提供了demo演示,可以clone下来直接阅读源代码http://gitlab.alipay-inc.com/react-ui/antm-demo/ ,如遇到没有权限请联系@特木。
比如入门的同学,请先看antm-demo的reademe.md文档
<div class="pic-plus">
  <img width="150" src="https://os.alipayobjects.com/rmsportal/sWXtlkRDKtwAwRG.jpg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
</style>

## 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。
我们提供了一套 `tnpm` + `webpack` 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。

### 1. 安装命令行工具

```bash
$ tnpm install antd-init -g
```

[更多使用说明](https://github.com/ant-design/antd-bin#使用说明)。

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ mkdir antm-demo && cd antm-demo
$ antd-init
$ tnpm install
```

### 3. 使用组件

编辑 `src/component/App.jsx`，用 React 的方式直接使用 Ant Mobile 的组件。

```jsx
import React from 'react';
import { List } from '@alipay/antm';

const App = React.createClass({
  handleClick(e) {
    console.log(e);
  },
  render() {
    return <List>
    <List.Header>表头</List.Header>
      <List.Body>
        <List.Item
          extra="额外信息"
          arrow="horizontal"
          onClick={this.handleClick}
        >内容</List.Item>
        <List.Item
          line={2}
          extra="额外信息"
          arrow="horizontal"
          onClick={this.handleClick}
        >内容</List.Item>
      </List.Body>
      <List.Footer>表尾</List.Footer>
    </List>;
  }
});

export default App;
```

你可以在 [这里](/components/flex) 选用更多组件。

### 4. 开发调试

一键启动调试，访问 http://127.0.0.1:8001 查看效果。

```bash
$ tnpm run dev
```

### 5. 构建和部署

```bash
$ tnpm run build
```

入口文件会构建到 `dist` 目录中，你可以自由部署到不同环境中进行引用。

> 上述例子用于帮助你理解 Ant Mobile 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。

## 兼容性

Ant Mobile 组件库 目前仅针对iOS/Android4.0系统。

<div class="code-line-highlight"></div>

<style>
.code-line-highlight {
  box-shadow: 0px 196px 0px rgba(255, 207, 0, 0.16);
  height: 42px;
  margin-top: -42px;
  position: relative;
  z-index: 1;
}
</style>

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="email=no" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0" />
    <!-- 引入样式 -->
    <link rel="stylesheet" href="/common.css">
    <link rel="stylesheet" href="/index.css">
  </head>
  <body>
    <div id="react-content"></div>
  </body>
  <!-- 引入公用文件 -->
  <script src="/common.js"></script>
  <!-- 引入入口文件 -->
  <script src="/index.js"></script>
</html>
```

## 自行构建

如果想自己维护工作流，我们推荐使用 [webpack](http://webpack.github.io/) 进行构建和调试，可以参考体验技术部所使用的 [webpack 配置](https://github.com/ant-design/antd-build/blob/master/lib/webpack.common.config.js)。


## 小甜点

- 你可以享用 `npm`/`tnpm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES6](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/) 的写法来提升编码的愉悦感。
