# Checkbox

<code src="./demos/index.tsx"></code>

## API

```ts | pure
type CheckboxValue = string | number
```

### Checkbox

| Name           | Description                                                           | Type                                                            | Default |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- | ------- |
| checked        | to specify whether selected or not currently                          | `boolean`                                                       | `false` |
| defaultChecked | selected or not initially                                             | `boolean`                                                       | `false` |
| disabled       | failure state                                                         | `boolean`                                                       | `false` |
| onChange       | callback function when changing                                       | `(val: boolean) => void`                                        | -       |
| value          | the value carrying identification, used in `Group` mode               | `CheckboxValue`                                                 | -       |
| indeterminate  | to set the `indeterminate` state, only responsible for style control  | `boolean`                                                       | `false` |
| block          | whether to render as a block-level element                            | `boolean`                                                       | `false` |
| id             | the id of the input element, often used in conjunction with the label | `string`                                                        | -       |
| icon           | the customized `icon`                                                 | `(checked: boolean, indeterminate: boolean) => React.ReactNode` | -       |

### Checkbox.Group

| Name         | Description                     | Type                               | Default |
| ------------ | ------------------------------- | ---------------------------------- | ------- |
| defaultValue | options selected by default     | `CheckboxValue[]`                  | `[]`    |
| disabled     | to make whole group failure     | `boolean`                          | `false` |
| value        | to specify the selected option  | `CheckboxValue[]`                  | `[]`    |
| onChange     | callback function when changing | `(value: CheckboxValue[]) => void` | -       |
