# antd-mobile theme config
You can config theme with antd-mobile, includes colors radius border etc.

![](https://gw.alipayobjects.com/zos/rmsportal/pinkfuSuBGRhJFugFdmO.png)

## style variables

antd-mobile style use [Less](http://lesscss.org/) as development language，and define a series of global/component variables, You can adjust according to your needs.

- [the default style variable](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

## how to config theme

we can use the way of [modifyVars](http://lesscss.org/usage/#using-less-in-the-browser-modify-variables) to cover variables.
In practice, just choose one way from `package.theme` and `less`.

### 1) theme（recommend）
###### four steps：
1. Firstly，you should install these devDependencies in your project:`babel-plugin-import less less-loder`. (Of course，`style-loader css-loader` are also nedded)

    ```
    npm install --save-dev babel-plugin-import less less-loder
   ```
1. Secondly, add this config in `.babelrc`

    ```
    {
        ...
        "plugins": [
            ["import", {"libraryName": "antd-mobile", "style": true}],
            ...
        ]
    }
   ```
1. Then，add the 'theme' in `package.json` file, [the default style variable](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)
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

1. In the end, in your webpack(3.0+) config file, add these config.
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
### 2) less

Use less files for variable coverage.

To establish a separate ` less ` files as follows, to introduce the file again.

   ```css
   @import "~antd/dist/antd.less";   // Introduce the official less style entry file
   @import "your-theme-file.less";   // Used to override the variables defined above
   ```

Notice：This approach has already been loaded into the style of all components，so don't use the `babel-plugin-import`.
