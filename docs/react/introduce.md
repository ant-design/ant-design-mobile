---
order: 0
english: Ant Design Mobile of React
-----------------------------

`antd-mobile` 是 Ant Design 的移动规范的 React 实现，服务于蚂蚁及口碑大中台无线业务。

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

## 特性

- 基于 Ant Design 移动设计规范。
- 规则化的视觉样式配置，适应各类产品风格。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。
- 基于 React Native 的多平台支持。
- 使用 TypeScript 开发，提供类型定义文件。

## 示例

```jsx
import { Button } from '@alipay/antm';
ReactDOM.render(<Button>按钮</Button>, mountNode);
```

引入样式：


无需单独引入样式，使用 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) 按需加载，并引入相关样式。

```js
{
  "plugins": [["antd", {
    style: 'css',  // 'less',
    libraryName: '@alipay/antm',
  }]]
}
```

## 版本

- 稳定版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)
- 开发版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?tag=beta&style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)

## 体积

- 构建后总体积：`~110KB`
- 按需加载：只需引入业务中需要的组件即可，未 import 进来的组件不会打包进来。

## 浏览器支持

- `iOS`
- `Android 4.0+`

## 链接

- [首页](/)
- [React 模块](http://github.com/react-component)

## 谁在使用

- 蚂蚁金服
- 阿里巴巴
- 口碑

## 欢迎参与

有任何建议或意见您可以进行 [提问](http://gitlab.alibaba-inc.com/react-ui/ant-mobile/issues)。
