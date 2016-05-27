---
order: 0
chinese: Ant Design Mobile of React
-----------------------------

AntD Mobile 是 Ant Design 的 Mobile 版本，服务于蚂蚁及口碑大中台无线业务。

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

- 基于 Ant Design 视觉规范。
- 基于 npm + webpack + babel 的工作流，支持 ES next。

## 示例

```jsx
import { Button } from '@alipay/antm';
ReactDOM.render(<Button>按钮</Button>, mountNode);
```
引入样式：

```jsx
//无需单独引入样式, 引入具体模块时会按需引入该模块所需的所有样式文件
```

插件说明: [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd)（此插件支持 js 和 css 同时按需加载）。

## 版本

- 稳定版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)
- 开发版：[![npm package](http://web.npm.alibaba-inc.com/badge/v/@alipay/antm.svg?tag=beta&style=flat-square)](http://web.npm.alibaba-inc.com/package/@alipay/antm)

## 浏览器支持

ios & android4.0+

## 链接

- [首页](http://antm.alipay.net/)
- [React 模块](http://github.com/react-component)
- [React 代码规范](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [组件设计原则](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)

## 谁在使用

- 蚂蚁金服
- 口碑

## 欢迎参与

有任何建议或意见您可以进行发个issue [提问](http://gitlab.alibaba-inc.com/react-ui/ant-mobile/issues)。
