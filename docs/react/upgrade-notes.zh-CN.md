---
order: 4
title: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

## 1.x => 2.0

很高兴的通知各位，`antd-mobile@2.0` 已经进入比较稳定的 beta 版本状态。相对于 1.x，`antd-mobile@2.0` 更快、更轻量、更容易上手。欢迎大家开始使用！

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

如何升级？

1. 确保在你页面的 html 标签上加上 `data-scale` 属性， 如 `<html data-scale="true"></html>`, 或者通过 js 动态添加 `document.documentElement.setAttribute('data-scale', true);`。

2. 参照 [自定义主题文档](https://ant.design/docs/react/customize-theme-cn)  将 antd-mobile 提供的单位变量 `@hd` 赋值为 `@hd: '2px'`。


#### svg icon

在 2.0 中 `Icon.props.type` 不再支持传入 require 的本地 svg 文件，只支持传入 `string` 形式的 Icon 名称。

如何升级？

1. 对于原有代码中 `<Icon type="loading" />` 此类传入字符串的 icon 名称的使用场景，无需任何修改，仍然支持 (具体支持哪些 icon name, 请查阅 [文档](http://beta.mobile.ant.design/components/icon-cn))。

2. 对于原有代码有 `<Icon type={require('../foo.svg')} />` 如何升级 ？ 建议用一个自定义的 `AntdMobileOldIcon` 组件替换 antd-mobile `Icon`, 可直接 copy 如下的代码：

```jsx
// 原来的使用方式
import { Icon } from 'antd-mobile';

<Icon type={require('./foo.svg)'} />

// 修改成
const AntdMobileOldIcon = ({ type, className = '', size = 'md', ...restProps }) => (
    <svg
      className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={type} />
    </svg>
);
<AntdMobileOldIcon type={require('./foo.svg)'} />
```

#### DatePicker

去除 moment.js 依赖，相应地 `value` / `minDate` / `maxDate` / `format` / `onChange` 这些属性的数据类型，从 `moment` 对象变为 `Date` 对象。另外 moment 对象上有 format 等自定义方法，但 Date 对象上没有相应方法、需要自行实现。

升级示例：

  ```diff
  <DatePicker
  -  minDate={moment([2015, 8, 15, 10, 30, 0])}
  +  minDate={new Date(2015, 8, 15, 10, 30, 0)}
  -  maxDate={moment([2018, 1, 1, 23, 49, 59])}
  +  maxDate={new Date(2018, 1, 1, 23, 49, 59)}
  >
    <List.Item arrow="horizontal">日期</List.Item>
  </DatePicker>
  ```

#### Tabs

旧版：

```jsx
<Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
  <TabPane tab={<Badge text={'3'}>First Tab</Badge>} key="1">
    <div>Content of First Tab</div>
  </TabPane>
  <TabPane tab={<Badge text={'今日(20)'}>Second Tab</Badge>} key="2">
    <div>Content of Second Tab</div>
  </TabPane>
  <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
    <div>Content of Third Tab</div>
  </TabPane>
</Tabs>
```

新版变化：

- 每个 tab 的元数据由 `tabs=[{ key: string, title: Node, ... }, ...]` 属性传入
- `defaultActiveKey` => `initialPage`、`activeKey` => `page`，支持字符串形式的 key 或者数字索引
- 去掉 `TabPane` 元素, Tabs 的 children 根据 key 或索引顺序与 `tabs` 数据对应
- 支持单内容节点、函数内容节点
- 添加 `renderTab` / `renderTabBar` API 来支持更灵活的自定义内容

```jsx
const tabs = [
  { title: <Badge text={'3'}>First Tab</Badge>, sub: 'subcontent' },
  { title: <Badge text={'今日(20)'}>Second Tab</Badge>, sub: 'subcontent' },
  { title: <Badge dot>Third Tab</Badge>, sub: 'subcontent' },
];

<Tabs tabs={tabs} initialPage={1}
  onChange={(tab, index) => { console.log(index, tab); }}
  renderTab={tab => <span>{tab.title}-{tab.sub}</span>}
  renderTabBar={(props) => <Tabs.DefaultTabBar {...props} />}
>
  <div>Content of First Tab</div>
  <div>Content of Second Tab</div>
  <div>Content of Third Tab</div>
</Tabs>
```

#### Popup

由于 Popup 组件的底层依赖和大量样式都与 Modal 组件相同，并且 `Popup.show()` 的 API 调用方法在数据更新时遇到困难，因此我们删除了 Popup 组件，并且在 Modal 组件上增加 `popup` 属性、来实现 Popup 组件的功能。

使用 Modal 组件实现 Popup 的示例：

```diff
- Popup.show(<div>Content</div>, { animationType: 'slide-up', maskClosable: false });
- Popup.hide();

+ <Modal
+   popup
+   visible={this.state.vsible}
+   animationType="slide-up"
+   maskClosable={false}
+ >
+   Content
+ </Modal>
```

#### Others

- 删除 `Table` 组件，可以自行使用 [rc-table](https://github.com/react-component/table) 包装。
- 各个组件的 `ref` 从 `string` 修改为 `function` (比如 `input` 组件 `this.refs.input` => `this.input`)
- 部分 Web 版本组件原来会根据 UA 对 iOS 或 Android 平台应用不同的样式，现在修改为默认应用 iOS 平台样式。
- `Button` / `InputItem` / `TextareaItem` / `Progress` / `List`/ `Result`/ `Switch` / `Slider` / `Flex` / `pagination` / `ActionSheet` 等组件的 细节样式 或 API 都有部分微调

更细节的信息，请查看 change logs


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
