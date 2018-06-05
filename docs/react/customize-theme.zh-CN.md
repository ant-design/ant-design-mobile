---
order: 3
title: 定制主题
---

antd-mobile 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![](https://gw.alipayobjects.com/zos/rmsportal/bvJhBmAfTWsUixLpGLbL.png)

## 样式变量

antd-mobile 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

- [默认样式变量](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

## 定制方式

我们使用 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来覆盖变量。


### 1) theme 属性


- 首先，你的项目里需要包含如下依赖 `babel-plugin-import less less-loader style-loader css-loader` 。

```bash
  npm install --save-dev babel-plugin-import less less-loader style-loader css-loader
```

- 配置 babel-plugin-import 确保加载 antd-mobile less 文件

```js
{
    ...
    "plugins": [
        ["import", {"libraryName": "antd-mobile", "style": true}],
        ...
    ]
}
```

- 在 `package.json` 文件中添加一个 theme 字段，里面将包含所有我们想要修改的主题样式。[全部主题样式参考这里](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

```
  {
      ...
      "theme": {
          "brand-primary": "red",
          "color-text-base":  "#333",
          ...
      },
      ...
  }
```

- 最后，在你的 webpack （版本3.0+） 配置文件里，添加如下配置，之后运行你的 `npm start`。

> 不同版本的 webpack loader 配置方法有差异，请查看 webpack 官方文档


```js
  const theme = require('./package.json').theme;

  module.exports = {
      ...
      module: {
          ...
          rules: [
              ...
              {
                  test: /\.css$/,
                  use: [
                      'style-loader',
                      'css-loader',
                  ],
              },
              {
                  test: /\.less$/,
                  use: [
                      'style-loader',
                      'css-loader',
                      {loader: 'less-loader', options: {modifyVars: theme}},
                  ],
                  include: /node_modules/,
              },
              ...
          ],
      },
      ...
  }
```

---

另外，**[antd-mobile@1 高清方案](https://github.com/ant-design/ant-design-mobile/wiki/HD)在 antd-mobile2.0 中并不是必须的**，如果使用 `antd-mobile@1.x` 高清方案，则需要做下适配处理，操作很简单，在前面主题配置的第三步中，在 theme 字段中修改`hd`变量为 2px 即可。


```js
{
    ...
    "theme": {
        "hd": "2px",
        "brand-primary": "red",
        "color-text-base":  "#333",
        ...
    },
    ...
}
```

### 2) less

用 less 文件进行变量覆盖。

建立一个单独的 `less` 文件如下，再引入这个文件。

```css
@import "~antd-mobile/dist/antd-mobile.less";   // 引入官方提供的 less 样式入口文件
@import "your-theme-file.less";   // 用于覆盖上面定义的变量
```

注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。
