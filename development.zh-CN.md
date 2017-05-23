# Development

## 环境

```
node = 6+
npm = 3+
```

## 代码风格

TypeScript

```bash
$ npm run lint
```

### API 规范

设计原则

1. 尽量和 react-native 一致。
2. react-native 没有的组件，参考 antd。
3. antd 也没有的, 发 issue 讨论。

组件名以 `-` 分割, 例如 `date-picker`，文件后缀名统一为 `.tsx`。


### 组件实现

- 尽量使用 react-component/xx 的组件, 有问题 pr 到 react-component/xx
- 尽量使用知名开源组件
- 复杂组件拆分到 react-component/xx 单独维护
- 不符合以上情况发帖讨论

### web 组件规范

- `components/button/index.web.tsx`

```js
import * as React from 'react';

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

### react-native 组件规范

无特殊情况（iOS Android 代码完全一致）不用带后缀.

- `components/button/index.tsx`

```jsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

// 可独立到 components/button/style/index.tsx
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
import React from 'react';
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

## 开发流程

```bash
$ npm install
```

### web 流程

```bash
$ npm start
```

测试单个组件使用 COMPONENT_STYLE 环境变量, 例如

```bash
$ COMPONENT_STYLE=button npm start
```

访问：http://localhost:8001/

### react-native 流程

```bash
# In one terminal tab
$ npm run rn-start

# Open one ios/android simulator
# Open another terminal tab
$ npm run ios / android
```

If you need to add a new component, then modify `rn-kitchen-sink/demoList.js` and `./index.js`.

### 提交代码

自己从 master 新开一个分支开发.

```bash
git checkout -b xx-feature
```

开发完成后。

```bash
$ git add --all
$ git commit -am "描述"
$ git pull --rebase origin master
# 解决冲突
$ git push origin xx-feature:xx-feature
```

提交 mr, 指定相应人员 review, 根据反馈进一步修改提交.

由 review 人合并进主干后

```bash
$ git checkout master
$ git pull
```

### 运行测试

运行所有测试：

```bash
$ npm test
```

运行 web 组件测试：

```bash
$ npm run test:web
```

运行 RN 组件测试：

```bash
$ npm run test:rn
```

更新 snapshot：

```bash
$ npm run test:web -- -u # 更新 web 组件的
$ npm run test:rn -- -u # 更新 RN 组件的
```

只运行某文件的某个测试：

```bash
$ npm run test:web -- components/button/__tests__/index.test.web.js -t 'pressIn'
```

调试测试

1. `npm install -g node-inspector` 需要 node 6；
1. 在要调试的代码上加上 `debugger` 断点；
1. 运行测试 `node --debug-brk ./node_modules/.bin/jest -i -c .jest.json -i components/button/__tests/index.test.js` (web 组件用 .jest.web.json);
1. 运行 `node-inspector`；
1. 打开 `http://127.0.0.1:8080/?port=5858`，第一次会断点到 jest 的代码里，点继续运行，等一会后会到我们断点的地方。
