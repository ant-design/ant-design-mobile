# TextArea 文本域

<code src="./demos/index.tsx"></code>

## 属性

| 属性         | 说明                                            | 类型                                                             | 默认值  |
| ------------ | ----------------------------------------------- | ---------------------------------------------------------------- | ------- |
| value        | 输入值                                          | `string`                                                         | -       |
| defaultValue | 默认值                                          | `string`                                                         | -       |
| onChange     | 文本域内容变化时触发                            | `(value: string) => void`                                        | -       |
| placeholder  | 提示文本                                        | `string`                                                         | -       |
| autoSize     | 自适应内容高度                                  | `boolean \| { minRows?: number, maxRows?: number }`              | `false` |
| rows         | 行数                                            | `number`                                                         | `2`     |
| maxLength    | 最大字符数                                      | `number`                                                         | -       |
| showCount    | 显示字数，支持自定义渲染                        | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | `false` |
| id           | `textarea` 元素的 `id`，常用来配合 `label` 使用 | `string`                                                         | -       |

此外还支持以下原生属性：`autoComplete` `disabled` `readOnly` `onFocus` `onBlur`

## CSS 变量

| 属性                | 说明                   | 默认值                   |
| ------------------- | ---------------------- | ------------------------ |
| --font-size         | 字号                   | `17px`                   |
| --color             | 文字颜色               | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)` |
| --disabled-color    | 禁用状态下的文字颜色   | `var(--adm-color-weak)`  |
