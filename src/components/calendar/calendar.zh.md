# Calendar 日历 <Experimental></Experimental>

<Alert type="warning">
  由于设计更新，Calendar 组件将被移除。请使用 CalendarPickerView 组件。
</Alert>

用于选择日期或日期区间。

## 何时使用

当用户需要输入一个日期，可以在弹出的日期面板进行选择。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

<code src="./demos/demo5.tsx"></code>

<code src="./demos/demo6.tsx"></code>

<code src="./demos/demo7.tsx"></code>

## Calendar

### 属性

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 是否允许再次点击后清除 | `boolean` | `true` |
| defaultValue | 默认选择的日期 | 同 `value` 属性 | - |
| max | 可选择范围的最大值 | `Date` | - |
| min | 可选择范围的最小值 | `Date` | - |
| maxPage | 可切换到的最晚日期 | `Page` | - |
| minPage | 可切换到的最早日期 | `Page` | - |
| cellRender | 自定义日期单元格的渲染函数 | `(oriNode: ReactElement, info: { date: Date }) => ReactNode` | - |  |
| nextMonthButton | 导航窗格上的“下一月”按钮的内容 | `React.ReactNode` | `>` |
| nextYearButton | 导航窗格上的“下一年”按钮的内容 | `React.ReactNode` | `>>` |
| onChange | 选择日期变化时触发 | 单选模式下为 `(val: Date \| null) => void`，多选模式下为 `(val: [Date, Date] \| null) => void` | - |
| onPageChange | 切换月或年时触发 | `(year: number, month: number) => void` | - |
| prevMonthButton | 导航窗格上的“上一月”按钮的内容 | `React.ReactNode` | `<` |
| prevYearButton | 导航窗格上的“上一年”按钮的内容 | `React.ReactNode` | `<<` |
| renderLabel | 标注信息的渲染函数 | `(date: Date) => ReactNode \| null \| undefined` | - |
| selectionMode | 选择模式，不设置的话表示不支持选择 | `'single' \| 'range'` | - |
| shouldDisableDate | 判断日期是否可选，使用后会忽略 min 和 max 设置 | `(date: Date) => boolean` | - |
| value | 选择的日期 | 单选模式下为 `Date \| null`，多选模式下为 `[Date, Date] \| null` | - |
| weekStartsOn | 每周以周几作为第一天 | `'Monday' \| 'Sunday'` | `'Sunday'` |
| renderDate | 自定义日期渲染 | `(date: Date) => ReactNode` | - | 5.28.0 |

### CSS 变量

暂无

### Ref

| 属性 | 说明 | 类型 |
| --- | --- | --- |
| jumpTo | 跳转至指定日期的页面 | `(page: Page \| ((page: Page) => Page)) => void` |
| jumpToToday | 跳转至今日 | `() => void` |

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
