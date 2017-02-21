---
category: Components
type: Data Display
chinese: 图标
english: Icon
---

SVG 图标 (参考：[为什么使用 svg 替换 iconfont](https://github.com/ant-design/ant-design-mobile/wiki/Why-use-svg-icon))

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用 (WEB)

一. 首先安装依赖：

```sh
npm install svg-sprite-loader glob -D
```

> Note: 我们使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 方案来实现图标 sprite 效果，
这能避免一个页面多次引用同一个 svg 图标产生重复代码。

二. 在`webpack.config.js`文件里进行如下配置：

#### 如果使用纯粹的 webpack ，配置如下：

```js
const path = require('path');
const glob = require("glob");

// 1. 如需添加私有图标，可在如下的 svgDirs 数组中加入本地 svg 文件路径
const svgDirs = [
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 自己私人的 svg 存放目录
];

// 2. 把属于 antd-mobile 内置 svg 文件也加入进来
// 正常情况下路径在`node_modules/antd-mobile/lib`目录下
// 但 cnpm 之类工具可能改变 node_modules 安装目录结构，如遇问题请检查本机依赖路径是否正确
glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(path.resolve(__dirname, p));
});

// 3. 配置 webpack loader
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
const glob = require("glob");

module.exports = function(webpackConfig, env) {

// 1. 如需添加私有图标，可在如下的 svgDirs 数组中加入本地 svg 文件路径
const svgDirs = [
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 自己私人的 svg 存放目录
];

// 2. 把属于 antd-mobile 内置 svg 文件也加入进来
// 正常情况下路径在`node_modules/antd-mobile/lib`目录下
// 但 cnpm 之类工具可能改变 node_modules 安装目录结构，如遇问题请检查本机依赖路径是否正确
glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(path.resolve(__dirname, p));
});

  // 3. 因为一个 SVG 文件不能被处理两遍. exclude 掉 atool-build 默认为svg配置的svg-url-loade
  // https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L161
  // https://github.com/kisenka/svg-sprite-loader/issues/4
  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
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

组件中使用示例代码如下:

```html
<Icon type="check" />
```

> 注意：仅内置部分必要的图标，所有图标名字列表请查看 [demo](https://mobile.ant.design/components/icon)

#### 遇到某些组件内依赖的 Icon (或自己使用 Icon 组件) 时图标不会显示的问题？

有些 npm 包管理器(如 cnpm)，并非是按照官方的 npm 包管理器方式组织`node_modules`里的包文件，
例如其安装的包所在的路径可能并不在`node_modules`下的直接子目录里，或者会把各个安装包的目录名字修改掉。
此时需要你按实际情况修改`glob.sync('node_modules/**/*antd-mobile/lib', ...)`里的路径查找规则。


## 本地部署

支持本地 svg 图标，使用方式如`<Icon type={require('./reload.svg')} />`，此时需要在以上设置代码的`svgDirs`数组里加入本地图标路径，给 svg-sprite-loader 插件处理。

> 还有一种不推荐但很简便的方式：`<Icon type={require('!svg-sprite!./reload.svg')} />`
这样就不需要将本地 svg 文件所在路径加入到`svgDirs`数组里了，[详细参考 webpack loaders-in-require](http://webpack.github.io/docs/using-loaders.html#loaders-in-require)

## 如何使用 (RN)

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

## API ( 适用平台：WEB & RN )

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称或 require 资源(`web`) 或 unicode (`RN`)    | String / reqiure('xxx') / `\ue601`  |  |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg' (RN/WEB)/ number  | `md` |
| color (`RN`) | 图标颜色  | Color | '#000' |
