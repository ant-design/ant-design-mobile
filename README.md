<p align="center">
  <a href="http://mobile.ant.design">
    <img width="320" src="https://zos.alipayobjects.com/rmsportal/XyhtJExcOrXZnLv.png">
  </a>
</p>

# Ant Design Mobile [![](https://img.shields.io/travis/ant-design/ant-design.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design-mobile) [![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd-mobile) [![NPM downloads](http://img.shields.io/npm/dm/antd.svg?style=flat-square)](https://npmjs.org/package/antd-mobile) [![Dependency Status](https://david-dm.org/ant-design/ant-design.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design-mobile)

A configurable Mobile UI specification and React-based implementation.

## Features

- Follow Ant Design Mobile UI specification.
- Configurable UI style for different products.
- Support web and native usages based on React Native.
- Develop in TypeScript.

## Install

```bash
$ npm install antd-mobile --save
```

## Usage

```jsx
import { Button } from 'antd-mobile';

ReactDOM.render(<Button>Start</Button>, mountNode);
```

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

## Browser Support

- `iOS`
- `Android 4.0+`

## Links

- [Home Page](http://mobile.ant.design)
- [Developer Instruction](http://github.com/ant-design/ant-design-mobile/blob/master/development.md)
- [React components](http://github.com/react-component/)

## Contributing

We welcome all contributions, please read our [CONTRIBUTING.md](https://github.com/ant-design/ant-design-mobile/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/ant-design/ant-design-mobile/pulls) or as a [GitHub issue](https://github.com/ant-design/ant-design-mobile/issues). If you'd like to improve code, check out the [Development Instruction](https://github.com/ant-design/ant-design-mobile/blob/master/development.md) and have a good time! :)
