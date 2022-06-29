# PickerView

The PickerView series includes three components: [PickerView](#pickerview), [CascadePickerView](#cascadepickerview) and [DatePickerView](#datepickerview).

## PickerView

PickerView is the content area of [Picker](./picker/#picker).

### Demos

<code src="./demos/demo1.tsx"></code>

### Props

| Name           | Description                                                  | Type                                                           | Default                                                                    |
| -------------- | ------------------------------------------------------------ | -------------------------------------------------------------- | -------------------------------------------------------------------------- |
| columns        | Options to configure each column                             | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -                                                                          |
| defaultValue   | Default selected options                                     | `PickerValue[]`                                                | `[]`                                                                       |
| mouseWheel     | Whether to allow interact with mouse wheel                   | `boolean`                                                      | `false`                                                                    |
| onChange       | Triggered when the options are changed                       | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -                                                                          |
| renderLabel    | The function to custom rendering the label shown on a column | `(item: PickerColumnItem) => ReactNode`                        | `(item) => item.label`                                                     |
| value          | Selected options                                             | `PickerValue[]`                                                | -                                                                          |
| loading        | Should the Picker displays as loading state                  | `boolean`                                                      | `false`                                                                    |
| loadingContent | The loading content displayed in loading state               | `ReactNode`                                                    | `provide a default loading content and display the skeleton screen effect` |

For the type definition of `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend`, please refer to the document of [Picker](./picker).

### CSS Variables

| Name             | Description                                               | Default |
| ---------------- | --------------------------------------------------------- | ------- |
| --height         | Height of PickerView.                                     | `240px` |
| --item-font-size | Font size of option items.                                | `16px`  |
| --item-height    | Height of option item. Only supports px rem and vw units. | `34px`  |

## CascadePickerView

CascadePickerView is the content area of [CascadePicker](./picker/#cascadepicker).

### Demos

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

### Demos

<code src="../date-picker-view/demos/demo1.tsx"></code>

<code src="../date-picker-view/demos/demo3.tsx"></code>

<code src="../date-picker-view/demos/demo2.tsx" debug></code>

### Props

| Name           | Description                                                                                                                          | Type                                                                                   | Default                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| defaultValue   | Default selected options                                                                                                             | `Date`                                                                                 | -                                                                          |
| filter         | Filter available time                                                                                                                | `DatePickerFilter`                                                                     | -                                                                          |
| max            | Max value                                                                                                                            | `Date`                                                                                 | ten years later                                                            |
| min            | Minimum value                                                                                                                        | `Date`                                                                                 | ten years ago                                                              |
| mouseWheel     | Whether to allow interact with mouse wheel                                                                                           | `boolean`                                                                              | `false`                                                                    |
| onChange       | Triggered when the options are changed                                                                                               | `(value: Date) => void`                                                                | -                                                                          |
| precision      | Precision                                                                                                                            | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second' \| 'week' \| 'week-day'` | `'day'`                                                                    |
| renderLabel    | The function to custom rendering the label shown on a column. `type` means any value in `precision`, `data` means the default number | `(type: string, data: number) => ReactNode`                                            | -                                                                          |
| value          | Selected options                                                                                                                     | `Date`                                                                                 | -                                                                          |
| loading        | Should the Picker displays as loading state                                                                                          | `boolean`                                                                              | `false`                                                                    |
| loadingContent | The loading content displayed in loading state                                                                                       | `ReactNode`                                                                            | `provide a default loading content and display the skeleton screen effect` |

For the type definition and usage of `DatePickerFilter`, please refer to the document of [DatePicker](./picker#datepicker).

### CSS Variables

Same as `PickerView`.
