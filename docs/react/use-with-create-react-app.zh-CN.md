---
order: 3
title: 在 create-react(-native)-app 中使用
---

[create-react-app](https://github.com/facebookincubator/create-react-app) (Web 项目) / [create-react-native-app](https://github.com/react-community/create-react-native-app)(React Native 项目) 是业界最优秀的 React 相关应用开发工具之一，本文档尝试以此工具来使用 antd-mobile 组件；

## 安装和初始化

首先我们需要在命令行中安装相应工具，你可能还需要安装 [yarn](https://github.com/yarnpkg/yarn/)。

```bash
$ npm install -g yarn
$ npm install -g create-react-app  # web 项目
$ npm install -g create-react-native-app  # react-native 项目
```

然后新建一个项目。

```bash
$ create-react-app antm-demo  # web 项目
$ create-react-native-app antm-demo  # react-native 项目
```

工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。

然后我们进入项目并启动。

```bash
$ cd antm-demo
$ yarn start
```

- `Web 项目`：此时浏览器访问 http://localhost:3000/ ，看到 `Welcome to React` 的界面就算成功了。
- `React Native 项目`：运行 `npm run ios` 能在模拟器中打开页面就算成功了。

## 引入 antd-mobile

  首先从 yarn 或 npm 安装并引入 antd-mobile 和 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

    ```bash
    $ yarn add antd-mobile
    $ yarn add babel-plugin-import --dev
    ```

### Web 项目

> web 项目源码请看 [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)

1. 生成自定义配置

  ```bash
  yarn run eject
  ```

2. 安装开发依赖

  ```bash
  yarn add --dev babel-plugin-import svg-sprite-loader@0.3.1 less less-loader postcss-pxtorem@^3.3.1
  ```

3. 修改 `config/webpack.config.dev.js`

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


> 注意，上述示例只修改了 webpack.config.dev.js，如果需要在生产环境生效，你需要同步修改 webpack.config.prod.js。


4. 入口页面必需的设置：

  - 引入『高清方案』设置：具体方法见 wiki 里 [antd-mobile-0.8-以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki/antd-mobile-0.8-%E4%BB%A5%E4%B8%8A%E7%89%88%E6%9C%AC%E3%80%8C%E9%AB%98%E6%B8%85%E3%80%8D%E6%96%B9%E6%A1%88%E8%AE%BE%E7%BD%AE)。
  - 引入 [FastClick](https://github.com/ftlabs/fastclick), 关联 [#576](https://github.com/ant-design/ant-design-mobile/issues/576)
  - 引入 Promise 的 fallback 支持 (部分安卓手机不支持 Promise)，示例代码如：

    ```js
    if(!window.Promise) {
      document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
    }
    ```

### React-Native 项目

> rn 项目源码请看 [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)

1. 修改 `.babelrc` 配置，并重新启动服务

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

2. 修改 `App.js`, 引入 antd-mobile 按钮组件。

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


## 自定义主题

### Web 项目

  请查看  [antd-mobile-sample/web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [antd-mobile-sample/web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro) 项目

### React-Native 项目：

  项目源码请查看: [antd-mobile-samples/rn-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui)

1. 在项目根目录创建 `theme.js` 文件，并覆盖你要改写的变量值，eg：

  ```js
  module.exports = {
    brand_primary: 'red',
    color_link: 'red',
    border_color_base: 'green',
  };
  ```

2. 项目根目录下创建 `scripts/custom-rn-theme.js` 文件，文件内容 copy [rn-custom-ui/scripts/custom-rn-theme.js](https://github.com/ant-design/antd-mobile-samples/blob/master/rn-custom-ui/scripts/custom-rn-theme.js) 该文件内容即可；

3. 改写 `package.json` 中 `start` 命令如下：

  ```json
  "scripts": {
    ...
    "start": "node scripts/custom-rn-theme && react-native-scripts start",
    ...
  }
  ```

    重新执行 `npm start`。

  > Note: 单个组件改写部分样式的方法可以参考： [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)， 目前 1.x 支持
