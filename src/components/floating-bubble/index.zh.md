# FloatingBubble 浮动气泡 <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

<code src="./demos/demo3.tsx"></code>

### 属性

| 属性     | 描述                                                                                 | 类型                           | 默认值 |
| -------- | ------------------------------------------------------------------------------------ | ------------------------------ | ------ |
| children | 气泡的内容                                                                           | ReactNode                      | -      |
| axis     | 可以进行拖动的方向，`'xy'` 表示自由移动，`'lock'` 表示只允许在拖拽开始时的方向上移动 | `'x' \| 'y' \| 'xy' \| 'lock'` | `'y'`  |
| magnetic | 自动磁吸到边界                                                                       | `'x' \| 'y'`                   | -      |

### CSS 变量

| 变量名                    | 描述                           | 默认值                     |
| ------------------------- | ------------------------------ | -------------------------- |
| --initial-position-left   | 初始状态组件距离屏幕左边的距离 | -                          |
| --initial-position-right  | 初始状态组件距离屏幕左边的距离 | -                          |
| --initial-position-top    | 初始状态组件距离屏幕上边的距离 | -                          |
| --initial-position-bottom | 初始状态组件距离屏幕下边的距离 | -                          |
| --edge-distance           | 和屏幕四周的最小间距           | `0`                        |
| --size                    | 气泡大小                       | `48px`                     |
| --z-index                 | 气泡的 z-index                 | `1`                        |
| --border-radius           | 气泡的 border-radius           | `50%`                      |
| --background              | 气泡的背景色                   | `var(--adm-color-primary)` |

**在使用时，你必须设置 `--initial-position-top` 和 `--initial-position-bottom` 其中的一项，同时，也必须设置 `--initial-position-left` 和 `--initial-position-right` 其中的一项。**
