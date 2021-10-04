# Form

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>

# API

### Form

| Name        | Description                    | Type                         | Default      |
| ----------- | ------------------------------ | ---------------------------- | ------------ |
| hasFeedback | whether to show error feedback | `boolean`                    | `true`       |
| layout      | layout mode                    | `'vertical' \| 'horizontal'` | `'vertical'` |

See for other parameters https://www.npmjs.com/package/rc-field-form

### Form.Item

| Name        | Description                          | Type      | Default                                                               |
| ----------- | ------------------------------------ | --------- | --------------------------------------------------------------------- |
| label       | label name                           | `string`  | --                                                                    |
| help        | prompt text                          | `string`  | --                                                                    |
| required    | whether it is required               | `boolean` | `false`（if `rules` is set, it would be judged according to `rules`） |
| disabled    | whether it is disabled               | `boolean` | `false`                                                               |
| noStyle     | no styles, only use field management | `boolean` | `false`                                                               |
| hasFeedback | whether to show error feedback       | `boolean` | `true`                                                                |
