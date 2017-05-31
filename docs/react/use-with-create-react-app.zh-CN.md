---
order: 3
title: 在 create-react(-native)-app 中使用
---

[create-react-app](https://github.com/facebookincubator/create-react-app) (Web 项目) / [create-react-native-app](https://github.com/react-community/create-react-native-app)(React Native 项目) 是业界最优秀的 React 相关应用开发工具之一，本文档尝试以此工具来使用 antd-mobile 组件；

## 安装和初始化

首先我们需要在命令行中安装相应工具，你可能还需要安装 [yarn](https://github.com/yarnpkg/yarn/)。

```bash
$ npm install -g yarn
$ npm install -g create-react-app (web 项目)
$ npm install -g create-react-native-app (react-native 项目)
```

然后新建一个项目。

```bash
$ create-react-app antm-demo (web 项目)
$ create-react-native-app antm-demo (react-native 项目)
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

- ### Web 项目

- ### React-Native 项目

  1. 现在从 yarn 或 npm 安装并引入 antd-mobile 和 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（一个用于按需加载组件代码和样式的 babel 插件（[原理](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD)））

    ```bash
    $ yarn add antd-mobile
    $ yarn add antd-mobile --dev
    ```
  2. 修改 `.babelrc` 配置，并重新启动服务

    ```json
    {
      "presets": ["babel-preset-expo"],
      "plugins": [["import", { "libraryName": "antd-mobile" }]],
      "env": {
        ...
      }
    }
    ```
  3. 修改 `App.js`, 引入 antd-mobile 按钮组件。

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

## 自定义主题

- ### Web 项目

- ### React-Native 项目：

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
