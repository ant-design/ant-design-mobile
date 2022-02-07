# Checkbox

<code src="./demos/demo1.tsx"></code>

### Props

```ts | pure
type CheckboxValue = string | number
```

### Checkbox

| Name           | Description                                                           | Type                                                            | Default |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- | ------- |
| checked        | To specify whether selected or not currently                          | `boolean`                                                       | `false` |
| defaultChecked | Selected or not initially                                             | `boolean`                                                       | `false` |
| disabled       | Failure state                                                         | `boolean`                                                       | `false` |
| onChange       | Callback function when changing                                       | `(val: boolean) => void`                                        | -       |
| value          | The value carrying identification, used in `Group` mode               | `CheckboxValue`                                                 | -       |
| indeterminate  | To set the `indeterminate` state, only responsible for style control  | `boolean`                                                       | `false` |
| block          | Whether to render as a block-level element                            | `boolean`                                                       | `false` |
| id             | The id of the input element, often used in conjunction with the label | `string`                                                        | -       |
| icon           | The customized `icon`                                                 | `(checked: boolean, indeterminate: boolean) => React.ReactNode` | -       |

### Checkbox.Group

| Name         | Description                     | Type                               | Default |
| ------------ | ------------------------------- | ---------------------------------- | ------- |
| defaultValue | Options selected by default     | `CheckboxValue[]`                  | `[]`    |
| disabled     | To make whole group failure     | `boolean`                          | `false` |
| value        | To specify the selected option  | `CheckboxValue[]`                  | `[]`    |
| onChange     | Callback function when changing | `(value: CheckboxValue[]) => void` | -       |

### CSS Variables

### Checkbox

| Name        | Description                                               | Default |
| ----------- | --------------------------------------------------------- | ------- |
| --icon-size | Size of the check icon.                                   | `22px`  |
| --font-size | Font size of the description label.                       | `17px`  |
| --gap       | The gap between the check icon and the description label. | `8px`   |
