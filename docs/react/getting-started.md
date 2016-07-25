---
order: 1
english: 快速上手
------------------

AntD Mobile 致力于提供给程序员**愉悦**的无线端开发体验。

## Demo演示

beta版demo演示请先看用手机扫二维码,单独的demo 仓库后续放出。
<div class="pic-plus">
  <img width="150" src="https://os.alipayobjects.com/rmsportal/sWXtlkRDKtwAwRG.jpg">
  <img width="150" src="https://zos.alipayobjects.com/rmsportal/pqSGjgXJCojReWW.png">
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
$ tnpm install @alipay/antm-init -g
```

目前 antm-init 版, 基于antd-init 1.0.0版本开发, 适配@alipay/antm,方便初始化基于Antd Mobile开发的项目,[更多使用参考antd-init说明](https://github.com/ant-design/antd-init#使用说明)。

`./webpack.config.js`里第三行```style: true```可以修改为```style: 'css'```,区别为引入的默认antm 模块样式文件后缀,一个是less,一个是css.

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ mkdir antm-demo && cd antm-demo
$ antm-init

//如果是初始化离线包项目
$ antm-init -i {{appid}}
```

### 3. 使用组件

编辑 `src/component/App.jsx`，用 React 的方式直接使用 AntD Mobile 的组件。

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

你可以在 [这里](#/components/action-sheet) 选用更多组件。

### 4. 开发调试

一键启动调试，访问 http://127.0.0.1:8001 查看效果。

```bash
$ tnpm start
```

### 5. 构建和部署

```bash
$ tnpm run build
```

入口文件会构建到 `dist` 目录中，你可以自由部署到不同环境中进行引用。

##### 离线包打包

```bash
$ tnpm run build-h5app
```

> 上述例子用于帮助你理解 Antd Mobile 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。

## 兼容性

AntD Mobile 组件库 目前仅针对iOS/Android4.0系统。

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
