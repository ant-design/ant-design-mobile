# Checkbox

Make multiple selections in a set of options.

## When to Use

- When making multiple selections from a set of options.
- Used alone to indicate a switch between two states, similar to switch. The difference is that switching the switch will directly trigger the state change, while the checkbox is generally used for state marking and needs to cooperate with the submit operation.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

## Checkbox

### Props

```ts | pure
type CheckboxValue = string | number
```

| Name           | Description                                                           | Type                                                            | Default |
| -------------- | --------------------------------------------------------------------- | --------------------------------------------------------------- | ------- |
| block          | Whether to render as a block-level element                            | `boolean`                                                       | `false` |
| checked        | To specify whether selected or not currently                          | `boolean`                                                       | `false` |
| defaultChecked | Selected or not initially                                             | `boolean`                                                       | `false` |
| disabled       | Failure state                                                         | `boolean`                                                       | `false` |
| icon           | The customized `icon`                                                 | `(checked: boolean, indeterminate: boolean) => React.ReactNode` | -       |
| id             | The id of the input element, often used in conjunction with the label | `string`                                                        | -       |
| indeterminate  | To set the `indeterminate` state, only responsible for style control  | `boolean`                                                       | `false` |
| onChange       | Callback function when changing                                       | `(val: boolean) => void`                                        | -       |
| value          | The value carrying identification, used in `Group` mode               | `CheckboxValue`                                                 | -       |

### Ref

| Name    | Description                                      | Type         |
| ------- | ------------------------------------------------ | ------------ |
| check   | Trigger the check of the Checkbox                | `() => void` |
| uncheck | Trigger the uncheck of the Checkbox              | `() => void` |
| toggle  | Trigger the checked state toggle of the Checkbox | `() => void` |

### CSS Variables

| Name        | Description                                               | Default |
| ----------- | --------------------------------------------------------- | ------- |
| --font-size | Font size of the description label.                       | `17px`  |
| --gap       | The gap between the check icon and the description label. | `8px`   |
| --icon-size | Size of the check icon.                                   | `22px`  |

## Checkbox.Group

### Props

| Name         | Description                     | Type                               | Default |
| ------------ | ------------------------------- | ---------------------------------- | ------- |
| defaultValue | Options selected by default     | `CheckboxValue[]`                  | `[]`    |
| disabled     | To make whole group failure     | `boolean`                          | `false` |
| onChange     | Callback function when changing | `(value: CheckboxValue[]) => void` | -       |
| value        | To specify the selected option  | `CheckboxValue[]`                  | `[]`    |
