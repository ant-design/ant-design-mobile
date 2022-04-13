# PickerView

The PickerView series includes three components: [PickerView](#pickerview), [CascadePickerView](#cascadepickerview) and [DatePickerView](#datepickerview).

## PickerView

PickerView is the content area of [Picker](./picker/#picker).

<code src="./demos/demo1.tsx"></code>

### Props

| Name         | Description                                                  | Type                                                           | Default                |
| ------------ | ------------------------------------------------------------ | -------------------------------------------------------------- | ---------------------- |
| columns      | Options to configure each column                             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -                      |
| value        | Selected options                                             | `PickerValue[]`                                                | -                      |
| defaultValue | Default selected options                                     | `PickerValue[]`                                                | `[]`                   |
| onChange     | Triggered when the options are changed                       | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                      |
| renderLabel  | The function to custom rendering the label shown on a column | `(item: PickerColumnItem) => ReactNode`                        | `(item) => item.label` |
| mouseWheel   | Whether to allow interact with mouse wheel                   | `boolean`                                                      | `false`                |

For the type definition of `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend`, please refer to the document of [Picker](./picker).

### CSS Variables

| Name             | Description                                               | Default |
| ---------------- | --------------------------------------------------------- | ------- |
| --height         | Height of PickerView.                                     | `240px` |
| --item-height    | Height of option item. Only supports px rem and vw units. | `34px`  |
| --item-font-size | Font size of option items.                                | `16px`  |

## CascadePickerView

CascadePickerView is the content area of [CascadePicker](./picker/#cascadepicker).

<code src="../cascade-picker-view/demos/demo1.tsx"></code>

### Props

| Name    | Description              | Type                    | Default |
| ------- | ------------------------ | ----------------------- | ------- |
| options | Data of the tree options | `CascadePickerOption[]` | -       |

For the type definition of `CascadePickerOption`, please refer to the document of [CascadePicker](./picker/#cascadepicker).

Other props are the same as [PickerView](#pickerview), but `columns` are not supported.

### CSS Variables

Same as `PickerView`.

## DatePickerView

DatePickerView is the content area of [DatePicker](./picker/#datepicker).

<code src="../date-picker-view/demos/demo1.tsx"></code>

<code src="../date-picker-view/demos/demo3.tsx"></code>

<code src="../date-picker-view/demos/demo2.tsx" debug></code>

### Props

| Name         | Description                                                                                                                          | Type                                                                                   | Default         |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | --------------- |
| value        | Selected options                                                                                                                     | `Date`                                                                                 | -               |
| defaultValue | Default selected options                                                                                                             | `Date`                                                                                 | -               |
| onChange     | Triggered when the options are changed                                                                                               | `(value: Date) => void`                                                                | -               |
| min          | Minimum value                                                                                                                        | `Date`                                                                                 | ten years ago   |
| max          | Max value                                                                                                                            | `Date`                                                                                 | ten years later |
| precision    | Precision                                                                                                                            | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'`         |
| renderLabel  | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type: string, data: number) => ReactNode`                                            | -               |
| filter       | Filter available time                                                                                                                | `DatePickerFilter`                                                                     | -               |
| mouseWheel   | Whether to allow interact with mouse wheel                                                                                           | `boolean`                                                                              | `false`         |

For the type definition and usage of `DatePickerFilter`, please refer to the document of [DatePicker](./picker#datepicker).

### CSS Variables

Same as `PickerView`.
