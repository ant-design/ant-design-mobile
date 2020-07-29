---
title: 气泡
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

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
| icon   | 图标   | ReactNode |  -   |
| badge  |  徽章  | { dot?: boolean, text?: string | number } |  -   |
