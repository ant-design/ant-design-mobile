# Development

## Environment

```
node = 6+
npm = 3+
```

## Code convention for antd-mobile

TypeScript

```bash
$ npm run lint
```

### Directory Structure
```
├── AUTHORS.txt             authors
├── CHANGELOG.xxx.md        changelog document
├── LICENSE                 license
├── README.md               readme document
├── ant-design-analysis     package analysis
├── components              components source code
├── development.xxx.md      development document
├── docs                    other docs
├── rn-kitchen-sink         RN demo project source code
├── scripts                 scripts for development
├── site                    offical web site source code
├── tests                   test code
├── tsconfig.json           TypeScript config
├── typings                 mistake defined for TypeScript
```

### API Design Philosophy

Basic principles:

1. remain the same with react-native as much as possible.
2. components which react-native do not have, should follow [antd convention](https://ant.design/)。
3. components which totally new, please open a issue and we will discuss about it.

component name separate with `-`, such as `date-picker`，and file Extensions should be `.tsx`。


### Components Implementation

- prefer to use [react-component](https://github.com/react-component/), you can PR to react-component if you find any problem.
- prefer to use well-known and open-source component.
- complicated component should abstract it's basic logic into [react-component](https://github.com/react-component/)
- any problem you do not sure, open a issue and discuss.

### Web Components specification

- `components/button/index.web.tsx`

```js
import React from 'react';

class Button extends React.Component {
  static propTypes = {};
  static defaultProps = {};
  onClick = () => {};
  render() {
    return <a onClick={this.onClick}>;
  }
}

export default Button;
```

- `components/button/style/index.web.tsx`

```js
import '../../style/';
import './index.less';
```

- `components/button/style/index.less`

```less
@import '../../../style/variables';
@import '../../../style/mixins';
@buttonPrefixClass: am-button

@{buttonPrefixClass} {
  .button();
}
```

### React-Native Components specification

general we do not distinguish Android and Ios, so no suffix.

- `components/button/index.tsx`

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

// just a example, may extract style to components/button/style/index.tsx
const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
});

class Button extends React.Component {
  render() {
    return (
      <View style={[styles.button]}>
        {this.props.children}
      </View>
    );
  }
}

export default Button;
```

- `components/button/demo/basic.tsx`

```jsx
import { Button } from 'antm';
import * as React from 'react';
import { Text, View } from 'react-native';

class BasicButtonExample extends React.Component {
  render() {
    return <Button><Text>basic button</Text></Button>;
  }
}

exports.title = 'Button';
exports.description = 'button example';
exports.demo = BasicButtonExample;
```

## Development

```bash
$ npm install
```

### Development(Web)

```bash
$ npm start
```

want to test a single Component? use `COMPONENT_STYLE`, eg:

```bash
$ COMPONENT_STYLE=button npm start
```

open at browser：http://localhost:8001/

### Development(react-native)

```bash
# In one terminal tab
$ npm run rn-start

# Open one ios/android simulator
# Open another terminal tab
$ npm run ios / android
```

The code of demo app: https://github.com/ant-design/ant-design-mobile/tree/master/rn-kitchen-sink

If you need to add a new component, then modify `rn-kitchen-sink/demoList.js` and `./index.js`.

### Tips about Pull Request

Fork and git clone, and check a new branch from `master`.

```bash
git checkout -b xx-feature
```

After you are done.

```bash
$ git add --all
$ git commit -am "some description"
$ git pull --rebase origin master
# fix some conflict if need be
$ git push origin xx-feature:xx-feature
```

Open Pull Request, assign a owner, and we will follow and review this.

After you pr is merged into master.

```bash
$ git checkout master
$ git pull
```

### Run tests

Run all test:

```bash
$ npm test
```

Run web component tests：

```bash
$ npm run test:web
```

Run RN component tests：

```bash
$ npm run test:rn
```

Update snapshot：

```bash
$ npm run test:web -- -u # Update web component's snapshots
$ npm run test:rn -- -u # Update RN component's snapshots
```

Run specific test:

```bash
$ npm run test:web -- components/button/__tests__/index.test.web.js -t 'pressIn'
```

Debug test:

1. `npm install -g node-inspector` require node 6；
1. Add `debugger` to your code;
1. Run `node --debug-brk ./node_modules/.bin/jest -i -c .jest.json -i components/button/__tests/index.test.js` (.jest.web.json for web component);
1. Run `node-inspector`；
1. Open `http://127.0.0.1:8080/?port=5858`, a breakpoint will be set at the first line of the Jest CLI script. Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the debugger statement, execution will pause and you can examine the current scope and call stack.
