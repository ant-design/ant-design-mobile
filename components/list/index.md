---
category: UI Views
type: UI Views
chinese: 列表
english: List
---


单个连续模块垂直排列，显示当前的内容、状态和可进行的操作。eg：联系人列表。

### 规则
- 一般由主要信息、主要操作、次要信息、次要操作组成。
- 主要信息和主要操作放在列表的左边，次要信息和次要操作放在列表的右边。


## API

### List

| 成员        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| renderHeader       | list heder  | Function |  无  |
| renderFooter       | list footer  | Function |  无  |

### List.Item

| 成员        | 说明           | 类型        |  可选值     | 默认值       |
|------------|----------------|--------------------|--------------|
| thumb       | 缩略图  | imgsrc |  | 无  |
| extra      | 右边内容        | String/HTML | |  无  |
| arrow      | 箭头方向（右,上,下）,如果是`empty`,则存在对应的dom,但是不显示        | String | `horizontal`、`up`、`down`、`empty`、无 |   无  |
| align    |    Flex 子元素垂直对齐     | String    | `top` `middle` `bottom` | `middle` |
| onClick    | 点击事件的回调函数 | Function |  | 无  |
| error    | 报错样式,右侧文字颜色变成橙色 | Boolean |  `true`、`false` | `false`  |
| multipleLine    | 多行 | Boolean |  `true`、`false` | `false`  |
| wrap    | 是否换行，默认情况下，文字超长会被隐藏， | Boolean |  `true`、`false` | `false`  |

### List.Item.Brief

辅助说明

