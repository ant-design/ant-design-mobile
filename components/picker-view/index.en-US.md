---
category: Components
type: Data Entry
title: PickerView
---

Picker 直接渲染在区域中

### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | 数据源        | Array<{value, label}> / Array<Array<{value, label}>> |   -  |
| value   | 值, 格式[value1, value2, value3], 对应数据源的N级value    | Array  | - |
| cascade    | 是否级联        | Boolean |  true  |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调函数，如果使用[rc-form](https://github.com/react-component/form),一般不需要自己处理 | (val): void | - |
| prefixCls (`Web Only`)   | prefix class        | string |  am-picker  |
| pickerPrefixCls (`Web Only`)   | picker prefix class        | string |  am-picker-col  |
| styles  (`Web Only`)  | additional style        | Object |  {}  |
