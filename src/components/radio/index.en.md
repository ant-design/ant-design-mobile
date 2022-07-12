# Radio

Make a single selection in a set of options.

## When to Use

All options of the radio button are visible by default, which is convenient for users to select in the comparison, so the options should not be too many.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Radio

### Props

```ts | pure
type RadioValue = string | number
```

### Radio

| Name           | Description                                                           | Type                                    | Default |
| -------------- | --------------------------------------------------------------------- | --------------------------------------- | ------- |
| block          | Whether to render as a block-level element                            | `boolean`                               | `false` |
| checked        | To specify whether it is currently selected                           | `boolean`                               | `false` |
| defaultChecked | To specify whether it is currently selected by default                | `boolean`                               | `false` |
| disabled       | Disabled state                                                        | `boolean`                               | `false` |
| icon           | Customized `icon` icon                                                | `(checked: boolean) => React.ReactNode` | -       |
| id             | The id of the input element, often used in conjunction with the label | `string`                                | -       |
| onChange       | Callback function when checked is changed                             | `(val: boolean) => void`                | -       |
| value          | Value is carrying identification, used in `Group` mode                | `RadioValue`                            | -       |

### Radio.Group

| Name         | Description                                 | Type                          | Default |
| ------------ | ------------------------------------------- | ----------------------------- | ------- |
| defaultValue | Option selected by default                  | `RadioValue \| null`          | `null`  |
| disabled     | Disabled for the whole group                | `boolean`                     | `false` |
| onChange     | Callback function when the value is changed | `(value: RadioValue) => void` | -       |
| value        | Specified selected option                   | `RadioValue \| null`          | -       |

### CSS Variables

### Radio

| Name        | Description                                               | Default |
| ----------- | --------------------------------------------------------- | ------- |
| --font-size | Font size of the description label.                       | `17px`  |
| --gap       | The gap between the check icon and the description label. | `8px`   |
| --icon-size | Size of the check icon.                                   | `22px`  |
