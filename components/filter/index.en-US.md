---
category: Components
type: Data Display
title: Filter
---

Filter


## API

Support：WEB

Properties | Descrition | Type | Default
----|-----|------|------
| data    |    传入的筛选数据     | `Array<{text, selected, icon, selectedIcon, onClick, className}>`  | [] |

Object Of data：

Properties | Descrition | Type | Default
----|-----|------|------
| text    |   显示文案     | `string or node`  |  |
| selected    |   是否选中     | `boolean`  |  |
| onClick    |   点击事件的回调，入参是被点击的数组元素     | `(e: Object): void`  |  |
| icon(可选)    |   未选中状态的自定义icon     | `url`  |  |
| selectedIcon(可选)    |   已选中状态的自定义icon     | `url`  |  |
| className(可选)    |   定制的className     | `string`  |  |
