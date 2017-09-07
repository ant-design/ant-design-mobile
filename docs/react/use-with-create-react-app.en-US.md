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

## Integrate antd-mobile

[See here for details](/docs/react/introduce#Getting-Started)

> generate the customized configration boilerplate: `yarn run eject`

## Complete example

- Web project [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)
- React-Native project [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)
    - > Note: a method of rewriting part of a single component can be found (1.x): [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)，(2.x): [ant-design-mobile/pull/1629](https://github.com/ant-design/ant-design-mobile/pull/1629)
