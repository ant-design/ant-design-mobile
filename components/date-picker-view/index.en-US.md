---
category: Components
type: Data Entry
title: DatePickerView
---

DatePickerView's functions like DatePicker, but it is rendered directly in the area instead of the pop-up window.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| mode  | mode value, can be a `date` or `time` or `datetime` or `year` or `month` | String | `date` |
| value | the currently selected value | Date | - |
| minDate   | minimum date | Date  |  2000-1-1  |
| maxDate   | maximum date | Date  |  2030-1-1  |
| use12Hours | 12 hours display mode | Boolean | false |
| minuteStep |   The amount of time, in minutes, between each minute item.    | Number | 1 |
| locale   | international, can override the configuration of the global `[LocaleProvider](https://mobile.ant.design/components/locale-provider)` | Object: {DatePickerLocale: {year, month, day, hour, minute, am?, pm?}, okText, dismissText} |  -  |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange  | change handler | (date: Object): void |  -  |
| onValueChange | fire when picker col change | (vals: any, index: number) => void | - |
