---
category: Components
type: Data Entry
title: PickerView
subtitle: 选择器
---

PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。

## API

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `Array<{value, label}>` / `Array<Array<{value, label}>>` | -   |
| value  | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value  | Array  | -   |
| cascade  | 是否级联   | Boolean| true|
| cols     | 列数    | Number | `3` |
| onChange | 选中后的回调，可使用[rc-form](https://github.com/react-component/form) | (val): void      | -   |
| prefixCls (`Web Only`)   | prefix class         | string | am-picker     |
| pickerPrefixCls (`Web Only`) | picker prefix class  | string | am-picker-col |
| styles (`Web Only`)| 附加的样式 | Object | {}  |
| itemStyle| 每列样式   | Object | -   |
| indicatorStyle  | indicator 样式  | Object | -  |
