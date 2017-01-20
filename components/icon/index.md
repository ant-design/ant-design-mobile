---
category: Components
type: Data Display
chinese: 图标
english: Icon
---

SVG 图标。

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`(实心) 和 `question-circle-o`(描线)；

- 命名顺序：`[icon名]-[形状可选]-[描线与否]-[方向可选]`。

## 如何使用

首先安装依赖：

```sh
npm install svg-sprite-loader glob --save-dev
```

> 我们使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 方案来实现图标 sprite 效果，
这能避免一个页面多次引用同一个 svg 图标产生重复代码。
>
> 我们使用 [glob](https://github.com/isaacs/node-glob) 来查找项目中所有用到的 svg 图标文件路径，再给 svg-sprite-loader 插件处理。

在`webpack.config.js`文件里加入以下代码：

- 如果使用纯粹的 webpack ，配置如下：

```js
const glob = require('glob');

const svgDirs = []; // 如果需要本地部署图标，需要在此加入本地图标路径，本地部署方式见以下文档
// 把`antd-mobile/lib`目录下的 svg 文件加入进来，给 svg-sprite-loader 插件处理
glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(new RegExp(p));
});

module.exports = {
  // ...
  module: {
    // ...
    loaders: [
      // ...
      // 注意：如果有其他 svg loader 设置，请 exclude 掉这里的 svgDirs 目录。
      // 少数情况下，如果你的项目能预见到所有 svg 图标都需要 svg-sprite 处理，你可以不设置 include ，也即不需要枚举 svg 文件路径
      { test: /\.svg$/, loader: 'svg-sprite', include: svgDirs },
    ]
  }
};
```

- 如果使用 [atool-build](https://github.com/ant-tool/atool-build) 作为构建工具，webpack.config.js 文件写法稍有不同，配置如下：

```js
module.exports = function(webpackConfig, env) {
  // ...

  // svg icon config
  const svgDirs = []; // 如果需要本地部署图标，需要在此加入本地图标路径，本地部署方式见以下文档
  // 把`antd-mobile/lib`目录下的 svg 文件加入进来，给 svg-sprite-loader 插件处理
  glob.sync('node_modules/**/*antd-mobile/lib', { dot: true }).forEach(p => {
    svgDirs.push(new RegExp(p));
  });
  // exclude the default svg-url-loader from
  // atool-build https://github.com/ant-tool/atool-build/blob/e4bd2959689b6a95cb5c1c854a5db8c98676bdb3/src/getWebpackCommonConfig.js#L161
  webpackConfig.module.loaders.forEach(loader => {
    if (loader.test.toString() === '/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/') {
      loader.exclude = svgDirs;
    }
  });
  // Note: https://github.com/kisenka/svg-sprite-loader/issues/4
  // Can not process SVG files twice. You need to make sure of it yourself.
  webpackConfig.module.loaders.unshift({
    test: /\.svg$/,
    loader: 'svg-sprite',
    include: svgDirs,
  });

  return webpackConfig;
}
```

组件中使用示例代码如下:

```html
<Icon type="check" />
```

> 注意：仅内置部分必要的图标，所有图标名字列表请查看 demo

#### 遇到某些组件内依赖的 Icon (或自己使用 Icon 组件) 时图标不会显示的问题？

有些 npm 包管理器(如 cnpm)，并非是按照官方的 npm 包管理器方式组织`node_modules`里的包文件，
例如其安装的包所在的路径可能并不在`node_modules`下的直接子目录里，或者会把各个安装包的目录名字修改掉。
此时需要你按实际情况修改`glob.sync('node_modules/**/*antd-mobile/lib', ...)`里的路径查找规则。


## 本地部署

支持本地 svg 图标，使用方式如`<Icon type={require('./reload.svg')} />`，此时需要在以上设置代码的`svgDirs`数组里加入本地图标路径，给 svg-sprite-loader 插件处理。

> 还有一种不推荐但很简便的方式：`<Icon type={require('!svg-sprite!./reload.svg')} />`
这样就不需要将本地 svg 文件所在路径加入到`svgDirs`数组里了，[详细参考 webpack loaders-in-require](http://webpack.github.io/docs/using-loaders.html#loaders-in-require)


## API ( 适用平台：WEB )

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称或 require 资源    | String / reqiure('xxx')  |  |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg'  | `md` |

> 注: RN 版本由于 Icon 无法做纯 UI，推荐使用 https://github.com/oblador/react-native-vector-icons
