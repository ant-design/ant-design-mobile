---
category: Components
type: Navigation
title: Drawer
subtitle: 抽屉
---

用于在屏幕边缘显示应用导航等内容的面板。

### 规则

- 是 Android 推荐的导航方式，常见于该平台应用。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| sidebar | 抽屉里的内容 | ReactNode | - |
| onOpenChange | open 状态切换时调用 | (open: bool): void | - |
| open | 开关状态 | Boolean | false |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right', 'top', 'bottom'} |
| sidebarStyle | - | Object | {} |
| contentStyle | - | Object | {} |
| overlayStyle | - | Object | {} |
| dragHandleStyle | - | Object | {} |
| touch | 是否开启触摸手势 | Boolean | true |
| transitions | 是否开启动画 | Boolean | true |
| docked | 是否嵌入到正常文档流里 | Boolean | false |
| enableDragHandle | 是否禁止 dragHandle | Boolean | false |
| dragToggleDistance | 打开关闭抽屉时距 sidebar 的拖动距离 | Number | 30 |
