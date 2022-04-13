# Picker 选择器

Picker 系列一共包括了三个组件：[Picker](#picker)、[CascadePicker](#cascadepicker)、[DatePicker](#datepicker)。

## Picker

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

```typescript | pure
type PickerColumnItem = {
  label: ReactNode
  value: string
  key?: string | number
}

type PickerColumn = (string | PickerColumnItem)[]

type PickerValue = string | null

type PickerValueExtend = {
  items: (PickerColumnItem | null)[]
}
```

| 属性             | 说明                         | 类型                                                           | 默认值                 |
| ---------------- | ---------------------------- | -------------------------------------------------------------- | ---------------------- |
| columns          | 配置每一列的选项             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -                      |
| value            | 选中项                       | `PickerValue[]`                                                | -                      |
| defaultValue     | 默认选中项                   | `PickerValue[]`                                                | `[]`                   |
| onSelect         | 选项改变时触发               | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                      |
| onConfirm        | 确认时触发                   | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                      |
| onCancel         | 取消时触发                   | `() => void`                                                   | -                      |
| onClose          | 确认和取消时都会触发关闭事件 | `() => void`                                                   | -                      |
| closeOnMaskClick | 点击遮罩层后是否关闭         | `boolean`                                                      | `true`                 |
| visible          | 是否显示选择器               | `boolean`                                                      | `false`                |
| title            | 标题                         | `ReactNode`                                                    | -                      |
| confirmText      | 确定按钮的文字               | `ReactNode`                                                    | `'确定'`               |
| cancelText       | 取消按钮的文字               | `ReactNode`                                                    | `'取消'`               |
| children         | 所选项的渲染函数             | `(items: PickerColumnItem[]) => ReactNode`                     | -                      |
| renderLabel      | 自定义渲染每列展示的内容     | `(item: PickerColumnItem) => ReactNode`                        | `(item) => item.label` |
| mouseWheel       | 是否允许通过鼠标滚轮进行选择 | `boolean`                                                      | `false`                |

此外还支持 [Popup](./popup) 的以下属性：`getContainer` `afterShow` `afterClose` `onClick` `stopPropagation`

**请留意，`columns` 属性的类型是二级数组**，第一级对应的是每一列，而第二级对应的是某一列中的每一个选项。因此，下面的这种写法是错误的：

```jsx
<Picker
  columns={[
    { label: 'Foo', value: 'foo' },
    { label: 'Bar', value: 'bar' },
  ]}
/>
```

需要写成：

```jsx
<Picker
  columns={[
    [
      { label: 'Foo', value: 'foo' },
      { label: 'Bar', value: 'bar' },
    ]
  ]}
/>
```

### CSS 变量

| 属性                      | 说明                                 | 默认值 | 全局变量 |
| ------------------------- | ------------------------------------ | ------ | -------- |
| --header-button-font-size | 确定和取消按钮的字号                 | `15px` | -        |
| --title-font-size         | 标题的字号                           | `15px` | -        |
| --item-font-size          | 选择项的字号                         | `16px` | -        |
| --item-height             | 选项的高度，仅支持 px rem 和 vw 单位 | `34px` | -        |

## CascadePicker

<code src="../cascade-picker/demos/demo1.tsx"></code>

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

### CSS 变量

同 `Picker`。

## DatePicker

<code src="../date-picker/demos/demo1.tsx"></code>

<code src="../date-picker/demos/demo2.tsx" debug></code>

### 属性

| 属性         | 说明                                                                                             | 类型                                                                                   | 默认值  |
| ------------ | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------- |
| value        | 选中值                                                                                           | `Date`                                                                                 | -       |
| defaultValue | 选中值                                                                                           | `Date`                                                                                 | -       |
| onSelect     | 选项改变时触发                                                                                   | `(value: Date) => void`                                                                | -       |
| onConfirm    | 确认时触发                                                                                       | `(value: Date) => void`                                                                | -       |
| min          | 最小值                                                                                           | `Date`                                                                                 | 十年前  |
| max          | 最大值                                                                                           | `Date`                                                                                 | 十年后  |
| precision    | 精度                                                                                             | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'` |
| children     | 所选项的渲染函数                                                                                 | `(value: Date) => ReactNode`                                                           | -       |
| renderLabel  | 自定义渲染每列展示的内容。其中 `type` 参数为 `precision` 中的任意值，`data` 参数为默认渲染的数字 | `(type: string, data: number) => ReactNode`                                            | -       |
| filter       | 过滤可供选择的时间                                                                               | `DatePickerFilter`                                                                     | -       |
| mouseWheel   | 是否允许通过鼠标滚轮进行选择                                                                     | `boolean`                                                                              | `false` |

```typescript | pure
type DatePickerFilter = Partial<
  Record<
    Precision,
    (
      val: number,
      extend: {
        date: Date
      }
    ) => boolean
  >
>
```

此外还支持 `Picker` 的以下属性：`onCancel` `onClose` `closeOnMaskClick` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title` `stopPropagation`。

### CSS 变量

同 `Picker`。

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

### 如何高亮当前选项

选中选项的 DOM 元素上会有 `data-selected="true"` 属性标记，你可以使用它来为选中项自定义 CSS 样式。

### 为什么组件的名字叫 "DatePicker" 而不是 "DatetimePicker"？

因为 `value` 的类型是 `Date`。

### 日期选择器为什么没有 "时-分" 或者 "月-日" 选择？

不同于 Picker 组件，DatePicker 的值的类型是 `Date` 对象，所以需要从年开始一直往下选择，只有时、分的参数是不能构建一个 `Date` 对象的。

如果你需要使用这样的选择器，可以通过 Picker 组件自行实现。
