---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

## 1.x => 2.0

Very pleased to inform you, `antd-mobile@2.0` has entered a relatively stable beta version of the state. Relative to 1.x, `antd-mobile@2.0` is faster, more lightweight, easier to get started. welcome to start using!

### 2.x Major changes overview

- "Web page HD display" / "SVG Icon" optimization features, Changed from "built-in" to "external", significantly reducing the complexity of getting started.
- Remove `moment.js` /` hammer.js` and other heavyweight dependencies dependencies.
- Delete the not commonly used `Table` component and merge the `Popup` component into the `Modal`.
- Refactor `Tabs` / `Modal` components to reduce size and optimize functionality.
- Add the `Calendar` / `DatePickerView` components to meet more business scenario requirements.

### 2.x Breaking changes

#### HD program

In 1.x, we use the [HD program script](https://gw.alipayobjects.com/os/rmsportal/dVgyohpfmDMFFeDasFns.js) and the [pxtorem](https://github.com/cuth/postcss-pxtorem) tool, Use the physical pixels width of the iPhone6 as a benchmark (`750px`), use `rem` to make the page scale scaling, finally to the page display high-definition effects.

In 2.0, we changed the "HD" scheme from "built-in" to "external", return to the most popular way, that is, all the defaults are changed to the logical pixels width of iPhone6 `375px` (ideal viewport width). And the default is no longer provided `rem` unit usage example.

#### svg icon

In 2.0, if you do not want to use svg as an icon, you no longer need to configure [svg-sprite-loader] (https://github.com/kisenka/svg-sprite-loader) dependency.

#### DatePicker

#### Tabs

#### Popup

#### Others

- Each component's `ref` changed from `string` to `function` (e.g. `input` component: `this.refs.input` => `this.input`)


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
