---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

## 1.x => 2.0

Very pleased to inform you, `antd-mobile@2.0` has entered a relatively stable beta version of the state. Relative to 1.x, `antd-mobile@2.0` is faster, more lightweight, easier to get started. welcome to start using!

### 2.x Major changes overview

- "Web page HD display" / "SVG Icon" optimization features, Changed from "built-in" to "external", significantly reducing the complexity of getting started.
- Remove `moment.js` /` hammer.js` and other heavyweight dependencies.
- Delete the not commonly used `Table` component and merge the `Popup` component into the `Modal`.
- Refactor `Tabs` / `Modal` components to reduce size and optimize functionality.
- Add the `Calendar` / `DatePickerView` components to meet more business scenario requirements.

### 2.x Breaking changes

#### HD program

In 1.x, we use the HD program [script](https://gw.alipayobjects.com/os/rmsportal/dVgyohpfmDMFFeDasFns.js) and the [pxtorem](https://github.com/cuth/postcss-pxtorem) tool, Use the physical pixels width of the iPhone6 as a benchmark (`750px`), use `rem` to make the page scale scaling, finally to the page display high-definition effects.

In 2.0, we changed the "HD" scheme from "built-in" to "external", return to the most popular way, that is, all the defaults are changed to the logical pixels width of iPhone6 `375px` (ideal viewport width). And the default is no longer provided `rem` unit usage example.

How to upgrade?

1. make sure add a `data-scale` attibute in your `html` tag, eg: `<html data-scale="true"></html>`, or you can do it through js, eg: `document.documentElement.setAttribute('data-scale', true);`.

2.Follow [Customize Theme Doc](https://ant.design/docs/react/customize-theme)  to modify antd-mobile theme variable `@hd` to be `@hd: '2px'`.

#### svg icon

In 2.0, `Icon.props.type` no longer support require a locale svg file，only can accept a  `string` which represent icon name.

How to upgrade?

See the following two examples, if you only need case 1, you are fine to delete all `svg-sprite-loader` relative staff. If you still need support case 2, please leave the original configuration unchanged.

1. If you previously use Icon like this way： `<Icon type="loading" />`, no need to do any change. ( As for how many icon names are supported, see [Icon Doc](http://beta.mobile.ant.design/components/icon))。

2. If you previously use Icon like this way： `<Icon type={require('../foo.svg')} />`. Suggest you follow below solution:

```jsx
// your previously code
import { Icon } from 'antd-mobile';

<Icon type={require('./foo.svg)'} />

// need to modify to like below way
const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
    <svg
      className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
      {...restProps}
    >
      <use xlinkHref={type} />
    </svg>
);
<CustomIcon type={require('./foo.svg)'} />
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

#### Others

- Delete the `Table` component, and you can use [rc-table](https://github.com/react-component/table) instead.
- Each component's `ref` changed from `string` to `function` (e.g. `input` component: `this.refs.input` => `this.input`)
- Part of the Web's components styles were differ from the UA of iOS or Android platform, but now all components use iOS platform styles as default.
- For `Button` / `InputItem` / `TextareaItem` / `Progress` / `List`/ `Result`/ `Switch` / `Slider` / `Flex` / `pagination` / `ActionSheet` / `RefreshControl` components, Their detail styles or APIs have some fine tuning.
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
