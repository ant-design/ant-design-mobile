# TextArea 文本域

<code src="./demos/index.tsx" />

# API

| 属性         | 说明                 | 类型                    | 默认值 |
| ------------ | -------------------- | ----------------------- | ------ |
| value        | 输入值               | string                  | -      |
| defaultValue | 默认值               | string                  | -      |
| onChange     | 文本域内容变化时触发 | (value: string) => void | -      |
| placeholder  | 提示文本             | string                  | -      |
| rows         | 行数                 | number                  | 2      |
| maxLength    | 最大字符数           | number                  | -      |
| showCount    | 是否显示字数         | boolean                 | false  |

其他属性和原生 `textarea` 一致
