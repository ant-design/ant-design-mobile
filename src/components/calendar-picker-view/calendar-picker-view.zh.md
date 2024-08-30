# CalendarPickerView 日历选择器视图 <Experimental></Experimental>

用于选择日期或日期区间。

CalendarPickerView 是 [CalendarPicker](/zh/components/calendar-picker) 的内容区域。

## 示例

此处只展示了最简单的内容区域，其他更多用法可以参考 [CalendarPicker](/zh/components/calendar-picker)

<code src="./demos/demo1.tsx"></code>

## CalendarPickerView

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| defaultValue | 默认选择的日期 | 同 `value` 属性 | - |
| max | 可选择范围的最大值 | `Date` | - |
| min | 可选择范围的最小值 | `Date` | - |
| onChange | 选择日期变化时触发 | 单选模式下为 `(val: Date \| null) => void`，多选模式下为 `(val: [Date, Date] \| null) => void` | - |
| renderTop | 日期顶部信息的渲染函数 | `((date: Date) => ReactNode \| null \| undefined) \| false` | - | `false`: 5.38.0 |
| renderBottom | 日期底部信息的渲染函数 | `((date: Date) => ReactNode \| null \| undefined) \| false` | - | `false`: 5.38.0 |
| selectionMode | 选择模式，不设置的话表示不支持选择 | `'single' \| 'range'` | - |
| shouldDisableDate | 判断日期是否可选，使用后会忽略 min 和 max 设置 | `(date: Date) => boolean` | - |
| title | 日期选择器的标题 | `React.ReactNode` | `日期选择` |
| value | 选择的日期 | 单选模式下为 `Date \| null`，多选模式下为 `[Date, Date] \| null` | - |
| weekStartsOn | 每周以周几作为第一天 | `'Monday' \| 'Sunday'` | `'Sunday'` |
| renderDate | 自定义日期渲染 | `(date: Date) => ReactNode` | - | 5.28.0 |

### CSS 变量

暂无

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| jumpTo | 跳转至指定日期的区间 | `(page: Page \| ((page: Page) => Page)) => void` |
| jumpToToday | 跳转至今日 | `() => void` |
| getDateRange | 获取日期 | `[Date, Date]` |

```ts
type Page = { month: number; year: number }
```

你可以通过 Ref 手动控制日历的翻页，例如：

```ts
// 跳回当月
ref.current.jumpToToday()

// 跳转至指定年月
ref.current.jumpTo({ year: 2021, month: 1 })

// 跳转到三年之后
ref.current.jumpTo(page => ({
  year: page.year + 3,
  month: page.month,
}))
```
