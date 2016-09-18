---
category: UI Views
type: UI Views
chinese: 抽屉
english: Drawer
---


从左侧滑出的模态，包含各种导航分类。

### 规则
- 是 Android 推荐的导航方式，常见于该平台应用。


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| sidebarStyle(web) | - | Object | {} |
| contentStyle(web) | - | Object | {} |
| overlayStyle(web) | - | Object | {} |
| dragHandleStyle(web) | - | Object | {} |
| touch(web) | 是否开启触摸手势 | Boolean | true |
| transitions(web) | 是否开启动画 | Boolean | true |
| docked(web) | 是否嵌入到正常文档流里 | Boolean | false |
| dragToggleDistance(web) | 打开关闭抽屉时距sidebar的拖动距离 | Number | 30 |
| open(web) | 开关状态 | Boolean | false |
| children | 主要内容 | any | n/a |
| sidebar | 抽屉里的内容 | any | n/a |
| onOpenChange | open 状态切换时调用 | Function | n/a |
| position | 抽屉所在位置 | String | 'left', enum{'left', 'right', 'top'(web), 'bottom'(web)} |
| drawerWidth(ios/android) | 抽屉宽度 | Number | 300 |
| drawerBackgroundColor(ios/android) | 指定抽屉背景色 | String | - |
| openDrawer(ios/android) | 打开drawer | Function | n/a |
| closeDrawer(ios/android) | 关闭drawer | Function | n/a |
