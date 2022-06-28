# Picker 选择器

显示一个或多个选项集合的的可滚动列表。

## 何时使用

- 提供一组或多组关联选项供用户选择。
- 当少于 5 个选项时，建议直接将选项平铺，使用 Radio 是更好的选择。

Picker 系列一共包括了三个组件：[Picker](#picker)、[CascadePicker](#cascadepicker)、[DatePicker](#datepicker)。

## Picker

### 示例

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

| 属性             | 说明                         | 类型                                                               | 默认值                       |
| ---------------- | ---------------------------- | ------------------------------------------------------------------ | ---------------------------- |
| cancelText       | 取消按钮的文字               | `ReactNode`                                                        | `'取消'`                     |
| children         | 所选项的渲染函数             | `(items: PickerColumnItem[], actions: PickerActions) => ReactNode` | -                            |
| closeOnMaskClick | 点击遮罩层后是否关闭         | `boolean`                                                          | `true`                       |
| columns          | 配置每一列的选项             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])`     | -                            |
| confirmText      | 确定按钮的文字               | `ReactNode`                                                        | `'确定'`                     |
| defaultValue     | 默认选中项                   | `PickerValue[]`                                                    | `[]`                         |
| destroyOnClose   | 不可见时卸载内容             | `boolean`                                                          | `false`                      |
| forceRender      | 强制渲染内容                 | `boolean`                                                          | `false`                      |
| mouseWheel       | 是否允许通过鼠标滚轮进行选择 | `boolean`                                                          | `false`                      |
| onCancel         | 取消时触发                   | `() => void`                                                       | -                            |
| onClose          | 确认和取消时都会触发关闭事件 | `() => void`                                                       | -                            |
| onConfirm        | 确认时触发                   | `(value: PickerValue[], extend: PickerValueExtend) => void`        | -                            |
| onSelect         | 选项改变时触发               | `(value: PickerValue[], extend: PickerValueExtend) => void`        | -                            |
| popupClassName   | Popup 弹层容器的自定义类名   | `string`                                                           | -                            |
| popupStyle       | Popup 弹层容器的自定义样式   | `React.CSSProperties `                                             | -                            |
| renderLabel      | 自定义渲染每列展示的内容     | `(item: PickerColumnItem) => ReactNode`                            | `(item) => item.label`       |
| title            | 标题                         | `ReactNode`                                                        | -                            |
| value            | 选中项                       | `PickerValue[]`                                                    | -                            |
| visible          | 是否显示选择器               | `boolean`                                                          | `false`                      |
| loading          | 是否处于加载状态             | `boolean`                                                          | `false`                      |
| loadingContent   | 加载状态下展示的内容         | `ReactNode`                                                        | `默认提供了骨架屏的加载效果` |

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

### PickerActions

| 属性   | 说明                         | 类型         |
| ------ | ---------------------------- | ------------ |
| close  | 关闭 Picker                  | `() => void` |
| open   | 显示 Picker                  | `() => void` |
| toggle | 切换 Picker 的显示和隐藏状态 | `() => void` |

### Ref

同 PickerActions。

### CSS 变量

| 属性                      | 说明                                 | 默认值 | 全局变量 |
| ------------------------- | ------------------------------------ | ------ | -------- |
| --header-button-font-size | 确定和取消按钮的字号                 | `15px` | -        |
| --item-font-size          | 选择项的字号                         | `16px` | -        |
| --item-height             | 选项的高度，仅支持 px rem 和 vw 单位 | `34px` | -        |
| --title-font-size         | 标题的字号                           | `15px` | -        |

## CascadePicker

### 示例

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

### Ref

同 Picker。

### CSS 变量

同 `Picker`。

## DatePicker

### 示例

<code src="../date-picker/demos/demo1.tsx"></code>

<code src="../date-picker/demos/demo2.tsx" debug></code>

### 属性

| 属性           | 说明                                                                                             | 类型                                                                                   | 默认值  |
| -------------- | ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------- |
| children       | 所选项的渲染函数                                                                                 | `(value: Date, actions: PickerActions) => ReactNode`                                   | -       |
| defaultValue   | 选中值                                                                                           | `Date`                                                                                 | -       |
| destroyOnClose | 不可见时卸载内容                                                                                 | `boolean`                                                                              | `false` |
| filter         | 过滤可供选择的时间                                                                               | `DatePickerFilter`                                                                     | -       |
| forceRender    | 强制渲染内容                                                                                     | `boolean`                                                                              | `false` |
| max            | 最大值                                                                                           | `Date`                                                                                 | 十年后  |
| min            | 最小值                                                                                           | `Date`                                                                                 | 十年前  |
| mouseWheel     | 是否允许通过鼠标滚轮进行选择                                                                     | `boolean`                                                                              | `false` |
| onConfirm      | 确认时触发                                                                                       | `(value: Date) => void`                                                                | -       |
| onSelect       | 选项改变时触发                                                                                   | `(value: Date) => void`                                                                | -       |
| precision      | 精度                                                                                             | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'` |
| renderLabel    | 自定义渲染每列展示的内容。其中 `type` 参数为 `precision` 中的任意值，`data` 参数为默认渲染的数字 | `(type: string, data: number) => ReactNode`                                            | -       |
| value          | 选中值                                                                                           | `Date`                                                                                 | -       |

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

此外还支持 `Picker` 的以下属性：`onCancel` `onClose` `closeOnMaskClick` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` `title` `stopPropagation` `loading` `loadingContent`。

### Ref

同 Picker。

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
