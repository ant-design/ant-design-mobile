---
order: 1
title: 在 create-react-app 中使用
---

[create-react-app](https://github.com/facebookincubator/create-react-app) 是业界最优秀的 React 相关应用开发工具之一，本文档尝试以此工具来使用 antd-mobile 组件。

### 安装和初始化

```bash
$ npm install -g create-react-app

# 注意：工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，如果在过程中出现网络问题，请尝试配置代理或使用其他 npm registry。
$ create-react-app my-app

$ cd my-app
$ npm start
```

打开 http://localhost:3000/ 访问你的应用。

### 引入 antd-mobile

先参考 [入口页面 (html 或 模板) 相关设置](/docs/react/introduce#3.-%E4%BD%BF%E7%94%A8)，配置你的项目 html 页面。

#### 按需加载

- 引入 [react-app-rewired](https://github.com/timarney/react-app-rewired) 并修改 package.json 里的启动配置。。由于新的 [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) 版本的关系，你需要还需要安装 [customize-cra](https://github.com/arackaf/customize-cra)。

```bash
$ npm install react-app-rewired customize-cra --save-dev
```

```diff
/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

- 然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

- 使用 babel-plugin-import, [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需加载组件代码和样式的 babel 插件（[原理](https://ant.design/docs/react/getting-started-cn#按需加载)），现在我们尝试安装它并修改 config-overrides.js 文件。

```bash
npm install babel-plugin-import --save-dev
```

```diff
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd-mobile',
+     style: 'css',
+   }),
+ );
```

- 更改引用方式

```diff
- import Button from 'antd-mobile/lib/button';
+ import { Button } from 'antd-mobile';
```

### 完整的示例

含 `css-moules` 和 `自定义主题` 的 [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)

