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
| format  | 格式化选中值的函数  | (val): void | `(values) => { return values.join(','); } ` |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调函数，如果使用[rc-form](https://github.com/react-component/form),一般不需要自己处理 | (val): void | - |
| onPickerChange | 每列数据选择变化后的回调函数   | (val): void | - |
| children| 通常是 List.Item | Object |  List.Item  |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| title  | 大标题 | String | - |
| extra  | Picker children 建议是 List.Item, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性) | String |  `请选择`  |
| disabled  | 是否不可用 | Boolean | false |

> 更多参数及支持情况可参考：https://github.com/react-component/m-cascader
