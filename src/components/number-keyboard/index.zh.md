# NumberKeyboard 数字键盘

H5 数字键盘，可以配合密码输入框组件或自定义的输入框组件使用

<code src="./demos/index.tsx"></code>

### 属性

| 属性            | 说明                                                                      | 类型                                       | 默认值                |
| --------------- | ------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| visible         | 是否展示                                                                  | `boolean`                                  | -                     |
| title           | 键盘标题                                                                  | `string`                                   | -                     |
| getContainer    | 指定挂载的 HTML 节点，默认为 `body`，如果为 `null` 的话，会渲染到当前节点 | `HTMLElement \| () => HTMLElement \| null` | `() => document.body` |
| confirmText     | 完成按钮文案，`null` 不展示                                               | `string \| null`                           | `null`                |
| customKey       | 自定义按钮                                                                | `'-' \| '.' \| 'X'`                        | -                     |
| randomOrder     | 是否乱序键盘                                                              | `boolean`                                  | `false`               |
| showCloseButton | 是否展示收起键盘箭头                                                      | `boolean`                                  | `true`                |
| onInput         | 输入内容回调                                                              | `(v: string) => void`                      | -                     |
| onDelete        | 删除内容回调                                                              | `() => void`                               | -                     |
| onClose         | 点击关闭时触发                                                            | `() => void`                               | -                     |
| onConfirm       | 点击确定按钮时触发                                                        | `() => void`                               | -                     |
| afterShow       | 键盘完全弹出回调                                                          | `() => void`                               | -                     |
| afterClose      | 键盘完全收起回调                                                          | `() => void`                               | -                     |
| closeOnConfirm  | 是否在点击确定按钮时自动关闭                                              | `boolean`                                  | `true`                |
| safeArea        | 是否开启安全区适配                                                        | `boolean`                                  | `true`                |

此外还支持 [Popup](./popup) 的以下属性: `stopPropagation`

### CSS 变量

| 属性                   | 说明               | 默认值 |
| ---------------------- | ------------------ | ------ |
| --adm-z-index-keyboard | 键盘浮层的 z-index | 1050   |
