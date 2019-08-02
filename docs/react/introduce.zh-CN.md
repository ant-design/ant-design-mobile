---
order: 0
title: Ant Design Mobile of React
---

`antd-mobile` 是 [Ant Design](http://ant.design) 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

<div class="pic-plus">
  <img width="160" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg">
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

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景 (antd-mobile-rn)
- 提供 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发
- 全面兼容 react / preact

## 适用场景

- 适合于中大型产品应用
- 适合于基于 react / preact / react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用

## 快速上手

> 在开始之前，推荐先学习 [React](http://facebook.github.io/react/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)。我们使用了 `babel`，试试用 [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) 的写法来提升编码的愉悦感。
>
> 确认 [Node.js](https://nodejs.org/en/) 已经升级到 v4.x 或以上。

### 1. 创建一个项目

可以是已有项目，或者是使用 [dva](https://github.com/dvajs/dva) / create-react-app 新创建的空项目，你也可以从 [官方示例](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-web) 脚手架里拷贝并修改

> 参考更多[官方示例集](https://github.com/ant-design/antd-mobile-samples)
> 或者你可以利用 React 生态圈中的 [各种脚手架](https://github.com/enaqx/awesome-react#boilerplates)

### 2. 安装

```bash
$ npm install antd-mobile --save
```

### 3. 使用

入口页面 (html 或 模板) 相关设置：

> 引入 [FastClick](https://github.com/ftlabs/fastclick) 并且设置 html `meta` (更多参考 [#576](https://github.com/ant-design/ant-design-mobile/issues/576))
>
> 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)

```html
<!DOCTYPE html>
<html>
<head>
  <!-- set `maximum-scale` for some compatibility issues -->
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
  <script src="https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"></script>
  <script>
    if ('addEventListener' in document) {
      document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
      }, false);
    }
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
  </script>
</head>
<body></body>
</html>
```

组件使用实例：

```jsx
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

引入样式：

```jsx
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
```

##### 按需加载

**注意：强烈推荐使用。**

下面两种方式都可以**只加载**用到的组件，选择其中一种方式即可。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）。

   ```js
   // .babelrc or babel-loader option
   {
     "plugins": [
       ["import", { libraryName: "antd-mobile", style: "css" }] // `style: true` 会加载 less 文件
     ]
   }
   ```

   然后只需从 antd-mobile 引入模块即可，无需单独引入样式。

   ```jsx
   // babel-plugin-import 会帮助你加载 JS 和 CSS
   import { DatePicker } from 'antd-mobile';
   ```

- 手动引入

   ```jsx
   import DatePicker from 'antd-mobile/lib/date-picker';  // 加载 JS
   import 'antd-mobile/lib/date-picker/style/css';        // 加载 CSS
   // import 'antd-mobile/lib/date-picker/style';         // 加载 LESS
   ```

##### 更多增强 (非必须):

> 基于 antd-mobile 的自定义 UI 库：[web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)


## 版本

- 稳定版：[![npm package](http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](http://npmjs.com/package/antd-mobile)
- 开发版：[![npm package](https://img.shields.io/npm/v/antd-mobile/next.svg)](http://npmjs.com/package/antd-mobile)

## 体积

- 按需加载：只需引入业务中需要的组件即可，未 import 进来的组件不会打包进来。
- <p>`./dist/antd-mobile.min.js`的文件<a href="https://ant-design.github.io/ant-design-analysis/" target="_blank">大小及依赖分析</a></p>

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](https://mobile.ant.design/)
- [开发者文档](http://github.com/ant-design/ant-design-mobile/blob/master/development.zh-CN.md)
- [React 模块](http://github.com/react-component)

## 谁在使用

- [蚂蚁金服](http://www.antgroup.com/)
- [阿里巴巴](http://www.alibaba.com/)
- [口碑](http://www.koubei.com/)

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md)。有任何建议或意见您可以 [Pull Request](https://github.com/ant-design/ant-design-mobile/pulls)，给我们 [报告 Bug](https://github.com/ant-design/ant-design-mobile/issues/new)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `antd`/`antd-mobile` 标签。

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)（推荐）
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design-mobile](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design-mobile?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
