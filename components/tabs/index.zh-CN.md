---
category: Components
type: Navigation
title: Tabs
subtitle: 标签页
---


用于让用户在不同的视图中进行切换。

### 规则
- 标签数量，一般 2-4 个；其中，标签中的文案需要精简，一般 2-4 个字。
- 在 iOS 端的次级页面中，不建议使用左右滑动来切换 Tab，这个和 iOS 的左滑返回存在冲突，eg：详情页中 Tabs。


## API

适用平台：WEB、React-Native

### Tabs

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
prefixCls|样式前缀 (`web only`)|string| am-tabs|false
tabs|tab数据|Models.TabData[]||true
tabBarPosition|TabBar位置 top: 上, bottom: 下|'top' \| 'bottom' | top|false
renderTabBar|替换TabBar|(props: TabBarPropsType) => React.ReactNode||false
initalPage|初始化Tab, index or key|number \| string||false
page|当前Tab, index or key|number \| string||false
swipeable|是否可以滑动内容切换|boolean| true|false
useOnPan|使用跟手滚动|boolean| true|false
prerenderingSiblingsNumber|预加载两侧Tab数量|number| 1|false
animated|是否开启切换动画|boolean| true|false
onChangeTab|tab变化时触发|(index: number, tabData: Models.TabData) => void||false
tabBarUnderlineStyle|tabBar下划线样式|React.CSSProperties||false
tabBarBackgroundColor|tabBar背景色|string||false
tabBarActiveTextColor|tabBar激活Tab文字颜色|string||false
tabBarInactiveTextColor|tabBar非激活Tab文字颜色|string||false
tabBarTextStyle|tabBar文字样式|React.CSSProperties||false
renderTab|替换TabBar的Tab|(tab: Models.TabData) => React.ReactNode||false

### Tabs.DefaultTabBar

属性 | 说明 | 类型 | 默认值 | 必选
----|-----|------|------|------
goToTab|跳转Tab|(index: number) => boolean||true
tabs|tab数据|Models.TabData[]||true
activeTab|当前激活Tab索引|number||true
animated|是否使用动画|boolean||true
prefixCls |样式前缀 (`web only`)|string| am-tabs-default-bar|false
page |Tab分页尺寸|number| 5|false