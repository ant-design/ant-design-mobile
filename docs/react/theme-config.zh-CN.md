# antd-mobile 主题定制
antd-mobile 设计规范上支持一定程度的样式定制，以满足业务和品牌上多样化的视觉需求，包括但不限于主色、圆角、边框和部分组件的视觉定制。

![](https://gw.alipayobjects.com/zos/rmsportal/pinkfuSuBGRhJFugFdmO.png)

## 样式变量

antd-mobile 的样式使用了 [Less](http://lesscss.org/) 作为开发语言，并定义了一系列全局/组件的样式变量，你可以根据需求进行相应调整。

- [默认样式变量](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

## 定制方式

我们使用 [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) 的方式来覆盖变量。
在具体工程实践中，有 `package.theme` 和 `less` 两种方案，选择一种即可。

### 1) theme 属性（强烈推荐）
###### 总共四步：
1. 首先，你的项目里需要安装依赖 `babel-plugin-import less less-loder` 。(当然，`style-loader css-loader`这些最基础的样式依赖肯定也是要有的)

    ```
    npm install --save-dev babel-plugin-import less less-loder
   ```
1. 其次，在你项目中的`.bablrc`文件中需要有以下配置

    ```
    {
        ...
        "plugins": [
            ["import", {"libraryName": "antd-mobile", "style": true}],
            ...
        ]
    }
   ```
1. 再次，在 `package.json` 文件中添加一个 theme 字段，（当然你也可以配置一个js文件 `"theme": "./theme.js"`，有兴趣的同学自行探索）里面将包含所有我们想要修改的主题样式。[全部主题样式参考这里](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)
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

1. 最后，在你的 webpack （建议版本3.0+） 配置文件里，添加如下配置，之后运行你的 `npm start`，看到惊喜了吗？
    ```
    const pkg = require('./package.json')

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
                        {loader: 'less-loader', options: {modifyVars: pkg.theme}},
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
另外，**[高清方案](https://github.com/ant-design/ant-design-mobile/wiki/HD)在 antd-mobile2.0 中并不是必须的**，如果你想在 antd-mobile2.0 中使用高清方案，需要对其做下适配处理，操作很简单，在前面主题配置的第三步中，在 theme 字段中修改hd变量为 0.02rem 即可。
```
  {
      ...
      "theme": {
          "hd": "0.02rem",
          "brand-primary": "red",
          "color-text-base":  "#333",
          ...
      },
      ...
  }
  ```
后话：如果你对为什么要把 hd 改为 0.02rem 感到好奇，可以查看[这篇博客](http://www.jianshu.com/p/985d26b40199)，此文中笔者对高清源码稍作修改，使该方案能灵活适用于百度地图这类特殊场景。

### 2) less

用 less 文件进行变量覆盖。

建立一个单独的 `less` 文件如下，再引入这个文件。

   ```css
   @import "~antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件
   @import "your-theme-file.less";   // 用于覆盖上面定义的变量
   ```

注意：这种方式已经载入了所有组件的样式，不需要也无法和按需加载插件 `babel-plugin-import` 的 `style` 属性一起使用。
