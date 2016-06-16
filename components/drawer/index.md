---
category: Components
type: Components
chinese: 抽屉
english: Drawer
---

### 定义／Definition
属于次级导航分类，结合手势操作，从屏幕边缘唤出抽屉栏。

可用做侧边菜单、右边抽屉。

### 规则 / Rule
侧边抽屉导航最好不要设计在顶部或者底部，防止和系统的操作冲突。


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| children | 主要内容 | any | n/a |
| sidebarStyle | - | Object | {} |
| contentStyle | - | Object | {} |
| overlayStyle | - | Object | {} |
| dragHandleStyle | - | Object | {} |
| sidebar | 抽屉里的内容 | any | n/a |
| onOpenChange | open 状态切换时调用 | Function | n/a |
| open | 开关状态 | Boolean | false |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right', 'top', 'bottom'} |
| docked | 是否嵌入到正常文档流里 | Boolean | false |
| transitions | 是否开启动画 | Boolean | true |
| touch | 是否开启触摸手势 | Boolean | true |
| dragToggleDistance | 打开关闭抽屉时距sidebar的拖动距离 | Number | 30 |
