---
category: Components
type: Data Entry
title: PickerView
---

PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | data source       | `Array<{value, label}>` / `Array<Array<{value, label}>>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| cascade    | whether cascade        | Boolean |  true  |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | (val): void | - |
| prefixCls    | prefix class        | string |  am-picker  |
| pickerPrefixCls    | picker prefix class        | string |  am-picker-col  |
| cascade  | whether is cascade mode | Boolean | true |
| itemStyle | style to apply to each of the item labels  |   Object   | -  |
| indicatorStyle  | style of indicator | Object | - |
