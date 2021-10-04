# Radio

<code src="./demos/index.tsx"></code>

## API

```ts | pure
type RadioValue = string | number
```

### Radio

| Name           | Description                                                           | Type                                    | Default |
| -------------- | --------------------------------------------------------------------- | --------------------------------------- | ------- |
| checked        | to specify whether it is currently selected                           | `boolean`                               | `false` |
| defaultChecked | to specify whether it is currently selected by default                | `boolean`                               | `false` |
| disabled       | diabled state                                                         | `boolean`                               | `false` |
| onChange       | callback function when checked is changed                             | `(val: boolean) => void`                | -       |
| value          | value is carrying identification, used in `Group` mode                | `RadioValue`                            | -       |
| block          | whether to render as a block-level element                            | `boolean`                               | `false` |
| id             | The id of the input element, often used in conjunction with the label | `string`                                | -       |
| icon           | customized `icon` icon                                                | `(checked: boolean) => React.ReactNode` | -       |

### Radio.Group

| Name         | Description                                 | Type                          | Default |
| ------------ | ------------------------------------------- | ----------------------------- | ------- |
| defaultValue | option selected by default                  | `RadioValue`                  | -       |
| disabled     | disabled for the whole group                | `boolean`                     | `false` |
| value        | specified selected option                   | `RadioValue`                  | -       |
| onChange     | callback function when the value is changed | `(value: RadioValue) => void` | -       |
