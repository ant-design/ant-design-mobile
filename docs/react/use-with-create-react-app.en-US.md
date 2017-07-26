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

First we install antd-mobile and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) from yarn or npm.

  ```bash
  $ yarn add antd-mobile
  $ yarn add babel-plugin-import --dev
  ```

### Web project

> The source code of this sample can be found at [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)

1. generate the customized configration boilerplate

  ```bash
  yarn run eject
  ```

2. install devDependencies

  ```bash
  yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem@^3.3.1
  ```

3. Modify `config/webpack.config.dev.js`

```diff
--- a/config/webpack.config.dev.js
+++ b/config/webpack.config.dev.js
@@ -1,6 +1,7 @@
 'use strict';

 const autoprefixer = require('autoprefixer');
+const pxtorem = require('postcss-pxtorem');
 const path = require('path');
 const webpack = require('webpack');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
@@ -88,7 +89,7 @@ module.exports = {
     // for React Native Web.
     extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
     alias: {
-
+
       // Support React Native Web
       // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
       'react-native': 'react-native-web',
@@ -118,7 +119,7 @@ module.exports = {
           {
             options: {
               formatter: eslintFormatter,
-
+
             },
             loader: require.resolve('eslint-loader'),
           },
@@ -144,6 +145,8 @@ module.exports = {
           /\.gif$/,
           /\.jpe?g$/,
           /\.png$/,
+          /\.less$/,
+          /\.svg$/,
         ],
         loader: require.resolve('file-loader'),
         options: {
@@ -167,13 +170,48 @@ module.exports = {
         include: paths.appSrc,
         loader: require.resolve('babel-loader'),
         options: {
-
+          plugins: [
+            ['import', { libraryName: 'antd-mobile', style: true }],
+          ],
           // This is a feature of `babel-loader` for webpack (not Babel itself).
           // It enables caching results in ./node_modules/.cache/babel-loader/
           // directory for faster rebuilds.
           cacheDirectory: true,
         },
       },
+      {
+        test: /\.(svg)$/i,
+        loader: 'svg-sprite-loader',
+        include: [
+          require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
+          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
+        ]
+      },
+      {
+        test: /\.less$/,
+        use: [
+          require.resolve('style-loader'),
+          require.resolve('css-loader'),
+          {
+            loader: require.resolve('postcss-loader'),
+            options: {
+              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
+              plugins: () => [
+                autoprefixer({
+                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
+                }),
+                pxtorem({ rootValue: 100, propWhiteList: [] })
+              ],
+            },
+          },
+          {
+            loader: require.resolve('less-loader'),
+            options: {
+              modifyVars: { "@primary-color": "#1DA57A" },
+            },
+          },
+        ],
+      },
       // "postcss" loader applies autoprefixer to our CSS.
       // "css" loader resolves paths in CSS and adds assets as dependencies.
       // "style" loader turns CSS into JS modules that inject <style> tags.

```

> Notice:  we only modified webpack.config.dev.js now, if you wish this config working on production environment, you need to update webpack.config.prod.js as well.

4. Entry html page Required settings:

    - Use HD program settings, see [antd-mobile-0.8-以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE) for details.
    - Use [FastClick](https://github.com/ftlabs/fastclick), ref [#576](https://github.com/ant-design/ant-design-mobile/issues/576)
    - Use Promise fallback support (some Android phones do not support Promise), as follows:

      ```js
      if(!window.Promise) {
        document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
      }
      ```

### React Native project

> The source code of this sample can be found at [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)

1. Modify the `.babelrc` config, then restart the service.

```diff
--- a/.babelrc
+++ b/.babelrc
@@ -1,5 +1,6 @@
 {
   "presets": ["babel-preset-expo"],
+  "plugins": [["import", { "libraryName": "antd-mobile" }]],
   "env": {
     "development": {
       "plugins": ["transform-react-jsx-source"]
```

2. Modify the `App.js` file, import `Button` component from antd-mobile.

```diff
--- a/App.js
+++ b/App.js
@@ -1,5 +1,7 @@
 import React from 'react';
 import { StyleSheet, Text, View } from 'react-native';
+import { Button } from 'antd-mobile';
+

 export default class App extends React.Component {
   render() {
@@ -8,6 +10,7 @@ export default class App extends React.Component {
         <Text>Open up App.js to start working on your app!</Text>
         <Text>Changes you make will automatically reload.</Text>
         <Text>Shake your phone to open the developer menu.</Text>
+        <Button>antd-mobile button</Button>
       </View>
     );
   }
```

## Customize Theme

### Web project

  Please see: [antd-mobile-sample/web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [antd-mobile-sample/web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)

### React Native project

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
