---
order: 5
english: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

## 0.9.x => 1.0

从 1.0 开始，`antd-mobile` 严格遵循 [Semantic Versioning 2.0.0](http://semver.org/lang/zh-CN/) 语义化版本规范。

重要变动如下：

### 组件的 icon 从 iconfont 转为使用 svg 图片

Icon 组件基础的使用方式没有变化、比如：`<Icon type="check" />`，由于不再是 font、
所以 css font-size 设置不再生效；相对于其他元素的位置偏移设置也与原来的略有不同；
工具上的设置要求比之前更加复杂；详细参考 [Icon 文档](https://mobile.ant.design/components/icon/)。

### Web `Slider` 拆分成 `Slider`, `Range`, `createTooltip`, 使用方式参见 [Slider文档](https://mobile.ant.design/components/slider), [Range文档](https://mobile.ant.design/components/range)

### 其他常用组件更新注意事项

> 主要介绍组件核心实现的变更。如无特别说明、组件 API 均向前兼容（新增的 API 请查看对应组件文档）

- Button 组件的内部 html 元素由`button`标签更换为`a`标签，相应`htmlType`API 失效。
- Form 相关的输入类组件、更明确区分[受控与否](https://facebook.github.io/react/docs/forms.html#controlled-components)的状态。
- 可以使用 Carousel 组件实现移动端常见的带有内容走马灯效果的“单行通知“功能；同时 NoticeBar 组件加入常见的横向走马灯功能支持。
- Popup 弹出层在 iOS 上使用时可能产生的内容滚动穿透、底部回弹遮挡页面内容等问题，在 demo 和 wiki 里加入了更多解决方法说明。
- ListView 组件底层实现进行了许多优化，并在文档里加入了更详细的介绍。
- `DatePicker`, `Pagination` 不再接受 `okText`, `dismissText`属性，而是默认内置中文文案，可以利用 [LocalProvider](https://mobile.ant.design/components/locale-provider/) 切换为英文文案。
-  `DatePicker`的`locale`属性结构变化，原来的`DatePickerLocale: object`现为`{DatePickerLocale, okText, dismissText}`

## 0.8.x => 0.9

此版本主要优化各组件的样式和兼容性，并提升长列表等组件性能，升级改动成本低。

详细变更见 https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0

## 0.7.x => 0.8.0

此版本主要加入「高清方案」支持，设置方式见 wiki
[antd mobile 0.8 以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki)

其他详细更见 https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0

## 0.5.x => 0.6.0

请查看 [Changelog](/changelog#0.6.0)。
