# Search 搜索

<code src="./demos/demo1.tsx"></code>

## API

| 属性             | 说明                                         | 类型                    | 默认值 |
| ---------------- | -------------------------------------------- | ----------------------- | ------ |
| value            | 输入值                                       | string                  | -      |
| placeholder      | 提示文本                                     | string                  | -      |
| maxLength        | 输入的最大字符数                             | number \| string        | -      |
| clearable        | 是否启用清除图标，点击清除图标后会清空输入框 | boolean                 | true   |
| showCancelButton | 是否在搜索框右侧显示按钮                     | boolean                 | false  |
| onSearch         | 输入框回车时触发                             | (value: string) => void | -      |
| onChange         | 输入框内容变化时触发                         | (value: string) => void | -      |
| onFocus          | 输入框获得焦点时触发                         | event: Event            | -      |
| onBlur           | 输入框失去焦点时触发                         | event: Event            | -      |
| onClear          | 点击清除按钮后触发                           | event: Event            | -      |
| onCancel         | 点击取消按钮时触发                           | () => void              | -      |

## CSS 变量

| 属性                | 说明                 | 默认值           |
| ------------------- | -------------------- | ---------------- |
| --background        | 背景色               | #f5f5f5          |
| --border-radius     | 圆角                 | 6px              |
| --placeholder-color | placeholder 文字颜色 | --adm-color-weak |
