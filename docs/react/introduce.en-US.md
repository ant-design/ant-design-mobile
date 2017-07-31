---
order: 0
english: Ant Design Mobile of React
---

`antd-mobile` is the React implementation of the [Ant Design](http://ant.design)'s mobile specification, serving the ant and koubei wireless service.

<div class="pic-plus">
  <img width="160" src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block;
  vertical-align: middle;
}
.pic-plus {
  margin: 40px 0;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 40px;
}
</style>

## Features and Advantages

- The UI is fully Configurable and Scalable, easily adapt to all kinds of product style.
- Support Web / iOS / Android platform (Based on React Native), has a wealth of components, can fully cover all kinds of scenes.
- Built-in "Components are loaded on demand" / "Web page HD display" / "SVG Icon" optimization features, integrated development.
- Use TypeScript to develop, provide type definition files, support type and attribute smart tips for easy business development.

## Applicable Scenes

- Medium-sized and large-scale applications.
- Multi-terminal applications based on react / react-native.
- Custom UI-style applications.

## Installation

```bash
$ npm install antd-mobile --save
$ npm install babel-plugin-import --save-dev
```

## Usage

> If you encounter an error, please refer [#56](https://github.com/ant-design/ant-design-mobile/issues/56) and [Samples](https://github.com/ant-design/antd-mobile-samples) first.

> How antd-mobile deal with web & react-native components? Please see [Wiki](https://github.com/ant-design/ant-design-mobile/wiki/How-antd-mobile-deal-with-web-and-react-native-code-%3F)

#### Web usage

> The following doc based on `webpack@1.x` version, if you are using webpack@2.x, please see [#516](https://github.com/ant-design/ant-design-mobile/issues/516#issuecomment-293632772)

- install webpack loader deps

  ```bash
  npm i style-loader css-loader less less-loader svg-sprite-loader@0.3.1 --save-dev
  ```

> `antd-mobile@1.x` require `svg-sprite-loader@^0.3.1` , see [detail info](https://mobile.ant.design/changelog#1.2.0)

- Set the `resolve` field on webpack configuration file to load web&native components automaticlly.

  ```
  resolve: {
    modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    extensions: ['', '.web.js', '.js', '.json'],
  },
  ```

- Use the [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) to support component to load on demand:

  ```js
  // .babelrc
  {"plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]}
  // or webpack config file
  webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }]);
  ```
> If you are curious about why we need babel-plugin-import , see [Import on Demand](https://ant.design/docs/react/getting-started#Import-on-Demand)

- all icon of antd-mobile are svg file, so you need to set [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader), see [Icon docs](https://mobile.ant.design/components/icon) for details.

- Entry html page Required settings:
    - since antd-mobile css use `rem`, you need to add viewport scale and html fontSize setting scripts to your html header, see [Antd-Mobile-viewport-setting-wiki](https://github.com/ant-design/ant-design-mobile/wiki/Antd-Mobile-viewport-setting-wiki) for details.
    - Add [FastClick](https://github.com/ftlabs/fastclick) (ref [#576](https://github.com/ant-design/ant-design-mobile/issues/576))
    - Use Promise fallback support (some Android phones do not support Promise), as follows:
        ```js
        if(!window.Promise) {
          document.writeln('<script src="https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js"'+'>'+'<'+'/'+'script>');
        }
        ```

Example of usage:

```jsx
// Auto import js and css modularly, parsed by babel-plugin-import
import { Button } from 'antd-mobile';
ReactDOM.render(<Button>Start</Button>, mountNode);
```

> Other useful resources: [Server-side rendering discussion](https://github.com/ant-design/ant-design-mobile/pull/758) /
> [Custom theme](https://github.com/ant-design/antd-init/blob/master/examples/customize-antd-theme/README.md).
>
> Your custom UI library based on antd-mobile: [web-custom-ui](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui) / [web-custom-ui-pro](https://github.com/ant-design/antd-mobile-samples/tree/master/web-custom-ui-pro)

#### React-Native usage

> Note: `Table`/`Menu`/`NavBar` does not have React-Native implementation.

- Edit `.babelrc` as follows:

   ```json
  {"plugins": [["import", { "libraryName": "antd-mobile" }]]}
   ```

Example of usage:

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Button } from 'antd-mobile';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

> More common questions, please see [wiki pages](https://github.com/ant-design/ant-design-mobile/wiki).

## Version

- Stable: [![npm package](http://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](http://npmjs.com/package/antd-mobile)
- Beta: [![npm package](https://cnpmjs.org/badge/v/antd-mobile.svg?&tag=beta&subject=npm)](http://npmjs.com/package/antd-mobile)

## Size

- Components are loaded on demand, in other words, components that are not imported are not packed.
- <p><a href="https://ant-design.github.io/ant-design-analysis/" target="_blank">The size and dependency analysis</a> of `./dist/antd-mobile.min.js`</p>

## Environment Support

- `iOS`
- `Android 4.0+`

## Links

- [Home Page](https://mobile.ant.design/)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile/blob/master/development.en-US.md)
- [React components](http://github.com/react-component)

## Companies using antd-mobile

- [Ant Financial](http://www.antgroup.com/index.htm?locale=en_US)
- [Alibaba](http://www.alibaba.com/)
- [Koubei](http://www.koubei.com/)

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md) first.

If you'd like to help us improve antd-mobile, just create a [Pull Request](https://github.com/ant-design/ant-design-mobile/pulls). Feel free to report bugs and issues [here](https://github.com/ant-design/ant-design-mobile/issues/new).

> If you're new to posting issues, we ask that you read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html) prior to posting. Well written bug reports help us help you!

## Need Help?

For questions on how to use antd, please post questions to [stackoverflow](http://stackoverflow.com/questions/tagged/antd) using the `antd`/`antd-mobile` tag. If you're not finding what you need on stackoverflow, you can find us on [gitter](https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge) as well.

As always, we encourage experienced users to help those who are not familiar with `antd`!

1. [Stack Overflow](http://stackoverflow.com/questions/tagged/antd)
2. [Segment Fault](https://segmentfault.com/t/antd)
3. [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
