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

### 目录结构
```
├── AUTHORS.txt             作者
├── CHANGELOG.xxx.md        变更记录文档
├── LICENSE                 许可证
├── README.md               自述文档
├── ant-design-analysis     包分析
├── components              组件代码
├── development.xxx.md      开发说明文档
├── docs                    其他文档
├── scripts                 辅助脚本
├── site                    官网代码
├── tests                   通用测试代码
├── tsconfig.json           TypeScript配置
├── typings                 第三方缺失定义
```

### API 规范

设计原则

1. 尽量符合简单明了原则，参考 antd 已有的设计方式。
2. antd 也没有的, 发 issue 讨论。

组件名以 `-` 分割, 例如 `date-picker`，文件后缀名统一为 `.tsx`。


### 组件实现

- 尽量使用 react-component/xx 的组件, 有问题 pr 到 react-component/xx
- 复杂组件拆分到 react-component/xx 单独维护
- 不符合以上情况发帖讨论

### 示例

- `components/button/index.tsx`

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

## 开发流程

```bash
$ npm install
$ npm start
```

测试单个组件使用 COMPONENT_STYLE 环境变量, 例如

```bash
$ COMPONENT_STYLE=button npm start
```

访问：http://localhost:8001/

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
$ npm run test:all
```

更新 snapshot：

```bash
$ npm run test -- -u
```

只运行某文件的某个测试：

```bash
$ npm run test -- components/button/__tests__/index.test.js
```
