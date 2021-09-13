# DatePicker 日期选择器

<code src="./demos/index.tsx"></code>

## API

| 属性         | 说明             | 类型                                                         | 默认值 |
| ------------ | ---------------- | ------------------------------------------------------------ | ------ |
| value        | 选中值           | Date                                                         | -      |
| defaultValue | 选中值           | Date                                                         | -      |
| onSelect     | 选项改变时触发   | (value: Date) => void                                        | -      |
| onConfirm    | 确认时触发       | (value: Date) => void                                        | -      |
| min          | 最小值           | Date                                                         | 十年前 |
| max          | 最大值           | Date                                                         | 十年后 |
| precision    | 精度             | 'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' | 'day'  |
| children     | 所选项的渲染函数 | (value: Date) => ReactNode                                   | -      |

此外还支持 `onCancel` `onClose` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` `onClick` 属性，同 `Picker`

## 指令式调用

DatePicker 支持 prompt 方法，具体用法可以参考 [Picker](./picker)

## 常见问题

### 为什么组件的名字叫 "DatePicker" 而不是 "DatetimePicker"？

因为 `value` 的类型是 `Date`。

### 为什么没有 "时-分" 或者 "月-日" 选择？

不同于 Picker 组件，DatePicker 的值的类型是 `Date` 对象，所以需要从年开始一直往下选择，只有时、分的参数是不能构建一个 Date 对象的。
