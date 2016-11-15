---
order: 1
title: 快速上手
---

Ant Design React 致力于提供给程序员**愉悦**的开发体验。

---

在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。


## 标准开发

实际项目开发中，你会需要对 ES2015 和 JSX 代码的构建、调试、代理、打包部署等一系列工程化的需求。
我们提供了一套 `npm` + `webpack` 的开发工具链来辅助开发，下面我们用一个简单的实例来说明。

### 1. 安装工具
确认 [Node.js](https://nodejs.org/en/) 已经升级到 v4.x 或以上。

可以使用蚂蚁提供的[开发工具文档](http://ant-tool.github.io/)

### 2. 创建一个项目

手动从脚手架工具里拷贝 [MobileDemo](https://github.com/ant-design/antd-init/tree/master/boilerplates/MobileDemo)

### 3. 使用组件

[见此使用示例](/docs/react/introduce#使用)

### 4. 开发调试

一键启动调试，访问 http://127.0.0.1:8000 查看效果。

```bash
$ npm start
```

### 5. 构建和部署

```bash
$ npm run build
```

入口文件会构建到 `dist` 目录中，你可以自由部署到不同环境中进行引用。

> 上述例子用于帮助你理解 Ant Design React 的使用流程，并非真实的开发过程，你可以根据自己的项目开发流程进行接入。

## 自行构建

如果想自己维护工作流，我们推荐使用 [webpack](http://webpack.github.io/) 进行构建和调试。理论上你可以利用 React 生态圈中的 [各种脚手架](https://github.com/enaqx/awesome-react#boilerplates) 进行开发，如果遇到问题可参考我们所使用的 [webpack 配置](https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js) 进行 [定制](http://ant-tool.github.io/webpack-config.html)。

## 小甜点

- 你可以享用 `npm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
