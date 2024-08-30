# CalendarPickerView <Experimental></Experimental>

Used to select a date or date range.

CalendarPickerView is the content area of [CalendarPicker](/components/calendar-picker).

## Demos

Only the simplest content area is shown here, and other more usages can be consulted [CalendarPicker](/components/calendar-picker)

<code src="./demos/demo1.tsx"></code>

## CalendarPickerView

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| allowClear | Whether to allow clearing after another click. | `boolean` | `true` |
| defaultValue | The default selected date or date range. | Same as `value` prop. | - |
| max | Maximum value of a selectable range. | `Date` | - |
| min | Minimum value of a selectable range. | `Date` | - | - |
| onChange | Trigger when selected date changes. | `(val: Date \| null) => void` when selection mode is "single". `(val: [Date, Date] \| null) => void` when selection mode is "range". | - |
| renderTop | The top information of date render function. | `((date: Date) => ReactNode \| null \| undefined) \| false` | - | `false`: 5.38.0 |
| renderBottom | The bottom information of date render function. | `((date: Date) => ReactNode \| null \| undefined) \| false` | - | `false`: 5.38.0 |
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
