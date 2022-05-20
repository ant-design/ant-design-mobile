# NumberKeyboard 数字键盘 <Experimental></Experimental>

数字键盘面板。

## 何时使用

适用于输入数字内容时。

可以配合密码输入框组件或自定义的输入框组件使用。

如果情况允许的话，我们更推荐使用系统或客户端提供的原生键盘。虚拟数字键盘只是一些特殊的场景下的补充。

<code src="./demos/demo1.tsx"></code>

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

## FAQ

### 数字键盘是否支持自动从短信中读取验证码？

不支持。
