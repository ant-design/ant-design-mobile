---
order: 3
title: Use in create-react(-native)-app
---

[create-react-app](https://github.com/facebookincubator/create-react-app) (Web project) / [create-react-native-app](https://github.com/react-community/create-react-native-app)(React Native project) is one of best React application development tool, we are going to use `antd-mobile` within it；

## Install and Initialization

We need to install the appropriate tools first, you may need install [yarn](https://github.com/yarnpkg/yarn/) too.

```bash
$ npm install -g yarn
$ npm install -g create-react-app  # web project
$ npm install -g create-react-native-app  # react-native project
```

Then we create a new project named antm-demo.

```bash
$ create-react-app antm-demo  # web project
$ create-react-native-app antm-demo  # react-native project
```

The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.

Then we go inside antm-demo and start it.

```bash
$ cd antm-demo
$ yarn start
```

- `Web project`: Open browser at http://localhost:3000/, it renders a header saying "Welcome to React" on the page.
- `React Native project`: Run `npm run ios` in terminal, it should be ok if you can see the page content in simulator.

## Import antd-mobile

First we install antd-mobile and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

  ```bash
  $ yarn add antd-mobile
  $ yarn add babel-plugin-import --dev
  ```

- ### Web project

  1. generate the customized configration boilerplate

    ```bash
    npm run eject
    ```

  2. install devDependencies

    ```bash
    yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem
    ```

  3. Modify `config/webpack.config.dev.js`

    ```js
    ...
    const pxtorem = require('postcss-pxtorem');
    ...
    extensions: ['.web.js', '.js', '.json', '.jsx'],
    ...
    rules: [
      {
        exclude: [
          ...
          /\.less$/,
          /\.svg$/,
          ...
        ]
      },
      ...
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        ...
        options: {
          plugins: [
            ['import', { libraryName: 'antd-mobile', style: true }],
          ],
          cacheDirectory: true,
        }
      },
      ...
      // It is generally necessary to use the Icon component, need to configure svg-sprite-loader
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: [
          require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
        ]
      },
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                pxtorem({ rootValue: 100, propWhiteList: [] })
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              modifyVars: { "@primary-color": "#1DA57A" },
            },
          },
        ],
      }
    ]
    ```
    > Note, we only modified webpack.config.dev.js now, if you wish this config working on production environment, you need to update webpack.config.prod.js as well.

  4. Entry html page Required settings:

    - Use HD program settings, see [antd-mobile-0.8-以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE) for details.
    - Use [FastClick](https://github.com/ftlabs/fastclick), ref [#576](https://github.com/ant-design/ant-design-mobile/issues/576)
    - Use Promise fallback support (some Android phones do not support Promise), as follows:

      ```js
      if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
      }
      ```

- ### React Native project

  1. Modify the `.babelrc` config, then restart the service.

    ```json
    {
      "presets": ["babel-preset-expo"],
      "plugins": [["import", { "libraryName": "antd-mobile" }]],
      "env": {
        ...
      }
    }
    ```
  2. Modify the `App.js` file, import `Button` component from antd-mobile.

    ```js
    ...
    import { Button } from 'antd-mobile';

    ...
    render() {
      return (
        ...
        <Button>antd-mobile button</Button>
        ...
      );
    }
    ```

## Customize Theme

- ### Web project

  Please see: [web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)

- ### React Native project

  1. Create `theme.js` file in the project root, overwrite the theme variables that you want to change, eg:

    ```js
    module.exports = {
      brand_primary: 'red',
      color_link: 'red',
      border_color_base: 'green',
    };
    ```
  2. Create `scripts/custom-rn-theme.js` file in the project root, copy the contents of [rn-custom-ui/scripts/custom-rn-theme.js](https://github.com/ant-design/antd-mobile-samples/blob/master/rn-custom-ui/scripts/custom-rn-theme.js) to `scripts/custom-rn-theme.js`.

  3. Modify the `start` script in `package.json` like this:

    ```json
    "scripts": {
      ...
      "start": "node scripts/custom-rn-theme && react-native-scripts start",
      ...
    }

    Then restart the service.

  > Note: if you want to overwrite some styles for a single component, please see [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831) (currently support 1.x verion)
