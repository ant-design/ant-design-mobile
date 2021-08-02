# DatePicker 日期选择器

<code src="./demos/index.tsx"></code>

## API

| 属性         | 说明           | 类型                  | 默认值 |
| ------------ | -------------- | --------------------- | ------ |
| value        | 选中值         | Date                  | -      |
| defaultValue | 选中值         | Date                  | -      |
| onSelect     | 选项改变时触发 | (value: Date) => void | -      |
| onConfirm    | 确认时触发     | (value: Date) => void | -      |
| min          | 最小值         | Date                  | 十年前 |
| max          | 最大值         | Date                  | 十年后 |

此外还支持 `onCancel` `onClose` `visible` `confirmText` `cancelText` `getContainer` `afterShow` `afterClose` 属性，同 `Picker`

## 指令式调用

DatePicker 支持 prompt 方法，具体用法可以参考 [Picker](./picker)
