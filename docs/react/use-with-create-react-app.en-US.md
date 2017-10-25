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


#### **Basic run：**

  Settings entry html page（`web only`），see [Entry html page settings](/docs/react/introduce#Web-usage)

  > Note：you need to run `yarn run eject` before customzing configurations for, more ref  [antd-mobile-samples/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/1.x/create-react-app)

#### **Use modularized antd-mobile：**

- Import [react-app-rewired](https://github.com/timarney/react-app-rewired) and modify the `scripts` field in package.json.

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

- Then create a `config-overrides.js` at root directory of your project for futher overriding.

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

- Use babel-plugin-import, [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is a babel plugin for importing components on demand（[How does it work?](https://ant.design/docs/react/getting-started#Import-on-Demand)），We are now trying to install it and modify config-overrides.js.

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

- change importation like below:

```diff
- import Button from 'antd-mobile/lib/button';
+ import { Button } from 'antd-mobile';
```

## Complete example

- Web project [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)
- React-Native project [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)
    - > Note: a method of rewriting part of a single component can be found (1.x): [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)，(2.x): [ant-design-mobile/pull/1629](https://github.com/ant-design/ant-design-mobile/pull/1629)
