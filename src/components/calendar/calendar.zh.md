# Calendar 日历

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

### 属性

| 属性          | 说明                               | 类型                                                                           | 默认值     |
| ------------- | ---------------------------------- | ------------------------------------------------------------------------------ | ---------- |
| selectionMode | 选择模式，不设置的话表示不支持选择 | `'single' \| 'range'`                                                          | -          |
| value         | 选择的日期                         | 单选模式下为 `Date \| null`，多选模式下为 `[Date, Date] \| null`               | -          |
| defaultValue  | 默认选择的日期                     | 同 `value` 属性                                                                | -          |
| onChange      | 选择日期变化时触发                 | 单选模式下为 `(val: Date) => void`，多选模式下为 `(val: [Date, Date]) => void` | -          |
| weekStartsOn  | 每周以周几作为第一天               | `'Monday' \| 'Sunday'`                                                         | `'Sunday'` |
| renderLabel   | 标注信息的渲染函数                 | `(date: Date) => string \| null \| undefined`                                  | -          |

### CSS 变量

暂无
