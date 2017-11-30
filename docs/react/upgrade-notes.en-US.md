---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

## 1.x => 2.0

2.x Breaking changes upgrade sample [antd-mobile-samples / web-1.x-2.0](https://github.com/ant-design/antd-mobile-samples/tree/master/web-1.x-2.0)

#### HD program

> If you do not use viewport scale in your code, you can skip this step.

How to upgrade?

1. make sure add a `data-scale` attibute in your `html` tag, eg: `<html data-scale="true"></html>`, or you can do it through js, eg: `document.documentElement.setAttribute('data-scale', true);`.

2.Follow [Customize Theme Doc](https://mobile.ant.design/docs/react/customize-theme) to modify antd-mobile theme variable `@hd` to be `2px`.

#### Icon

How to upgrade, depend on which case you use:

1. If you previously only use antd-mobile built-in Icon like this：`<Icon type="loading" />`, no need to do any change.
2. If you previously use your local svg file to do custom Icon like this way：`<Icon type={require('../foo.svg')} />`. Suggest you follow below solution:

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

Remove the `moment.js` dependency, Corresponding type of these `value / minDate / maxDate / format / onChange` props changed from the `moment` object to the `Date` object.

Upgrade example:

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

Older version:

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

New changes:

- The metadata for each tab is passed in by `tabs = [{key: string, title: Node, ...}, ...]`.
- `defaultActiveKey` => `initialPage`、`activeKey` => `page`, supports string-like keys or numeric indexes.
- Remove the `TabPane` element, Tabs' children correspond to the` tabs` data according to the key or index order.
- Support single content node, function content node.
- Add the `renderTab` /` renderTabBar` API to support more flexible custom content.

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
The `Bar`'s style of TabBar is no longer use `fixed`, `TabBar`'s height, position is determined by wrapper，improve layout flexibility.

easy to upgrade:

```jsx
<div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
  <TabBar>...</TabBar>
</div>
```

(more detail: [TabBar Demo](http://mobile.ant.design/components/tab-bar-cn/))

#### Popup

Since the underlying dependencies and bulk styles of the Popup component are the same as the Modal component, and the API call method of the `Popup.show ()` is difficult to update the data, we removed the Popup component and added `popup` prop to the Modal component to implement the Popup component's functionality.

Example of implementing Popup using Modal components:

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

**Note: they have very big optimization from `2.0.0-beta.6` version**, `RefreshControl` is removed and needs to be replaced with the new `PullToRefresh` component. If you have used the `useZscroller` prop of the `ListView` before, or the `RefreshControl` component. You need to follow new usage.

Now `useZscroller` `scrollerOptions` `refreshControl` these props no longer work. **Use the web's native scroller instead of zscroller, using the `PullToRefresh` component instead of the `RefreshControl` component**.

Upgrade example:

  ```diff
  - import { ListView, RefreshControl } from 'antd-mobile';
  + import { ListView, PullToRefresh } from 'antd-mobile';
  <ListView
     dataSource={this.state.dataSource}
  -  refreshControl={<RefreshControl
  +  pullToRefresh={<PullToRefresh
       refreshing={this.state.refreshing}
       onRefresh={this.onRefresh}
  -    icon={this.renderCustomIcon()}
  +    indicator={{ deactivate: '下拉' }}
     />}
  />
  ```

> **Note: we do not recommend using simulated scroller**. If you have special needs insisted on using it. Please see [list-view zscroller](https://github.com/react-component/m-list-view/blob/master/HISTORY.md#zscroller) for details.


#### Others

- Delete the `Table` component, and you can use [rc-table](https://github.com/react-component/table) instead.
- Each component's `ref` changed from `string` to `function` (e.g. `input` component: `this.refs.input` => `this.input`)
- Part of the Web's components styles were differ from the UA of iOS or Android platform, but now all components use iOS platform styles as default.
- For `Button` / `InputItem` / `TextareaItem` / `Progress` / `List`/ `Result`/ `Switch` / `Slider` / `Flex` / `pagination` / `ActionSheet` components, Their detail styles or APIs have some fine tuning.
- `ListView`'s sticky feature change from "built-in" to "external".

For more details, please see change logs.


## 0.9.x => 1.0

After 1.0, `antd-mobile` strictly follows [Semantic Versioning 2.0.0](http://semver.org/).

Significant changes are as follows:

### The icon in the component changes from iconfont to svg

The usage of the Icon component has not changed, like: `<Icon type="check" />`,
But because it is no longer font, so css font-size settings are no longer effective,
the position offset settings relative to other elements are also slightly different,
The setup requirements on the tool are more complex than before. [See Icon docs for details](https://mobile.ant.design/components/icon/).

### Web `Slider` split into `Slider`, `Range`, `createTooltip`, [See Slider docs for details](https://mobile.ant.design/components/slider) and [Range docs](https://mobile.ant.design/components/range).

### Other instructions

> Introduces changes to the core of the components.

- The internal html element of the Button component is replaced by the `a` tag, and the corresponding `htmlType` API is invalid.
- Some controls of Form component distinguish "[control state](https://facebook.github.io/react/docs/forms.html#controlled-components)" more clearly.
- The NoticeBar component supports the common landscape wheel function.
- `DatePicker` and `Pagination` can not set `okText` or `dismissText` prop anymore, you can use [LocalProvider](https://mobile.ant.design/components/locale-provider/) to switch langulage.
- The `locale` prop of `DatePicker` changes, now it's `{DatePickerLocale, okText, dismissText}`.

## 0.8.x => 0.9

Optimize the style and compatibility of each component, and enhance component performance such as long lists.

See [tag/0.9.0](https://github.com/ant-design/ant-design-mobile/releases/tag/0.9.0) for details.

## 0.7.x => 0.8.0

Add HD program settings, see
[antd mobile 0.8 以上版本「高清」方案设置](https://github.com/ant-design/ant-design-mobile/wiki) for details.

Other details see [tag/0.8.0](https://github.com/ant-design/ant-design-mobile/releases/tag/0.8.0).

## 0.5.x => 0.6.0

See [Changelog](/changelog#0.6.0) for details.
