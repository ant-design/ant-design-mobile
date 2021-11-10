# VirtualInput 虚拟输入框

<code src="./demos/demo1.tsx"></code>

### 属性

| 属性        | 说明           | 类型                                            | 默认值 |
| ----------- | -------------- | ----------------------------------------------- | ------ |
| value       | 输入值         | `string`                                        | `''`   |
| placeholder | 提示文本       | `string`                                        | -      |
| onFocus     | 获得焦点时触发 | `() => void`                                    | -      |
| onBlur      | 失去焦点时触发 | `() => void`                                    | -      |
| onClick     | 点击时触发     | `(e: React.MouseEvent<HTMLDivElement>) => void` | -      |

严格意义上讲，VirtualInput 并不是一个表单类型的组件，它只是对数据进行展示。

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |
