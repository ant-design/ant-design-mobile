---
category: Components
type: Data Display
title: Icon
---

SVG 图标 (参考：[为什么使用 svg 替换 iconfont](https://github.com/ant-design/ant-design-mobile/wiki/Why-use-svg-icon))

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用 (WEB 版)

一. 首先安装依赖：

```sh
npm install svg-sprite-loader@0.3.1 -D
```

> Tip: 我们使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 方案来实现图标 sprite 效果，
这能避免一个页面多次引用同一个 svg 图标产生重复代码。

> `antd-mobile@1.x` require `svg-sprite-loader@^0.3.1` , see [detail info](https://mobile.ant.design/changelog#1.2.0)

二. 在`webpack.config.js`文件里进行如下配置：

#### 如果使用纯粹的 webpack ，配置如下：

```js
const path = require('path');

const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
      },
    ]
  }
};
```

#### 如果使用 [atool-build](https://github.com/ant-tool/atool-build) 作为构建工具，webpack.config.js 文件写法稍有不同，配置如下：

```js
const path = require('path');

module.exports = function(webpackConfig, env) {


const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

  // 因为一个 SVG 文件不能被处理两遍. 在 atool-build 默认为 svg配置的svg-url-loade 里 exclude 掉需要 svg-sprite-loader处理的目录
  // https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L162
  // https://github.com/kisenka/svg-sprite-loader/issues/4
  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test && typeof loader.test.test === 'function' && loader.test.test('.svg')) {
      loader.exclude = svgDirs;
    }
  });
  // 4. 配置 webpack loader
  webpackConfig.module.loaders.unshift({
    test: /\.(svg)$/i,
    loader: 'svg-sprite',
    include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
  });

  return webpackConfig;
}
```

#### 如果使用 [dva-cli](https://github.com/dvajs/dva-cli) 创建项目，则默认构建工具为 [roadhog](https://github.com/sorrycc/roadhog)，其配置方式参考 [官方文档](https://github.com/sorrycc/roadhog#svgspriteloaderdirs)

> roadhog 版本必须 >=  0.6.0-beta1

## 组件中使用示例代码如下:

```html
<Icon type="check" />
```

> 注意：仅内置部分必要的图标，所有图标名字列表请查看 [demo](https://mobile.ant.design/components/icon), 同时我们提供了 iconfont 对应的 svg 图标方便下载使用，[svg 图标地址 https://github.com/ant-design/ant-design-icons](https://github.com/ant-design/ant-design-icons)

> 如果使用 [dva-cli](https://github.com/dvajs/dva-cli) 初始化的项目，则默认使用[roadhog](https://github.com/sorrycc/roadhog), roadhog 的 `.roadhogrc` 文件暂不支持配置 webpack loader, 不过 roadhog 仍然支持用 `webpack.config.js` 配置。
>

## 本地部署

支持添加本地私有的 svg 图标，使用方式如`<Icon type={require('./reload.svg')} />`，此时需要在以上 `webpack.config.js` 的`svgDirs` 数组里加入本地图标路径，给 svg-sprite-loader 插件处理。

> 还有一种不推荐但很简便的方式：`<Icon type={require('!svg-sprite!./reload.svg')} />`
这样就不需要将本地 svg 文件所在路径加入到`svgDirs`数组里了，[详细参考 webpack loaders-in-require](http://webpack.github.io/docs/using-loaders.html#loaders-in-require)

## 如何使用 (RN 版)

> RN 版本由于 Icon 无法做纯 UI，需要 native 支持

- 下载 `https://at.alicdn.com/t/font_r5u29ls31bgldi.ttf` 重命名为 `anticon.ttf`
- 打开 iOS 项目 `info.plist` 文件，添加 `Fonts provided by application`，指定一个 item 的值为 `anticon.ttf`， 将 `anticon.ttf` 拖进项目；
- Android 项目将 `anticon.ttf` 放在 `android/app/src/main/assets/fonts/` 目录下;

使用方式：

```html
内置的几个图标： <Icon type="check" size="md" color="red" />
自定义图标：<Icon type={'\ue601'} size={55} /> (具体参看 demo)
```
> 注： 自定义图标需要先查找对应图标的 unicode 字符，可以去 ant.design 官网用 chrome 调试工具查看对应图标的值

## API

Support WEB, React-Native.

| 属性        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称或 require 资源(`web`) 或 unicode (`RN`)    | String / reqiure('xxx')   |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg' (`RN/WEB`)/ number(`RN Only`)  | `md` |
| color(`RN Only`) | 图标颜色  | Color | '#000' |
