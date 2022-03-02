# VirtualInput 虚拟输入框 <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性        | 说明                                             | 类型                                            | 默认值  |
| ----------- | ------------------------------------------------ | ----------------------------------------------- | ------- |
| value       | 输入值                                           | `string`                                        | `''`    |
| placeholder | 提示文本                                         | `string`                                        | -       |
| clearable   | 是否启用清除图标，点击清除图标后会清空虚拟输入框 | `boolean`                                       | `false` |
| onFocus     | 获得焦点时触发                                   | `() => void`                                    | -       |
| onBlur      | 失去焦点时触发                                   | `() => void`                                    | -       |
| onClick     | 点击时触发                                       | `(e: React.MouseEvent<HTMLDivElement>) => void` | -       |

严格意义上讲，VirtualInput 并不是一个表单类型的组件，它只是对数据进行展示。

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |

### CSS 变量

| 属性                | 说明                   | 默认值                     | 全局变量                          |
| ------------------- | ---------------------- | -------------------------- | --------------------------------- |
| --font-size         | 字号                   | `17px`                     | -                                 |
| --color             | 文字颜色               | `var(--adm-color-text)`    | -                                 |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)`   | -                                 |
| --disabled-color    | 禁用状态下的文字颜色   | `var(--adm-color-weak)`    | -                                 |
| --text-align        | 文字对齐方式           | `left`                     | -                                 |
| --caret-width       | 光标宽度               | `2px`                      | `--adm-virtual-input-caret-width` |
| --caret-color       | 光标颜色               | `var(--adm-color-primary)` | `--adm-virtual-input-caret-color` |
