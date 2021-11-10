# Picker 选择器

Picker 系列一共包括了三个组件：[Picker](#picker)、[CascadePicker](#cascadepicker)、[DatePicker](#datepicker)。

## Picker

<code src="./demos/index.tsx"></code>

### 属性

```typescript | pure
type PickerColumnItem = {
  label: string
  value: string
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null

type PickerValueContext = {
  items: (PickerColumnItem | null)[]
}
```

| 属性         | 说明                         | 类型                                                           | 默认值   |
| ------------ | ---------------------------- | -------------------------------------------------------------- | -------- |
| columns      | 配置每一列的选项             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -        |
| value        | 选中项                       | `PickerValue[]`                                                | -        |
| defaultValue | 默认选中项                   | `PickerValue[]`                                                | -        |
| onSelect     | 选项改变时触发               | `(value: PickerValue[], context: PickerValueContext) => void`  | -        |
| onConfirm    | 确认时触发                   | `(value: PickerValue[], context: PickerValueContext) => void`  | -        |
| onCancel     | 取消时触发                   | `() => void`                                                   | -        |
| onClose      | 确认和取消时都会触发关闭事件 | `() => void`                                                   | -        |
| visible      | 是否显示选择器               | `boolean`                                                      | `false`  |
| title        | 标题                         | `ReactNode`                                                    | -        |
| confirmText  | 确定按钮的文字               | `string`                                                       | `'确定'` |
| cancelText   | 取消按钮的文字               | `string`                                                       | `'取消'` |
| children     | 所选项的渲染函数             | `(items: PickerColumnItem[]) => ReactNode`                     | -        |

此外还支持 [Popup](./popup) 的以下属性：`getContainer` `afterShow` `afterClose` `onClick` `stopPropagation`

## CascadePicker

<code src="./demos/cascade-picker-demo.tsx"></code>

### 属性

```typescript
type CascadePickerOption = {
  label: string
  value: string
  children?: CascadePickerOption[]
}
```

| 属性    | 说明           | 类型                    | 默认值 |
| ------- | -------------- | ----------------------- | ------ |
| options | 树形的选项数据 | `CascadePickerOption[]` | -      |

其他属性同 `Picker`，但不支持 `columns`。

## DatePicker

<code src="./demos/date-picker-demo.tsx"></code>

### 属性

| 属性         | 说明             | 类型                                                           | 默认值  |
| ------------ | ---------------- | -------------------------------------------------------------- | ------- |
| value        | 选中值           | `Date`                                                         | -       |
| defaultValue | 选中值           | `Date`                                                         | -       |
| onSelect     | 选项改变时触发   | `(value: Date) => void`                                        | -       |
| onConfirm    | 确认时触发       | `(value: Date) => void`                                        | -       |
| min          | 最小值           | `Date`                                                         | 十年前  |
| max          | 最大值           | `Date`                                                         | 十年后  |
| precision    | 精度             | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` |
| children     | 所选项的渲染函数 | `(value: Date) => ReactNode`                                   | -       |

此外还支持 `Picker` 的以下属性：`onCancel` `onClose` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title` `stopPropagation`

## 指令式调用

`Picker` 支持指令式调用，提供了 `prompt` 方法：

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

同样地，`CascadePicker` 和 `DatePicker` 也支持 `prompt` 方法，具体用法这里不再赘述。

## 常见问题

### 为什么组件的名字叫 "DatePicker" 而不是 "DatetimePicker"？

因为 `value` 的类型是 `Date`。

### 为什么没有 "时-分" 或者 "月-日" 选择？

不同于 `Picker` 组件，`DatePicker` 的值的类型是 `Date` 对象，所以需要从年开始一直往下选择，只有时、分的参数是不能构建一个 `Date` 对象的。
