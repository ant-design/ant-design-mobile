---
category: Components
type: Data Display
title: Filter
subtitle: 筛选
---

筛选

### 规则
- 筛选。


## API

适用平台：WEB

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data    |    传入的筛选数据     | `Array<{text, selected, icon, selectedIcon, onClick, className}>`  | [] |

其中筛选数据元素：

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| text    |   显示文案     | `string or node`  |  |
| selected    |   是否选中     | `boolean`  |  |
| onClick    |   点击时间的回调，入参是整个该对象     | `(e: Object): void`  |  |
| icon(可选)    |   未选中状态的自定义icon     | `url`  |  |
| selectedIcon(可选)    |   已选中状态的自定义icon     | `url`  |  |
| className(可选)    |   定制的className     | `string`  |  |
