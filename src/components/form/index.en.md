# Form

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>

# API

### Form

| Name        | Description                    | Type                         | Default      |
| ----------- | ------------------------------ | ---------------------------- | ------------ |
| hasFeedback | Whether to show error feedback | `boolean`                    | `true`       |
| layout      | Layout mode                    | `'vertical' \| 'horizontal'` | `'vertical'` |
| border      | Is there a border              | `boolean`                    | `true`       |

See for other parameters https://www.npmjs.com/package/rc-field-form

### Form.Item

| Name        | Description                          | Type      | Default                                                               |
| ----------- | ------------------------------------ | --------- | --------------------------------------------------------------------- |
| label       | Label name                           | `string`  | --                                                                    |
| help        | Prompt text                          | `string`  | --                                                                    |
| required    | Whether it is required               | `boolean` | `false`（if `rules` is set, it would be judged according to `rules`） |
| disabled    | Whether it is disabled               | `boolean` | `false`                                                               |
| noStyle     | No styles, only use field management | `boolean` | `false`                                                               |
| hidden      | Hide this field                      | `boolean` | `false`                                                               |
| hasFeedback | Whether to show error feedback       | `boolean` | `true`                                                                |
