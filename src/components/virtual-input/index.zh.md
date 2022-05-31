# VirtualInput 虚拟输入框 <Experimental></Experimental>

与 Input 输入框外观、用法一致。

## 何时使用

需要配合虚拟键盘使用时。

## 示例

<code src="./demos/demo1.tsx"></code>

## VirtualInput

### 属性

| 属性        | 说明                                             | 类型                                            | 默认值  |
| ----------- | ------------------------------------------------ | ----------------------------------------------- | ------- |
| clearable   | 是否启用清除图标，点击清除图标后会清空虚拟输入框 | `boolean`                                       | `false` |
| onBlur      | 失去焦点时触发                                   | `() => void`                                    | -       |
| onClick     | 点击时触发                                       | `(e: React.MouseEvent<HTMLDivElement>) => void` | -       |
| onFocus     | 获得焦点时触发                                   | `() => void`                                    | -       |
| placeholder | 提示文本                                         | `string`                                        | -       |
| value       | 输入值                                           | `string`                                        | `''`    |

严格意义上讲，VirtualInput 并不是一个表单类型的组件，它只是对数据进行展示。

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| blur  | 让输入框失去焦点 | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |

### CSS 变量

| 属性                | 说明                   | 默认值                     | 全局变量                          |
| ------------------- | ---------------------- | -------------------------- | --------------------------------- |
| --caret-color       | 光标颜色               | `var(--adm-color-primary)` | `--adm-virtual-input-caret-color` |
| --caret-width       | 光标宽度               | `2px`                      | `--adm-virtual-input-caret-width` |
| --color             | 文字颜色               | `var(--adm-color-text)`    | -                                 |
| --disabled-color    | 禁用状态下的文字颜色   | `var(--adm-color-weak)`    | -                                 |
| --font-size         | 字号                   | `17px`                     | -                                 |
| --placeholder-color | `placeholder` 文字颜色 | `var(--adm-color-light)`   | -                                 |
| --text-align        | 文字对齐方式           | `left`                     | -                                 |
