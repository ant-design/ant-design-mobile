# DatePickerView

DatePickerView is the content area of DatePicker.

<code src="./demos/basic.tsx"></code>

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
