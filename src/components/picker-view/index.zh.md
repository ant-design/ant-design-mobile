# PickerView 选择器视图

PickerView 是 [Picker](./picker/#picker) 的内容区域。

<code src="./demos/basic.tsx"></code>

## 属性

| 属性         | 说明             | 类型                                                           | 默认值 |
| ------------ | ---------------- | -------------------------------------------------------------- | ------ |
| columns      | 配置每一列的选项 | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -      |
| value        | 选中项           | `PickerValue[]`                                                | -      |
| defaultValue | 默认选中项       | `PickerValue[]`                                                | -      |
| onChange     | 选项改变时触发   | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -      |

关于 `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend` 的类型定义，请参考 [Picker](./picker) 的文档。

## CSS 变量

| 属性     | 说明 | 默认值  |
| -------- | ---- | ------- |
| --height | 高度 | `240px` |
