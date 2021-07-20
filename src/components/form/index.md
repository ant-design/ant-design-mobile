# Form 表单

<code src="./demo/demo1.tsx" />
<code src="./demo/demo2.tsx" />

# API

### Form

| 属性        | 说明             | 类型    | 默认值 |
| ----------- | ---------------- | ------- | ------ |
| hasFeedback | 是否展示错误反馈 | boolean | ture   |

其他参数参见 https://www.npmjs.com/package/rc-field-form

### Form.Item

| 属性        | 说明                       | 类型    | 默认值                                       |
| ----------- | -------------------------- | ------- | -------------------------------------------- |
| label       | 标签名                     | string  | 若未设置则取 name 字段                       |
| help        | 提示文本                   | string  | --                                           |
| required    | 是否必选                   | boolean | false（如有设置 rules，则会根据 rules 判断） |
| disabled    | 是否禁用                   | boolean | false                                        |
| noStyle     | 不使用样式，只使用字段管理 | boolean | false                                        |
| hasFeedback | 是否展示错误反馈           | boolean | ture                                         |
