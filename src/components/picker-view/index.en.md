# PickerView

PickerView is the content area of Picker.

<code src="./demos/basic.tsx"></code>

## API

| Name         | Description                            | Type                                                           | Default |
| ------------ | -------------------------------------- | -------------------------------------------------------------- | ------- |
| columns      | options to configure each column       | `PickerColumn[] \| ((value: PickerValue[]) => PickerColumn[])` | -       |
| value        | selected options                       | `PickerValue[]`                                                | -       |
| defaultValue | default selected options               | `PickerValue[]`                                                | -       |
| onChange     | triggered when the options are changed | `(value: PickerValue[]) => void`                               | -       |

For the type definition of `PickerColumnItem` `PickerColumn` `PickerValue`, please refer to the document of [Picker](./picker).

## CSS Variables

| Name     | Description              | Default |
| -------- | ------------------------ | ------- |
| --height | height of the PickerView | `240px` |
