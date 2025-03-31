# PickerView 选择器视图

PickerView 系列一共包括了三个组件：[PickerView](#pickerview)、[CascadePickerView](#cascadepickerview)、[DatePickerView](#datepickerview)。

## PickerView

PickerView 是 [Picker](/zh/components/picker/#picker) 的内容区域。

### 示例

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| columns | 配置每一列的选项 | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | - |
| defaultValue | 默认选中项 | `PickerValue[]` | `[]` |
| mouseWheel | 是否允许通过鼠标滚轮进行选择 | `boolean` | `false` |
| resistance | 通过鼠标滚轮进行选择时有段落感（mouseWheel 为 true 时生效） | `boolean` | `true` |
| onChange | 选项改变时触发 | `(value: PickerValue[], extend: PickerValueExtend) => void` | - |
| renderLabel | 自定义渲染每列展示的内容 | `(item: PickerColumnItem) => ReactNode` | `(item) => item.label` |
| value | 选中项 | `PickerValue[]` | - |
| loading | 是否处于加载状态 | `boolean` | `false` |
| loadingContent | 加载状态下展示的内容 | `ReactNode` | `默认提供了转圈加载中的加载效果` |

关于 `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend` 的类型定义，请参考 [Picker](/zh/components/picker) 的文档。

### CSS 变量

| 属性             | 说明                                 | 默认值  |
| ---------------- | ------------------------------------ | ------- |
| --height         | 整体的高度                           | `240px` |
| --item-font-size | 选项的字号                           | `16px`  |
| --item-height    | 选项的高度，仅支持 px rem 和 vw 单位 | `34px`  |

## CascadePickerView

CascadePickerView 是 [CascadePicker](/zh/components/picker/#cascadepicker) 的内容区域。

### 示例

<code src="../cascade-picker-view/demos/demo1.tsx"></code>

### 属性

| 属性    | 说明           | 类型                    | 默认值 |
| ------- | -------------- | ----------------------- | ------ |
| options | 树形的选项数据 | `CascadePickerOption[]` | -      |

关于 `CascadePickerOption` 的类型定义，请参考 [CascadePicker](/zh/components/picker/#cascadepicker) 的文档。

其他属性同 [PickerView](#pickerview)，但不支持 `columns`。

### CSS 变量

同 `PickerView`。

## DatePickerView

DatePickerView 是 [DatePicker](/zh/components/picker/#datepicker) 的内容区域。

### 示例

<code src="../date-picker-view/demos/demo1.tsx"></code>

<code src="../date-picker-view/demos/demo3.tsx"></code>

<code src="../date-picker-view/demos/demo2.tsx" debug></code>

### 属性

```typescript
type PickerDate = Date & {
  tillNow?: boolean
}
```

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultValue | 默认选中项 | `PickerDate` | - |
| filter | 过滤可供选择的时间 | `DatePickerFilter` | - |
| max | 最大值 | `PickerDate` | 十年后 |
| min | 最小值 | `PickerDate` | 十年前 |
| mouseWheel | 是否允许通过鼠标滚轮进行选择 | `boolean` | `false` |
| resistance | 通过鼠标滚轮进行选择时有段落感（mouseWheel 为 true 时生效） | `boolean` | `true` |
| onChange | 选项改变时触发 | `(value: PickerDate) => void` | - |
| precision | 精度 | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day' \| 'quarter'` | `'day'` |
| renderLabel | 自定义渲染每列展示的内容。其中 `type` 参数为 `precision` 中的任意值，`data` 参数为默认渲染的数字 | `(type: string, data: number) => ReactNode` | - |
| value | 选中项 | `PickerDate` | - |
| loading | 是否处于加载状态 | `boolean` | `false` |
| loadingContent | 加载状态下展示的内容 | `ReactNode` | `默认提供了转圈加载中的加载效果` |
| tillNow | 是否展示“至今” | `boolean` | - | 5.32.0 |

关于 `DatePickerFilter` 的类型定义和使用，请参考 [DatePicker](/zh/components/picker#datepicker) 的文档。

### CSS 变量

同 `PickerView`。
