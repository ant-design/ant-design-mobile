---
category: Components
type: Navigation
title: Popover
subtitle: 气泡
---

在点击控件或者某个区域后，浮出一个气泡菜单来做更多的操作。
如果设置了遮罩层，建议通过点击遮罩层的任一位置，进行退出。

## API

### Popover

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| visible    | 当前显隐状态    | Boolean |  false   |
| onVisibleChange    | 当显隐状态变化时回调函数    | (visible: bool): void |  -   |
| placement    | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| mask    | 是否显示遮罩背景层    | Boolean |  false  |
| overlay   | 弹出层内容    | ReactNode |  -   |
| onSelect   | 选中某选项时的回调函数    | (node: any, index?: number): void |  -   |

更多 API 可查看 [rmc-tooltip](https://github.com/react-component/m-tooltip#api)

### Popover.Item

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| disabled   | 是否禁用    | Boolean |  false   |
| style  | item 样式    | Object |  -   |
| icon   | icon   | ReactNode |  -   |
