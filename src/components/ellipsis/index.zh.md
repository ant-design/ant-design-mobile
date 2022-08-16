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

## FAQ

### 文本内容包含较长且连续的数字或英文时，不会出现省略怎么办？

`Ellipsis` 组件内部会读取 `word-break` 这个 CSS 属性的值，如果未设置该样式属性的值，默认值为：`normal`。所以，当文本内容中包含大量数字或英文时，文本内容无法省略（浏览器的默认行为）。
此时，如果需要让文本省略生效，可以手动在 `Ellipsis` 组件或其外层元素中，添加 `word-break` 样式（比如，`word-break: break-word`），`Ellipsis` 组件会完全遵循样式继承行为，拿到你设置的 `word-break`，从而实现自动省略。
