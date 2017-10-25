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

## 使用 antd-mobile

#### **基础运行：**

  配置入口 html （仅 Web 项目需要），参考 [入口页面 (html 或 模板) 相关设置](/docs/react/introduce#Web-使用方式)

  > 注：antd-mobile@1.x 需要运行 `yarn run eject` 以生成自定义配置，可参考  [antd-mobile-samples/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/1.x/create-react-app)

#### **按需加载：**

  - 引入 [react-app-rewired](https://github.com/timarney/react-app-rewired) 并修改 package.json 里的启动配置:

```bash
$ yarn add react-app-rewired --dev
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
yarn add babel-plugin-import --dev
```

```diff
+ const { injectBabelPlugin } = require('react-app-rewired');
  module.exports = function override(config, env) {
+   config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    return config;
  };
```

  - 更改引用方式

```diff
- import Button from 'antd-mobile/lib/button';
+ import { Button } from 'antd-mobile';
```

## 完整的示例

- Web 项目 [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)
- React-Native 项目 [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)
    - > Note: 单个组件改写部分样式的方法可以参考 (1.x)： [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)，(2.x): [ant-design-mobile/pull/1629](https://github.com/ant-design/ant-design-mobile/pull/1629)
