# Picker 选择器

<code src="./demos/index.tsx"></code>

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

此外还支持 `getContainer` `afterShow` `afterClose` `onClick` 属性，同 `Popup`

### Picker.Cascader

```typescript
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

## 指令式调用

Picker 支持指令式调用，提供了 `prompt` 方法：

```typescript
prompt: (props: Omit<PickerProps, 'value' | 'visible' | 'children'>) => Promise<PickerValue[] | null>
```

`prompt` 方法的返回值是一个 Promise，如果用户点击了确定，从 Promise 中可以解析到 `PickerValue[]`，而如果用户是触发的取消操作，那么 Promise 中的值是 `null`。你可以通过 `await` 或 `.then()` 来获取到其中的值：

```ts
const value = await Picker.prompt({
  columns: yourColumnsConfig,
})
```

```ts
Picker.prompt({
  columns: yourColumnsConfig,
}).then((value) => {
  // ...
})
```

同样地，Picker.Cascader 也支持 prompt 方法，具体用法这里不再赘述。
