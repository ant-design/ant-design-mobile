# Input 输入框

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

| 属性        | 说明 | 默认值 |
| ----------- | ---- | ------ |
| --font-size | 字号 | 17px   |
