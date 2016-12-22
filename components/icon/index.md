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

使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

```html
<Icon type="link" />
```

#### 遇到某些组件内依赖的 Icon (或自己使用 Icon 组件) 时图标不会显示的问题？

原因：我们使用 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 方案来实现图标 sprite 效果，
这能避免一个页面多次引用同一个 svg 图标产生重复代码。但这也需要额外的配置，以 webpack 配置为例：[参考这里](https://github.com/ant-design/ant-design-mobile/blob/b3fc99c125730859aa815d71f5c89c5ba61a7806/svg.config.js#L28-L30)
需要把项目中所有需要用到的 svg 图标的路径 (示例中的`svgDirs`)，列举出来给 svg-sprite-loader 插件处理成 sprite 形式。

同样，包括`antd-mobile`里的 svg 文件所在的路径也都需要添加进来让 svg-sprite-loader 处理。
一般地，`antd-mobile`包位于`node_modules/antd-mobile`这个位置，这时其 svg 文件所在路径就是`node_modules/antd-mobile/lib`。
但如果使用 cnpm 等非官方的 npm 包管理器，其安装的包所在的路径可能并不在`node_modules`下的直接子目录里，
即此时难以确认`antd-mobile`包是在`node_modules`目录下的哪个位置，这时可以利用`glob`等库来查找`antd-mobile`所在位置，示例如下：

```
const glob = require('glob');
const svgDirs = [];
glob.sync('node_modules/**/*/antd-mobile/lib', { dot: true }).forEach(p => {
  svgDirs.push(new RegExp(p));
});
```

## 本地部署

支持本地图标，例如`<Icon type={require('./reload.svg')} />`，
需要配合 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 设置生效。

对于项目目录中的本地 svg 图标，有一种不推荐但很简便的方式：
`<Icon type={require('!svg-sprite!./reload.svg')} />`
这样就不需要将本地 svg 文件所在的目录加入到 webpack 的 config 配置里，
[详细参考 webpack loaders-in-require](http://webpack.github.io/docs/using-loaders.html#loaders-in-require)


## API ( 适用平台：WEB )

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|----------------|--------------|
| type    |   内置 icon 名称或 require 资源    | String / reqiure('xxx')  |  |
| size    |   图标大小    | 'xxs'/'xs'/'sm'/'md'/'lg'  | `md` |

> 注: RN 版本由于 Icon 无法做纯 UI，推荐使用 https://github.com/oblador/react-native-vector-icons
