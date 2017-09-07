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

[见此使用示例](/docs/react/introduce#快速上手)

> 生成自定义配置: `yarn run eject`

## 完成的示例

- Web 项目 [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)
- React-Native 项目 [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)
    - > Note: 单个组件改写部分样式的方法可以参考 (1.x)： [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)，(2.x): [ant-design-mobile/pull/1629](https://github.com/ant-design/ant-design-mobile/pull/1629)
