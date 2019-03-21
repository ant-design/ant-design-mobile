---
order: 1
title: Use in create-react-app
---

[create-react-app](https://github.com/facebookincubator/create-react-app) is one of best React application development tool, we are going to use `antd-mobile` within it.

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

- Import [react-app-rewired](https://github.com/timarney/react-app-rewired) and modify the `scripts` field in package.json. Due to new [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) issue, you shall need [customize-cra](https://github.com/arackaf/customize-cra) along with react-app-rewired.

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

- change importation like below:

```diff
- import Button from 'antd-mobile/lib/button';
+ import { Button } from 'antd-mobile';
```

### Complete example

Include `css-modules` and `customized theme` [antd-mobile-sample/create-react-app](https://github.com/ant-design/antd-mobile-samples/tree/master/create-react-app)
