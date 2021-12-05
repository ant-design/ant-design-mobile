# Form

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

Customized or third-party form controls can be used in Form, too. Controls must follow these conventions:

> - It has a controlled property `value`.
> - It has event `onChange`.

<code src="./demos/demo4.tsx"></code>

# API

### Form

| Name        | Description                          | Type                         | Default      |
| ----------- | ------------------------------------ | ---------------------------- | ------------ |
| hasFeedback | Whether to show error feedback       | `boolean`                    | `true`       |
| layout      | Layout mode                          | `'vertical' \| 'horizontal'` | `'vertical'` |
| mode        | Support two modes: default and card. | `'default' \| 'card'`        | `'default'`  |

See for other parameters https://www.npmjs.com/package/rc-field-form

### Form.Item

| Name        | Description                          | Type                         | Default                                                               |
| ----------- | ------------------------------------ | ---------------------------- | --------------------------------------------------------------------- |
| label       | Label name                           | `ReactNode`                  | --                                                                    |
| help        | Prompt text                          | `ReactNode`                  | --                                                                    |
| extra       | The right area of the form item.     | `ReactNode`                  | --                                                                    |
| required    | Whether it is required               | `boolean`                    | `false`（if `rules` is set, it would be judged according to `rules`） |
| disabled    | Whether it is disabled               | `boolean`                    | `false`                                                               |
| noStyle     | No styles, only use field management | `boolean`                    | `false`                                                               |
| hidden      | Hide this field                      | `boolean`                    | `false`                                                               |
| layout      | Layout mode                          | `'vertical' \| 'horizontal'` | The `layout` of parent Form                                           |
| hasFeedback | Whether to show error feedback       | `boolean`                    | `true`                                                                |
