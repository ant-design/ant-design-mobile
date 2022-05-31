# Steps

A navigation bar that guides the user through a process to complete a task.

## When to Use

When a task is complex or has precedence, break it down into a series of steps to simplify the task.

## Demos

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
| --description-font-size  | Font size of description.                           | `12px`  |
| --icon-size              | Size of the icons in the indicator.                 | `18px`  |
| --indicator-margin-right | The extra space between indicator and text content. | `0`     |
| --title-font-size        | Font size of title.                                 | `13px`  |

## Steps.Step

### Props

| Name        | Description                                                                                                                                                                                                                                               | Type                                         | Default  |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| description | Detailed description of the Steps, optional                                                                                                                                                                                                               | `ReactNode`                                  | -        |
| icon        | Type of the Steps icon                                                                                                                                                                                                                                    | `ReactNode`                                  | -        |
| status      | The specified status. When this property is not configured, the `current` of `Steps` would be used to automatically specify the state; if the prop does not match the state specified by `current`, the automatically matched state would be overwritten. | `'wait' \| 'process' \| 'finish' \| 'error'` | `'wait'` |
| title       | Title                                                                                                                                                                                                                                                     | `ReactNode`                                  | -        |
