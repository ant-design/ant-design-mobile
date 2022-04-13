# PickerView 选择器视图

PickerView 系列一共包括了三个组件：[PickerView](#pickerview)、[CascadePickerView](#cascadepickerview)、[DatePickerView](#datepickerview)。

## PickerView

PickerView 是 [Picker](./picker/#picker) 的内容区域。

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性         | 说明                         | 类型                                                           | 默认值                 |
| ------------ | ---------------------------- | -------------------------------------------------------------- | ---------------------- |
| columns      | 配置每一列的选项             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -                      |
| value        | 选中项                       | `PickerValue[]`                                                | -                      |
| defaultValue | 默认选中项                   | `PickerValue[]`                                                | `[]`                   |
| onChange     | 选项改变时触发               | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                      |
| renderLabel  | 自定义渲染每列展示的内容     | `(item: PickerColumnItem) => ReactNode`                        | `(item) => item.label` |
| mouseWheel   | 是否允许通过鼠标滚轮进行选择 | `boolean`                                                      | `false`                |

关于 `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend` 的类型定义，请参考 [Picker](./picker) 的文档。

### CSS 变量

| 属性             | 说明                                 | 默认值  |
| ---------------- | ------------------------------------ | ------- |
| --height         | 整体的高度                           | `240px` |
| --item-height    | 选项的高度，仅支持 px rem 和 vw 单位 | `34px`  |
| --item-font-size | 选项的字号                           | `16px`  |

## CascadePickerView

CascadePickerView 是 [CascadePicker](./picker/#cascadepicker) 的内容区域。

<code src="../cascade-picker-view/demos/demo1.tsx"></code>

### 属性

| 属性    | 说明           | 类型                    | 默认值 |
| ------- | -------------- | ----------------------- | ------ |
| options | 树形的选项数据 | `CascadePickerOption[]` | -      |

关于 `CascadePickerOption` 的类型定义，请参考 [CascadePicker](./picker/#cascadepicker) 的文档。

其他属性同 [PickerView](#pickerview)，但不支持 `columns`。

### CSS 变量

同 `PickerView`。

## DatePickerView

DatePickerView 是 [DatePicker](./picker/#datepicker) 的内容区域。

<code src="../date-picker-view/demos/demo1.tsx"></code>

<code src="../date-picker-view/demos/demo3.tsx"></code>

<code src="../date-picker-view/demos/demo2.tsx" debug></code>

### 属性

| 属性         | 说明                                                                                             | 类型                                                                                   | 默认值  |
| ------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------- |
| value        | 选中项                                                                                           | `Date`                                                                                 | -       |
| defaultValue | 默认选中项                                                                                       | `Date`                                                                                 | -       |
| onChange     | 选项改变时触发                                                                                   | `(value: Date) => void`                                                                | -       |
| min          | 最小值                                                                                           | `Date`                                                                                 | 十年前  |
| max          | 最大值                                                                                           | `Date`                                                                                 | 十年后  |
| precision    | 精度                                                                                             | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'` |
| renderLabel  | 自定义渲染每列展示的内容。其中 `type` 参数为 `precision` 中的任意值，`data` 参数为默认渲染的数字 | `(type: string, data: number) => ReactNode`                                            | -       |
| filter       | 过滤可供选择的时间                                                                               | `DatePickerFilter`                                                                     | -       |
| mouseWheel   | 是否允许通过鼠标滚轮进行选择                                                                     | `boolean`                                                                              | `false` |

关于 `DatePickerFilter` 的类型定义和使用，请参考 [DatePicker](./picker#datepicker) 的文档。

### CSS 变量

同 `PickerView`。
