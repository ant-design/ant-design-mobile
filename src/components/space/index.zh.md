# Space 间距

<code src="./demos/index.tsx"></code>

### 属性

| 属性      | 说明                                   | 类型                                                                             | 默认值         |
| --------- | -------------------------------------- | -------------------------------------------------------------------------------- | -------------- |
| justify   | 主轴对齐方式                           | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly' \| 'stretch'` | -              |
| align     | 交叉轴对齐方式                         | `'start' \| 'end' \| 'center' \| 'baseline'`                                     | -              |
| direction | 间距方向                               | `'vertical' \| 'horizontal'`                                                     | `'horizontal'` |
| wrap      | 是否自动换行，仅在 `horizontal` 时有效 | `boolean`                                                                        | `false`        |
| block     | 是否渲染为块级元素                     | `boolean`                                                                        | `false`        |

### CSS 变量

| 属性             | 说明               | 默认值       |
| ---------------- | ------------------ | ------------ |
| --gap            | 间距大小           | `8px`        |
| --gap-vertical   | 垂直方向的间距大小 | `var(--gap)` |
| --gap-horizontal | 水平方向的间距大小 | `var(--gap)` |
