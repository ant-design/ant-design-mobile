# Form 表单

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx"></code>

# API

### Form

| 属性        | 说明             | 类型                         | 默认值       |
| ----------- | ---------------- | ---------------------------- | ------------ |
| hasFeedback | 是否展示错误反馈 | `boolean`                    | `true`       |
| layout      | 布局模式         | `'vertical' \| 'horizontal'` | `'vertical'` |

其他参数参见 https://www.npmjs.com/package/rc-field-form

### Form.Item

| 属性        | 说明                       | 类型                         | 默认值                                             |
| ----------- | -------------------------- | ---------------------------- | -------------------------------------------------- |
| label       | 标签名                     | `string`                     | --                                                 |
| help        | 提示文本                   | `string`                     | --                                                 |
| extra       | 表单项右侧区域             | `ReactNode`                  | --                                                 |
| required    | 是否必选                   | `boolean`                    | `false`（如有设置 `rules`，则会根据 `rules` 判断） |
| disabled    | 是否禁用                   | `boolean`                    | `false`                                            |
| noStyle     | 不使用样式，只使用字段管理 | `boolean`                    | `false`                                            |
| hidden      | 是否隐藏整个字段           | `boolean`                    | `false`                                            |
| layout      | 布局模式                   | `'vertical' \| 'horizontal'` | 父级 Form 的 `layout`                              |
| hasFeedback | 是否展示错误反馈           | `boolean`                    | `true`                                             |
