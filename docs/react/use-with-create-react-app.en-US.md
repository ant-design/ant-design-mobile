---
order: 3
title: Use in create-react(-native)-app
---

[create-react-app](https://github.com/facebookincubator/create-react-app) (Web project) / [create-react-native-app](https://github.com/react-community/create-react-native-app)(React Native project) is one of best React application development tool, we are going to use `antd-mobile` within it.

## Web project

### Install and Initialization

```bash
$ npm install -g create-react-app

# Note: The tool will create and initialize environment and dependencies automaticly, please try config your proxy setting or use other npm registry if any network errors happen during it.
$ create-react-app my-app

$ cd my-app
$ npm start
```

Then open http://localhost:3000/ to see your app.

### Integrate antd-mobile

First reference [entry html page settings](/docs/react/introduce#3.-Usage), configure your project's html page.

#### Use modularized antd-mobile

- Import [react-app-rewired](https://github.com/timarney/react-app-rewired) and modify the `scripts` field in package.json.

```bash
$ npm install react-app-rewired --save-dev
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
npm install babel-plugin-import --save-dev
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

### Complete example

Include `css-modules` and `customized theme` [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)


## React Native project

The complete procedure please check the document here: [antd-mobile-sample/create-react-native-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-native-app)

> Note: a method of rewriting part of a single component can be found (1.x): [ant-design-mobile/issues/1174](https://github.com/ant-design/ant-design-mobile/issues/1174#issuecomment-295256831)，(2.x): [ant-design-mobile/pull/1629](https://github.com/ant-design/ant-design-mobile/pull/1629)
