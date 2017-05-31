---
order: 3
title: Use in create-react(-native)-app
---

[create-react-app](https://github.com/facebookincubator/create-react-app) (Web project) / [create-react-native-app](https://github.com/react-community/create-react-native-app)(React Native project) is one of best React application development tool, we are going to use `antd-mobile` within it；

## Install and Initialization

We need to install the appropriate tools first, you may need install [yarn](https://github.com/yarnpkg/yarn/) too.

```bash
$ npm install -g yarn
$ npm install -g create-react-app (web project)
$ npm install -g create-react-native-app (react-native project)
```

Then we create a new project named antm-demo.

```bash
$ create-react-app antm-demo (web project)
$ create-react-native-app antm-demo (react-native project)
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

- ### Web project

- ### React Native project

  1. Now we install antd-mobile and [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)(A babel plugin for importing components on demand [principle](https://github.com/ant-design/ant-design/blob/master/docs/react/getting-started#Import-on-Demand)) from yarn or npm.

    ```bash
    $ yarn add antd-mobile
    $ yarn add antd-mobile --dev
    ```
  2. Modify the `.babelrc` config, then restart the service.  

    ```json
    {
      "presets": ["babel-preset-expo"],
      "plugins": [["import", { "libraryName": "antd-mobile" }]],
      "env": {
        ...
      }
    }
    ```
  3. Modify the `App.js` file, import `Button` component from antd-mobile.

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

## Customize Theme

- ### Web project

- ### React Native project  

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
