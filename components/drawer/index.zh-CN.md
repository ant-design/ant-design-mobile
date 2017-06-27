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

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| sidebar | 抽屉里的内容 | ReactNode | - |
| onOpenChange | open 状态切换时调用 | (open: bool): void | - |
| open | 开关状态 | Boolean | false |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right', 'top'(`web only`), 'bottom'(`web only`)} |
| sidebarStyle (`web only`)| - | Object | {} |
| contentStyle (`web only`) | - | Object | {} |
| overlayStyle(`web only`) | - | Object | {} |
| dragHandleStyle(`web only`) | - | Object | {} |
| touch(`web only`) | 是否开启触摸手势 | Boolean | true |
| transitions(`web only`) | 是否开启动画 | Boolean | true |
| docked(`web only`) | 是否嵌入到正常文档流里 | Boolean | false |
| enableDragHandle(`web only`) | 是否禁止 dragHandle | Boolean | false |
| dragToggleDistance(`web only`) | 打开关闭抽屉时距 sidebar 的拖动距离 | Number | 30 |
| drawerWidth (`rn only`) | 抽屉宽度 | Number | 300 |
| drawerBackgroundColor (`rn only`) | 指定抽屉背景色 | String | - |
| openDrawer (`rn only`) | 打开函数 | (): void | - |
| closeDrawer (`rn only`) | 关闭函数 | (): void | - |
