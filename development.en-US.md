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
├── scripts                 scripts for development
├── site                    offical website source code
├── tests                   test code
├── tsconfig.json           TypeScript config
├── typings                 mistake defined for TypeScript
```

### API Design Philosophy

Basic principles:

1. Try to comply with the simple and clear principle and refer to the existing design methods of [antd](https://ant.design/).
2. components which totally new, please open a issue and we will discuss about it.

component name separate with `-`, such as `date-picker`，and file Extensions should be `.tsx`。


### Components Implementation

- prefer to use [react-component](https://github.com/react-component/), you can PR to react-component if you find any problem.
- complicated component should abstract it's basic logic into [react-component](https://github.com/react-component/)
- any problem you do not sure, open a issue and discuss.

### Samples

- `components/button/index.tsx`

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

- `components/button/style/index.tsx`

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

## Development

```bash
$ npm install
$ npm start
```

want to test a single Component? use `COMPONENT_STYLE`, eg:

```bash
$ COMPONENT_STYLE=button npm start
```

open at browser：http://localhost:8001/

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
$ npm run test:all
```

Update snapshot：

```bash
$ npm run test -- -u
```

Run specific test:

```bash
$ npm run test -- components/button/__tests__/index.test.js
```
