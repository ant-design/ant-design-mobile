---
category: Components
type: Components
chinese: 列表
english: List
---


列表容器```List```,包含```List```,```List.Header```,```List.Body```,```List.Footer```,```List.Item```。

## 何时使用

## API

### List

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
|无| | | |

### List.Header
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|------------------|--------------|
|无| | | |

### List.Body
| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
|无| | | |

### List.Footer

| 成员        | 说明           | 类型        |   默认值       |
|-------------|----------------|--------------------|--------------|
|无| | | |

### List.Item

| 成员        | 说明           | 类型        |  可选值     | 默认值       |
|------------|----------------|--------------------|--------------|
| needActive  | 点击后是否有active效果  | Boolean |   `true`、`false` | `true` |
| thumb       | 缩略图  | imgsrc |  | 无  |
| extra      | 右边内容        | String/HTML | |  无  |
| arrow      | 箭头方向（右,上,下）,如果是`empty`,则存在对应的dom,但是不显示        | String | `horizontal`、`up`、`down`、`empty`、无 |   无  |
| align    |    Flex 子元素垂直对齐     | String    | `top` `middle` `bottom` | `middle` |
| onClick    | 点击事件的回调函数 | Function |  | 无  |
| error    | 报错样式,右侧文字颜色变成橙色 | Boolean |  `true`、`false` | `false`  |
