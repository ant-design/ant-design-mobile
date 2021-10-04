# Steps

<code src="./demos/index.tsx"></code>

## API

| Name      | Description                                                                                                                    | Type                         | Default        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------- |
| current   | the specified current step, counting from 0. In the child Step element, the status can be overridden by the `status` attribute | `number`                     | `0`            |
| direction | the specified direction of the step bar. Currently supports horizontal (`horizontal`) and vertical (`vertical`) two directions | `'horizontal' \| 'vertical'` | `'horizontal'` |

## Steps.Step

| Name        | Description                                                                                                                                                                                                                                               | Type                                         | Default  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| title       | title                                                                                                                                                                                                                                                     | `ReactNode`                                  | -        |
| description | detailed description of the Steps, optional                                                                                                                                                                                                               | `ReactNode`                                  | -        |
| icon        | type of the Steps icon                                                                                                                                                                                                                                    | `ReactNode`                                  | -        |
| status      | the specified status. When this property is not configured, the `current` of `Steps` would be used to automatically specify the state; if the prop does not match the state specified by `current`, the automatically matched state would be overwritten. | `'wait' \| 'process' \| 'finish' \| 'error'` | `'wait'` |
