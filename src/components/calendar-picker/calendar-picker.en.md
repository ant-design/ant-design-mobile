# CalendarPicker <Experimental></Experimental>

Used to select a date or date range.

## When to Use

When the user needs to enter a date, he can select it in the pop-up date panel.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

<code src="./demos/demo4.tsx"></code>

## CalendarPicker

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| visible | To show or hide the Cclendar | `boolean` | `true` |
| confirmText | The text of confirm button | `string` | `Confirm` |
| popupClassName | The custom class name of the popup | `string` | - |
| popupStyle | The custom style of the popup | `React.CSSProperties` | - |
| popupBodyStyle | The custom style of the popup body | `React.CSSProperties` | - |
| forceRender | Render content forcely，When ref is passed，always be true | `boolean` | `false` |
| closeOnMaskClick | Whether to close after clicking the mask layer | `boolean` | `true` |
| onClose | Triggered when closed | `() => void` | - |
| onMaskClick | Triggered when the mask is clicked | `() => void` | - |
| getContainer | To get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `() => document.body` | - |
| allowClear | Whether to allow clearing after another click. | `boolean` | `true` |
| defaultValue | The default selected date or date range. | Same as `value` prop. | - |
| max | Maximum value of a selectable range. | `Date` | - |
| min | Minimum value of a selectable range. | `Date` | - | - |
| onChange | Trigger when selected date changes. | `(val: Date \| null) => void` when selection mode is "single". `(val: [Date, Date] \| null) => void` when selection mode is "range". | - |
| onConfirm | Trigger when confirm button is clicked. | `(val: Date \| null) => void` when selection mode is "single"，`(val: [Date, Date] \| null) => void` when selection mode is "range" | - |
| renderTop | The top information of date render function. | `(date: Date) => ReactNode \| null \| undefined` | - |
| renderBottom | The bottom information of date render function. | `(date: Date) => ReactNode \| null \| undefined` | - |
| selectionMode | The selection mode. Disable selection when this prop is not set. | `'single' \| 'range'` | - |
| shouldDisableDate | Set whether the date is disable selection. The min and max Settings are ignored | `(date: Date) => boolean` | - |
| title | The title of calendar | `React.ReactNode` | `Date selection` |
| value | The selected date or date range. | `Date \| null` when selection mode is "single". `[Date, Date] \| null` when selection mode is "range" | - |
| weekStartsOn | Week starts on which day. | `'Monday' \| 'Sunday'` | `'Sunday'` |
| renderDate | Custom date rendering. | `(date: Date) => ReactNode` | - | 5.28.0 |

### CSS Variables

Not supported yet.

### Ref

| Name | Description | Type |
| --- | --- | --- |
| jumpTo | Jump to specified page | `(page: Page \| ((page: Page) => Page)) => void` |
| jumpToToday | Jump to today's page | `() => void` |
| getDateRange | get date | `[Date, Date]` |

```ts
type Page = { month: number; year: number }
```

You can manually control the page turning of the calendar through Ref, for example:

```ts
// Jump to today's page
ref.current.jumpToToday()

// Jump to the specified year and month
ref.current.jumpTo({ year: 2021, month: 1 })

// Jump to three years later
ref.current.jumpTo(page => ({
  year: page.year + 3,
  month: page.month,
}))
```
