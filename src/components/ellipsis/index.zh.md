# Ellipsis 文本省略

展示空间不足时，隐去部分内容并用“...”替代。

## 何时使用

- 文本内容长度或高度超过列宽或行高。
- 图表中空间有限，文本内容无法完全显示。
- 自适应调整时宽度变小。

## 示例

<code src="./demos/demo1.tsx"></code>

## Ellipsis

### 属性

| 属性                            | 说明                                 | 类型                            | 默认值  |
| ------------------------------- | ------------------------------------ | ------------------------------- | ------- |
| collapseText                    | 收起操作的文案                       | `string`                        | `''`    |
| content                         | 文本内容                             | `string`                        | -       |
| direction                       | 省略位置                             | `'start' \| 'end' \| 'middle'`  | `'end'` |
| expandText                      | 展开操作的文案                       | `string`                        | `''`    |
| onContentClick                  | 点击文本内容时触发                   | `(e: React.MouseEvent) => void` | -       |
| rows                            | 展示几行                             | `number`                        | `1`     |
| stopPropagationForActionButtons | 阻止展开操作，收起操作引发的事件冒泡 | `PropagationEvent[]`            | `[]`    |
