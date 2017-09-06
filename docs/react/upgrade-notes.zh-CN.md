---
order: 4
title: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

## 1.x => 2.0

很高兴的通知各位，`antd-mobile@2.0` 经过半年迭代，已经进入比较稳定的 beta 版本状态。相对于 1.x，`antd-mobile@2.0` 更快、更轻量、更容易上手。欢迎大家开始使用！

### 2.x 主要变化概览

- "Web 页面高清显示" / "SVG Icon" 等优化方案，从“内置”改为“外置”，显著降低上手使用的复杂度。
- 去除 `moment.js` / `hammer.js` 等重量级底层依赖依赖。
- 删除不常用的 `Table` 组件，把 `Popup` 组件合并到 `Modal` 组件中。
- 重构 `Tabs` / `Modal` 组件，以减小体积、优化功能。
- 新增 `Calendar` / `DatePickerView` 组件，满足更多业务场景需求。

### 2.x 不兼容改动

#### 高清方案

在 1.x 中，我们使用 [高清方案脚本](https://gw.alipayobjects.com/os/rmsportal/dVgyohpfmDMFFeDasFns.js) 和 [pxtorem](https://github.com/cuth/postcss-pxtorem) 工具，使用 iPhone6 的物理像素宽度 `750px` 作为基准，并且使用 `rem` 来使页面等比缩放，最终达到页面高清显示的细腻效果。

在 2.0 中，我们把“高清”方案从“内置”改为“外置”，默认回归到最大众化的方式，即所有样式默认都改为以 iPhone6 的逻辑像素宽度 `375px`(ideal viewport width) 为基准，默认不再提供 `rem` 单位用法示例。

#### svg icon

在 2.0 中，用户如果不想使用 svg 作为 icon ，就不再需要配置 [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader) 依赖。

#### DatePicker

#### Tabs

#### Popup

#### Others

- 各个组件的 `ref` 从 `string` 修改为 `function` (比如 `input` 组件 `this.refs.input` => `this.input`)


### 2.x Bug 修复

### 2.x 其他改进


## 0.9.x => 1.0

从 1.0 开始，`antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

重要变动如下：

### 组件的 icon 从 iconfont 转为使用 svg 图片

Icon 组件的使用方式没有变化、比如：`<Icon type="check" />`，
但是由于不再是 font、所以 css font-size 设置不再生效，
相对于其他元素的位置偏移设置也与原来的略有不同，
工具上的设置要求比之前更加复杂；详细参考 [Icon 文档](https://mobile.ant.design/components/icon/)。

### Web `Slider` 拆分成 `Slider`, `Range`, `createTooltip`, 使用方式参见 [Slider文档](https://mobile.ant.design/components/slider), [Range文档](https://mobile.ant.design/components/range)

### 其他常用组件更新注意事项

> 主要介绍组件核心实现的变更。如无特别说明、组件 API 均向前兼容（新增的 API 请查看对应组件文档）

- Button 组件的内部 html 元素由`button`标签更换为`a`标签，相应`htmlType`API 失效。
- Form 相关的输入类组件、更明确区分[受控与否](https://facebook.github.io/react/docs/forms.html#controlled-components)的状态。
- NoticeBar 组件支持常见的横向走马灯功能。
- `DatePicker`, `Pagination` 不再接受 `okText`, `dismissText`属性，而是默认内置中文文案，可以利用 [LocalProvider](https://mobile.ant.design/components/locale-provider/) 切换为英文文案。
- `DatePicker`的`locale`属性结构变化，原来的`DatePickerLocale: object`现为`{DatePickerLocale, okText, dismissText}`

## 0.8.x => 0.9

优化各组件的样式和兼容性，并提升长列表等组件性能。

详细变更见 [tag/0.9.0](https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0)

## 0.7.x => 0.8.0

主要加入「高清方案」支持，设置方式见 wiki [antd mobile 0.8 以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki)

其他详细更见 [tag/0.8.0](https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0)

## 0.5.x => 0.6.0

请查看 [Changelog](/changelog#0.6.0)。
