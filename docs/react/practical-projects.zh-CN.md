---
order: 2
title: 项目实战
---

[dva](https://github.com/dvajs/dva) 是一个基于 react 和 redux 的轻量应用框架，概念来自 elm，支持 side effects、热替换、动态加载、react-native、SSR 等，已在生产环境广泛应用。

本文会引导你使用 dva 和 antd 从 0 开始创建一个简单应用。

会包含以下内容：

---

## 安装 dva-cli

通过 npm 安装 dva-cli 并确保版本是 `0.7.0` 或以上。

```bash
$ npm install dva-cli -g
$ dva -v
0.7.0
```

## 创建新应用

安装完 dva-cli 之后，就可以在命令行里访问到 `dva` 命令（[不能访问？](http://stackoverflow.com/questions/15054388/global-node-modules-not-installing-correctly-command-not-found)）。现在，你可以通过 `dva new` 创建新应用。

```bash
$ dva new dva-quickstart
```

这会创建 `dva-quickstart` 目录，包含项目初始化目录和文件，并提供开发服务器、构建脚本、数据 mock 服务、代理服务器等功能。

然后我们 `cd` 进入 `dva-quickstart` 目录，并启动开发服务器：

```bash
$ cd dva-quickstart
$ npm start
```

几秒钟后，你会看到以下输出：

```bash
Compiled successfully!

The app is running at:

  http://localhost:8000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

在浏览器里打开 http://localhost:8989 ，你会看到 dva 的欢迎界面。

## 使用 antd-mobile

[见此使用示例](/docs/react/introduce#使用)，要点概括如下：

- `npm install antd-mobile babel-plugin-import --save` 安装依赖
- `babel-plugin-import` 是用来按需加载脚本和样式，编辑 `.roadhogrc `，使 `babel-plugin-import` 插件生效。[参考文档](https://github.com/sorrycc/roadhog#extrababelplugins)
- [高清方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE)，让页面显示效果更加细腻
- 配置 `svg-sprite-loader` 以支持 Icon 组件使用。[文档链接](https://github.com/sorrycc/roadhog#svgspriteloaderdirs) （roadhog >= 0.6.0-beta1）


## 接下来：

- 定义路由
- 编写 UI Component
- 定义 Model

请参考 [dva examples](https://github.com/dvajs/dva/tree/master/examples)

## 构建应用

完成开发并且在开发环境验证之后，就需要部署给我们的用户了。先执行下面的命令：

```bash
$ npm run build
```

`build` 命令会打包所有的资源，包含 JavaScript, CSS, images, html 等。然后你可以在 `dist/` 目录下找到这些文件。

## 下一步

我们已经完成了一个简单应用，你可能还有很多疑问，比如：

- 如何处理异步请求
- 如何优雅地加载初始数据
- 如何统一处理出错，以及特定操作的出错
- 如何动态加载路由和 Model，以加速页面载入速度
- 如何实现 hmr
- 如何 mock 数据
- 等等

你可以：

- 访问 [dva 官网](https://github.com/dvajs/dva)
- 理解 dva 的 [8 个概念](https://github.com/dvajs/dva/blob/master/docs/Concepts_zh-CN.md) ，以及他们是如何串起来的
- 掌握 dva 的[所有 API](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md)
- 查看 [dva 知识地图](https://github.com/dvajs/dva-knowledgemap) ，包含 ES6, React, dva 等所有基础知识
- 查看 [更多 FAQ](https://github.com/dvajs/dva/issues?q=is%3Aissue+is%3Aclosed+label%3Afaq)，看看别人通常会遇到什么问题
- 如果你基于 dva-cli 创建项目，最好了解他的 [配置方式](https://github.com/sorrycc/roadhog#配置)
