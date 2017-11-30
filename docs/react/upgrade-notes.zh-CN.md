---
order: 4
title: 升级指南
---

此处着重列出升级中的不兼容变化和推荐改动。所有变动请见 [Changelog](/changelog)。

## 1.x => 2.0

2.0 不兼容改动，升级实例 [antd-mobile-samples / web-1.x-2.0](https://github.com/ant-design/antd-mobile-samples/tree/master/web-1.x-2.0)

#### 高清方案

> 如果没有使用 `antd-mobile@1.x` 或者类似的 viewport 缩放方案则可以跳过这一步。

如何升级？

1. 确保在页面的 html 标签上添加 `data-scale` 属性， 如 `<html data-scale="true"></html>`, 或者通过脚本动态添加 `document.documentElement.setAttribute('data-scale', true);`。

2. 参照 [自定义主题文档](https://mobile.ant.design/docs/react/customize-theme-cn) 将 antd-mobile 提供的主题变量 `@hd` 赋值为 `2px`。


#### Icon

如何升级，分如下两种情况？

1. 对于 `<Icon type="loading" />` 此类使用 antd-mobile 内置 Icon 的场景，无需任何修改。

2. 对于 `<Icon type={require('../foo.svg')} />` 此类使用本地 svg 文件的场景，可以保留原 svg-sprite-loader 相关配置不变，然后使用自定义的 `CustomIcon` 组件替换 antd-mobile `Icon`，示例如下：

```diff
- import { Icon } from 'antd-mobile';
- <Icon type={require('./foo.svg')} />

+ const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
+     <svg
+       className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
+       {...restProps}
+     >
+       <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
+       {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@latest */}
+     </svg>
+ );
+ <CustomIcon type={require('./foo.svg')} />
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

#### TabBar
底部Bar将不再使用 `fixed` 样式，整个 `TabBar` 的高度、位置将由外层决定，提高布局灵活性。

简单的升级方案：
在TabBar外层包裹一个div，可参见 [TabBar Demo](http://mobile.ant.design/components/tab-bar-cn/)。
```jsx
<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
  <TabBar>...</TabBar>
</div>
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

#### ListView & RefreshControl

**注意: 从 `2.0.0-beta.6` 版本开始，他们有很大的优化**，`RefreshControl` 被移除，需要使用新增的 `PullToRefresh` 组件代替。如果你之前有使用 ListView 的 `useZscroller` 属性、或者 `RefreshControl` 组件，你需要按新的用法来升级。

现在 `useZscroller` `scrollerOptions` `refreshControl` 这些属性不再起作用。**使用 web 的原生 scroller 来代替 zscroller，使用 `PullToRefresh` 组件来代替 `RefreshControl` 组件**。

升级示例:

  ```diff
  - import { ListView, RefreshControl } from 'antd-mobile';
  + import { ListView, PullToRefresh } from 'antd-mobile';
  <ListView
     dataSource={this.state.dataSource}
  -  refreshControl={
  -    <RefreshControl
  -      refreshing={this.state.refreshing}
  -      onRefresh={this.onRefresh}
  -      icon={this.renderCustomIcon()}
  -    />
  -  }
  +  pullToRefresh={
  +    <PullToRefresh
  +      refreshing={this.state.refreshing}
  +      onRefresh={this.onRefresh}
  +      indicator={{ deactivate: '下拉' }}
  +    />
  +  }
  />
  ```

> **注意：我们不推荐使用模拟 scroller**。如果你有特殊需求执意要用，请查看 [list-view zscroller](https://github.com/react-component/m-list-view/blob/master/HISTORY.md#zscroller) 这里的详细用法。


#### Others

- 删除 `Table` 组件，可以自行使用 [rc-table](https://github.com/react-component/table) 包装。
- 各个组件的 `ref` 从 `string` 修改为 `function` (比如 `input` 组件 `this.refs.input` => `this.input`)
- 部分 Web 版本组件原来会根据 UA 对 iOS 或 Android 平台应用不同的样式，现在修改为默认应用 iOS 平台样式。
- `Button` / `InputItem` / `TextareaItem` / `Progress` / `List`/ `Result`/ `Switch` / `Slider` / `Flex` / `pagination` / `ActionSheet` 等组件的 细节样式 或 API 都有部分微调。
- `ListView` 的 sticky 特性从内置改为外置。

更细节的信息，请查看 [changelog](/changelog)。


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
