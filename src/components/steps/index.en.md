# Steps

<code src="./demos/demo1.tsx"></code>

## API

| Name      | Description                                                                                                                    | Type                         | Default        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------- |
| current   | The specified current step, counting from 0. In the child Step element, the status can be overridden by the `status` attribute | `number`                     | `0`            |
| direction | The specified direction of the step bar. Currently supports horizontal (`horizontal`) and vertical (`vertical`) two directions | `'horizontal' \| 'vertical'` | `'horizontal'` |
| size      | The size preset.                                                                                                               | `'small' \| 'large'`         | `'small'`      |

## Steps.Step

| Name        | Description                                                                                                                                                                                                                                               | Type                                         | Default  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| title       | Title                                                                                                                                                                                                                                                     | `ReactNode`                                  | -        |
| description | Detailed description of the Steps, optional                                                                                                                                                                                                               | `ReactNode`                                  | -        |
| icon        | Type of the Steps icon                                                                                                                                                                                                                                    | `ReactNode`                                  | -        |
| status      | The specified status. When this property is not configured, the `current` of `Steps` would be used to automatically specify the state; if the prop does not match the state specified by `current`, the automatically matched state would be overwritten. | `'wait' \| 'process' \| 'finish' \| 'error'` | `'wait'` |
