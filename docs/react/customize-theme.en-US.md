---
order: 3
title: Customize Theme
---

Ant Design Mobile allows to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc.

![](https://gw.alipayobjects.com/zos/rmsportal/bvJhBmAfTWsUixLpGLbL.png)

## Less variables

We are using [Less](http://lesscss.org/) as the development language of style. A set of less variables are defined for each design aspect that can be customized to your needs.

- [the default style variable](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

Please report an issue if the existing list of variables is not enough for you.

## How to do it

we can use the way of [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) to override variables.


### 1) theme


- Firstly，you should install these devDependencies in your project:`babel-plugin-import less less-loader style-loader css-loader`.

```bash
  npm install --save-dev babel-plugin-import less less-loader
```
- Secondly, configuration babel-plugin-import to load antd-mobile less

```js
{
    ...
    "plugins": [
        ["import", {"libraryName": "antd-mobile", "style": true}],
        ...
    ]
}
```

- Then，add the 'theme' in `package.json` file, [the default style variable](https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less)

```js
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

- In the end, in your webpack(3.0+) config file, add these config.

>  webpack loader configuration changes in different version，please see webpack offcial doc.

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

Besides，**[antd-mobile@1 viewport setting](https://github.com/ant-design/ant-design-mobile/wiki/HD) is no longer requirement in antd-mobile2.0**，If you still want to use viewport scale，you need set theme varaiable `hd` to `2px`.

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

Use less files for variable coverage.

To establish a separate ` less ` files as follows, to introduce the file again.

```css
@import "~antd-mobile/dist/antd-mobile.less";   // Introduce the official less style entry file
@import "your-theme-file.less";   // Used to override the variables defined above
```

Notice：This approach has already been loaded into the style of all components，so don't use the `babel-plugin-import`.
