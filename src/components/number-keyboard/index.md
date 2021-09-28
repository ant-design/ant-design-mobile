# NumberKeyboard 数字键盘

H5 数字键盘，可以配合密码输入框组件或自定义的输入框组件使用

<code src="./demos/index.tsx"></code>

## 属性

| 属性            | 说明                                          | 类型                             | 默认值        |
| --------------- | --------------------------------------------- | -------------------------------- | ------------- |
| visible         | 是否展示                                      | boolean                          | -             |
| title           | 键盘标题                                      | string                           | -             |
| getContainer    | 挂载节点                                      | HTMLElement \| () => HTMLElement | document.body |
| confirmText     | 完成按钮文案，false 不展示                    | string \| false                  | false         |
| customKey       | 自定义按钮                                    | '-' \| '.' \| 'X'                | -             |
| randomOrder     | 是否乱序键盘                                  | boolean                          | false         |
| showCloseButton | 是否展示收起键盘箭头                          | boolean                          | true          |
| onInput         | 输入内容回调                                  | (v: string) => void              | -             |
| onDelete        | 删除内容回调                                  | () => void                       | -             |
| onClose         | 点击关闭时触发，当点击“完成”返回 done 为 true | (done: boolean) => boolean       | -             |
| onBlur          | 点击键盘以外回调                              | () => void                       | -             |
| afterShow       | 键盘完全弹出回调                              | () => void                       | -             |
| afterClose      | 键盘完全收起回调                              | () => void                       | -             |

<Alert type="info">
  注意：点击键盘外层键盘会收起，可通过阻止元素 click 事件冒泡，阻止键盘收起；
</Alert>

## CSS 变量

| 属性                | 说明                 | 默认值           |
| ------------------- | -------------------- | ---------------- |
| --font-size         | 字号                 | 17px             |
| --color             | 文字颜色             | --am-color-text  |
| --placeholder-color | placeholder 文字颜色 | --am-color-light |
| --disabled-color    | 禁用状态下的文字颜色 | --am-color-weak  |
