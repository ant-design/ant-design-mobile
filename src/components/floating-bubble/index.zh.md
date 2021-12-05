# FloatingBubble 浮动气泡

<code src="./demos/demo1.tsx"></code>

距离屏幕左/右边距固定，可上下拖动，自定义点击操作，比如跳转新页面等

## 属性

| 属性     | 描述     | 类型      | 默认值 |
| -------- | -------- | --------- | ------ |
| children | 内容区域 | ReactNode | -      |

## CSS 变量

| 变量名                    | 描述                           | 默认值 |
| ------------------------- | ------------------------------ | ------ |
| --initial-position-left   | 初始状态组件距离屏幕左边的距离 | -      |
| --initial-position-right  | 初始状态组件距离屏幕左边的距离 | -      |
| --initial-position-top    | 初始状态组件距离屏幕上边的距离 | -      |
| --initial-position-bottom | 初始状态组件距离屏幕下边的距离 | -      |
| --edge-distance           | 和屏幕四周的最小间距           | `0`    |
| --size                    | 气泡大小                       | `48px` |
| --z-index                 | 气泡的 z-index                 | `1`    |
| --border-radius           | 气泡的 border-radius           | `50%`  |

`--initial-position-top` 和 `--initial-position-bottom` 在使用时必填其中一项
`--initial-position-left` 和 `--initial-position-right` 在使用时必填其中一项，且组件拖拽时会固定这个左/右边距来拖拽
