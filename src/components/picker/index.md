# Picker 选择器

<code src="./demos/index.tsx" />

## API

### Picker

```typescript | pure
type PickerColumnItem = {
  label: string
  value: string
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null
```

| 属性         | 说明                         | 类型                                                         | 默认值 |
| ------------ | ---------------------------- | ------------------------------------------------------------ | ------ |
| columns      | 配置每一列的选项             | PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[]) | -      |
| value        | 选中项                       | PickerValue[]                                                | -      |
| defaultValue | 默认选中项                   | PickerValue[]                                                | -      |
| onSelect     | 选项改变时触发               | (value: PickerValue[]) => void                               | -      |
| onConfirm    | 确认时触发                   | (value: PickerValue[]) => void                               | -      |
| onCancel     | 取消时触发                   | () => void                                                   | -      |
| onClose      | 确认和取消时都会触发关闭事件 | () => void                                                   | -      |
| visible      | 是否显示选择器               | boolean                                                      | false  |
| confirmText  | 确定按钮的文字               | string                                                       | 确定   |
| cancelText   | 取消按钮的文字               | string                                                       | 取消   |
| children     | 所选项的渲染函数             | (items: PickerColumnItem[]) => void                          | -      |

此外还支持 `getContainer` 属性，同 `Popup`

### Picker.Cascader

```typescript | pure
type CascaderOption = {
  label: string
  value: string
  children?: CascaderOption[]
}
```

| 属性    | 说明           | 类型             | 默认值 |
| ------- | -------------- | ---------------- | ------ |
| options | 树形的选项数据 | CascaderOption[] | -      |

其他属性同 `Picker`，但不支持 `columns`
