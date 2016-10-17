<p align="center">
  <a href="http://mobile.ant.design">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/XyhtJExcOrXZnLv.png">
  </a>
</p>

# Ant Design Mobile [![](https://img.shields.io/travis/ant-design/ant-design-mobile.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-mobile) [![npm package](https://img.shields.io/npm/v/antd-mobile.svg?style=flat-square)](https://www.npmjs.org/package/antd-mobile) [![NPM downloads](http://img.shields.io/npm/dm/antd-mobile.svg?style=flat-square)](https://npmjs.org/package/antd-mobile) [![Dependency Status](https://david-dm.org/ant-design/ant-design-mobile.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-mobile)

A configurable Mobile UI specification and React-based implementation.

## Features

- Follow Ant Design Mobile UI specification.
- Configurable UI style for different products.
- Support web and native usages based on React Native.
- Develop in TypeScript.

## Demo

### mobile web demo

<img src="https://zos.alipayobjects.com/rmsportal/dLMGiKuyFLBfYfm.png" />

http://mobile.ant.design/kitchen-sink/

### react native demo

<img src="https://cloud.githubusercontent.com/assets/1698185/18130654/6ba4ccea-6fc2-11e6-9aa1-0a53cd74d9e1.png" />


## Install

```bash
$ npm install antd-mobile --save
```


## Usage

### Web

```jsx
import 'antd-mobile/lib/button/style';
import Button from 'antd-mobile/lib/button';

ReactDOM.render(<Button>Start</Button>, mountNode);
```

Set webpack to resolve .web.js suffix

```
resolve: {
  modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  extensions: ['', '.web.js', '.js', '.json'],
},
```

### React-Native

```jsx
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Button from 'antd-mobile/lib/button';

class HelloWorldApp extends Component {
  render() {
    return <Button>Start</Button>;
  }
}

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);
```

### Use babel-plugin-import

Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended) to reduce bundle size.

```js
// .babelrc
// no need to set style property in react-native
{
 "plugins": [["import", { "style": "css", "libraryName": "antd-mobile" }]]
}
```

Then you can import components from antd-mobile directly.

```jsx
// import js and css modularly, parsed by babel-plugin-import
import { Button } from 'antd-mobile';
```

## Browser Support

- `iOS`
- `Android 4.0+`

## Links

- [Home Page](http://mobile.ant.design)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile/blob/master/development.md)
- [React components](http://github.com/react-component/)

## Contributing

We welcome all contributions, please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design-mobile/pulls) or as a [GitHub issue](https://github.com/ant-design/ant-design-mobile/issues). If you'd like to improve code, check out the [Development Instruction](https://github.com/ant-design/ant-design-mobile/blob/master/development.md) and have a good time! :)
