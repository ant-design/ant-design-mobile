# DatePickerView 日期选择器视图

DatePickerView 是 [DatePicker](./picker/#datepicker) 的内容区域。

<code src="./demos/basic.tsx"></code>

## 属性

| 属性         | 说明           | 类型                                                           | 默认值  |
| ------------ | -------------- | -------------------------------------------------------------- | ------- |
| value        | 选中项         | `Date`                                                         | -       |
| defaultValue | 默认选中项     | `Date`                                                         | -       |
| onChange     | 选项改变时触发 | `(value: Date) => void`                                        | -       |
| min          | 最小值         | `Date`                                                         | 十年前  |
| max          | 最大值         | `Date`                                                         | 十年后  |
| precision    | 精度           | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'` | `'day'` |

## CSS 变量

| 属性     | 说明 | 默认值  |
| -------- | ---- | ------- |
| --height | 高度 | `240px` |
