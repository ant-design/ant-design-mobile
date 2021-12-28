# Calendar

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

### Props

| Name          | Description                                                      | Type                                                                                                                 | Default    |
| ------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| selectionMode | The selection mode. Disable selection when this prop is not set. | `'single' \| 'range'`                                                                                                | -          |
| value         | The selected date or date range.                                 | `Date \| null` when selection mode is "single". `[Date, Date] \| null` when selection mode is "range"                | -          |
| defaultValue  | The default selected date or date range.                         | Same as `value` prop.                                                                                                | -          |
| onChange      | Trigger when selected date changes.                              | `(val: Date) => void` when selection mode is "single". `(val: [Date, Date]) => void` when selection mode is "range". | -          |
| weekStartsOn  | Week starts on which day.                                        | `'Monday' \| 'Sunday'`                                                                                               | `'Sunday'` |
| renderLabel   | The label render function.                                       | `(date: Date) => string \| null \| undefined`                                                                        | -          |

### CSS Variables

Not supported yet.
