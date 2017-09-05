---
category: Components
type: Navigation
title: Tabs
---


A `Tabs` is used to allow users to switch between different views.

### Rule

- Generally a `Tabs` should have 2-4 tab pane, the title of each tab pane should be concise，normally has 2-4 words..
- In the secondary page of iOS, it is not recommended to use left and right swipe to switch tab, which conflicts with back swipe gestrue in iOS. eg:  tabs in details page.


## API

Support WEB, React-Native.

### Tabs

Properties | Descrition | Type | Default | Optional
-----------|------------|------|--------|--------
prefixCls|prefix class (web only)|string| rmc-tabs|false
tabs|tabs data|Models.TabData[]||true
tabBarPosition|TabBar's position|'top' \| 'bottom' | top |false
renderTabBar|replace the TabBar|(props: TabBarPropsType) => React.ReactNode||false
initalPage|the tab when inital, index or key|number \| string||false
page|current tab, index or key|number \| string||false
swipeable|Whether to switch tabs with swipe gestrue in the content|boolean| true|false
prerenderingSiblingsNumber|pre-render nearby # sibling, Infinity === render all the siblings, default to 0 === render current page.|number| 1|false
animated|Whether to change tabs with animation|boolean| true|false
onChangeTab|Callback when tab will switch|(index: number, tabData: Models.TabData) => void||false
tabBarUnderlineStyle|style of the default tab bar's underline.|React.CSSProperties||false
tabBarBackgroundColor|color of the default tab bar's background|string||false
tabBarActiveTextColor|color of the default tab bar's text when active|string||false
tabBarInactiveTextColor|color of the default tab bar's text when inactive|string||false
tabBarTextStyle|additional styles to the tab bar's text.|React.CSSProperties||false
renderTab|render for replace the tab of tabbar. |(tab: Models.TabData) => React.ReactNode||false

### Tabs.TabPane

Properties | Descrition | Type | Default
-----------|------------|------|--------
goToTab|call this for go to Tab|(index: number) => boolean||true
tabs|tabs data|Models.TabData[]||true
activeTab|current tab|number||true
animated|Whether to change tabs with animation|boolean||true
prefixCls |prefix class (`web only`)|string| am-tabs-default-bar|false
page |the size for the tab of tabbar|number| 5|false