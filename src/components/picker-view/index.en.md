# PickerView

The PickerView series includes three components: [PickerView](#pickerview), [CascadePickerView](#cascadepickerview) and [DatePickerView](#datepickerview).

# PickerView

PickerView is the content area of [Picker](./picker/#picker).

<code src="./demos/index.tsx"></code>

## API

| Name         | Description                            | Type                                                           | Default |
| ------------ | -------------------------------------- | -------------------------------------------------------------- | ------- |
| columns      | Options to configure each column       | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -       |
| value        | Selected options                       | `PickerValue[]`                                                | -       |
| defaultValue | Default selected options               | `PickerValue[]`                                                | -       |
| onChange     | Triggered when the options are changed | `(value: PickerValue[], extend: PickerValueExtend) => void`    | -       |

For the type definition of `PickerColumnItem` `PickerColumn` `PickerValue` `PickerValueExtend`, please refer to the document of [Picker](./picker).

## CSS Variables

| Name     | Description              | Default |
| -------- | ------------------------ | ------- |
| --height | height of the PickerView | `240px` |

# DatePickerView

DatePickerView is the content area of [DatePicker](./picker/#datepicker).

<code src="../date-picker-view/demos/index.tsx"></code>

## API

| Name         | Description                            | Type                                                           | Default         |
| ------------ | -------------------------------------- | -------------------------------------------------------------- | --------------- |
| value        | Selected options                       | `Date`                                                         | -               |
| defaultValue | Default selected options               | `Date`                                                         | -               |
| onChange     | Triggered when the options are changed | `(value: Date) => void`                                        | -               |
| min          | Minimum value                          | `Date`                                                         | ten years age   |
| max          | Max value                              | `Date`                                                         | ten years later |
| precision    | Precision                              | `'year' \| 'month' \| 'day' \| 'hour' \| 'minute' \| 'second'` | `'day'`         |

## CSS Variables

| Name     | Description                  | Default |
| -------- | ---------------------------- | ------- |
| --height | height of the DatePickerView | `240px` |
