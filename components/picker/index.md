---
category: Components
type: Data Entry
chinese: 选择器
english: Picker
source: design
---

在一组预设值中进行选择，eg：省市区选择。


### 规则
- 尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。
- DatePicker 是 Picker 的特定模式。

## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|--------------------|--------------|
| data    | 数据源        | Array<{value, label, children: Array}> |   -  |
| value   | 值, 格式[value1, value2, value3], 对应数据源的N级value    | Array  | - |
| format  | 格式化选中的值  | Function | `(values) => { return values.join(','); } ` |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调   | Function(value) ,如果使用[rc-form](https://github.com/react-component/form),一般不需要自己处理| - |
| onPickerChange | 每列数据选择变化后的回调   | Function(value) | - |
| children| 通常是 List.Item | Object |  List.Item  |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| title  | 大标题 | String | - |
| extra   | Children 如果是 List.Item, 则是 extra 属性的默认值, 如果是其它的 UI 组件,则 value 或者 extra 属性会经过 format 方法处理后传给 children 的 extra 属性,用户需要自己实现这个属性 | String |  `请选择`  |

> 更多参数及支持情况可参考：https://github.com/react-component/m-cascader
