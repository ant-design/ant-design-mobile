# Input 输入框

Input 组件是布局无关的， 它只包括了最基本的输入框部分，如果你想为它增加边框、标题、或是一些操作按钮，可以配合 List 或 Form 组件使用。

<code src="./demos/index.tsx"></code>

## 属性

| 属性         | 说明                                         | 类型                    | 默认值 |
| ------------ | -------------------------------------------- | ----------------------- | ------ |
| value        | 输入值                                       | string                  | -      |
| defaultValue | 默认值                                       | string                  | -      |
| placeholder  | 提示文本                                     | string                  | -      |
| clearable    | 是否启用清除图标，点击清除图标后会清空输入框 | boolean                 | false  |
| onChange     | 输入框内容变化时触发                         | (value: string) => void | -      |
| onClear      | 点击清除按钮后触发                           | event: Event            | -      |

其他属性和原生 `input` 一致

## CSS 变量

| 属性                | 说明                 | 默认值           |
| ------------------- | -------------------- | ---------------- |
| --font-size         | 字号                 | 17px             |
| --color             | 文字颜色             | --am-color-text  |
| --placeholder-color | placeholder 文字颜色 | --am-color-light |
| --disabled-color    | 禁用状态下的文字颜色 | --am-color-weak  |
