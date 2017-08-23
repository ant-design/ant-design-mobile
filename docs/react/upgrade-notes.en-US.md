---
order: 4
title: Upgrade
---

Here list some of main incompatible changes and recommended changes in the upgrade. See [Changelog](/changelog) for all changes.

## 1.x => 2.x

- `pagination` 组件 `current` 属性改成从 `1` 开始索引 （[#1009](https://github.com/ant-design/ant-design-mobile/issues/1009)）

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
