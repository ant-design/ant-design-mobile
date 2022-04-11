# Steps

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Steps

### Props

| Name      | Description                                                                                                                    | Type                         | Default        |
| --------- | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------- |
| current   | The specified current step, counting from 0. In the child Step element, the status can be overridden by the `status` attribute | `number`                     | `0`            |
| direction | The specified direction of the step bar. Currently supports horizontal (`horizontal`) and vertical (`vertical`) two directions | `'horizontal' \| 'vertical'` | `'horizontal'` |

### CSS Variables

| Name                     | Description                                         | Default |
| ------------------------ | --------------------------------------------------- | ------- |
| --title-font-size        | Font size of title.                                 | `13px`  |
| --description-font-size  | Font size of description.                           | `12px`  |
| --indicator-margin-right | The extra space between indicator and text content. | `0`     |
| --icon-size              | Size of the icons in the indicator.                 | `18px`  |

## Steps.Step

### Props

| Name        | Description                                                                                                                                                                                                                                               | Type                                         | Default  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| title       | Title                                                                                                                                                                                                                                                     | `ReactNode`                                  | -        |
| description | Detailed description of the Steps, optional                                                                                                                                                                                                               | `ReactNode`                                  | -        |
| icon        | Type of the Steps icon                                                                                                                                                                                                                                    | `ReactNode`                                  | -        |
| status      | The specified status. When this property is not configured, the `current` of `Steps` would be used to automatically specify the state; if the prop does not match the state specified by `current`, the automatically matched state would be overwritten. | `'wait' \| 'process' \| 'finish' \| 'error'` | `'wait'` |
