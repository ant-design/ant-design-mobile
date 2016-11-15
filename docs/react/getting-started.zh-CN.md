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

### 1. 安装脚手架工具

> 使用 `antd-init` 前，务必确认 [Node.js](https://nodejs.org/en/) 已经升级到 v4.x 或以上。

```bash
$ npm install antd-init -g
```

更多功能请参考 [脚手架工具](https://github.com/ant-design/antd-init/) 和 [开发工具文档](http://ant-tool.github.io/)。

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ mkdir antd-demo && cd antd-demo
$ antd-init
```

antd-init 会自动安装 npm 依赖，若有问题则可自行安装。

若安装缓慢报错，可尝试用 `cnpm` 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`。

### 3. 使用组件

脚手架会生成一个 Todo 应用实例（一个很有参考价值的 React 上手示例），先不管它，我们用来测试组件。

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

## 按需加载

通过 `import { Button } from 'antd-mobile';` 引入会加载 antd-mobile 下所有的模块，如果要按需加载可以通过以下的写法来引用。

```jsx
import Button from 'antd-mobile/lib/button';
```

如果你使用 babel，我们推荐使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```jsx
import { Button } from 'antd-mobile';
```

插件会帮你转换成上面的写法。另外此插件配合 [style](https://github.com/ant-design/babel-plugin-import#usage) 属性可以做到模块样式的按需自动加载。

## 小甜点

- 你可以享用 `npm` 生态圈里的所有模块。
- 我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
