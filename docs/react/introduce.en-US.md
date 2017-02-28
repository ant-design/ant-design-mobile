---
order: 0
english: Ant Design Mobile of React
---

`antd-mobile` 是 [Ant Design](http://ant.design) 的移动规范的 React 实现，服务于蚂蚁及口碑无线业务。

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

## 特性和优势

- UI 样式高度可配置，拓展性更强，轻松适应各类产品风格
- 基于 React Native 的 iOS / Android / Web 多平台支持，组件丰富、能全面覆盖各类场景
- 内置 "组件按需加载" / "Web 页面高清显示" / "SVG Icon" 等优化方案，一体式开发
- 使用 TypeScript 开发，提供类型定义文件，支持类型及属性智能提示，方便业务开发

## 适用场景

- 适合于中大型产品应用
- 适合于基于 react / react-native 的多终端应用
- 适合不同 UI 风格的高度定制需求的应用

## 安装

```bash
$ npm install antd-mobile --save
$ npm install babel-plugin-import --save-dev
```

## 使用

> 遇到报错，请先参考 [示例脚手架](https://github.com/ant-design/ant-design-mobile/issues/56) 及 [官方示例集](https://github.com/ant-design/antd-mobile-samples)

#### Web 使用方式

- 设置 webpack 的 resolve

  ```
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.json'],
  },
  ```

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 插件支持组件按需加载，设置如下：

  ```js
  // .babelrc
  {"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}
  // or webpack config file
  webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
  ```

- 如果业务要使用 `Icon` 组件，需要配置 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader), 配置方案见 [Icon 文档](https://mobile.ant.design/components/icon)

- 入口页面必需的设置：
    - 引入『高清方案』设置：具体方法见 wiki 里 [antd-mobile-0.8-以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE)
    - 引入 [FastClick](https://github.com/ftlabs/fastclick) (关联 [#576](https://github.com/ant-design/ant-design-mobile/issues/576))
    - 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)，示例代码如：
        ```js
        if(!window.Promise) {
          document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
        }
        ```

组件使用实例：

```jsx
// Auto import js and css modularly, parsed by babel-plugin-import
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

> 服务端渲染问题：请参考[此处](https://github.com/ant-design/ant-design-mobile/pull/758)讨论的方式做服务端渲染，另外不保证所有组件都支持服务端渲染。
>
> 如何自定义主题？[见此文档](https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md)，
> 示例：[web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)

#### React-Native 使用方式

> 注：`Accordion`、`Table`、`Menu`、`NavBar` 组件暂无 React Native 版本；

- `.babelrc` 文件添加以下配置

   ```json
  {"plugins": [["import", { "libraryName": "antd-mobile" }]]}
   ```

组件使用实例：

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

## 如何贡献

在任何形式的参与前，请先阅读 [贡献者文档](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md)。有任何建议或意见您可以 [Pull Request](https://github.com/ant-design/ant-design-mobile/pulls)，给我们 [报告 Bug](https://github.com/ant-design/ant-design-mobile/issues/new)。

> 强烈推荐阅读 [《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way)、[《如何向开源社区提问题》](https://github.com/seajs/seajs/issues/545) 和 [《如何有效地报告 Bug》](http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html)，更好的问题更容易获得帮助。

## 社区互助

如果您在使用的过程中碰到问题，可以通过下面几个途径寻求帮助，同时我们也鼓励资深用户通过下面的途径给新人提供帮助。

通过 Stack Overflow 或者 Segment Fault 提问时，建议加上 `antd`/`antd-mobile` 标签。

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)（推荐）
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
