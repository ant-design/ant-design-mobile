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

### Tabs

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
prefixCls | prefix class  | string |  rmc-tabs | false
tabs | tabs data | Models.TabData[] |  | true
tabBarPosition | TabBar's position | 'top' \| 'bottom' \| 'left' \| 'right' |  top | false
renderTabBar | replace the TabBar | ((props: TabBarPropsType) => React.ReactNode) \| false |  | false
initialPage | the tab when inital, index or key | number \| string |  | false
page | current tab, index or key | number \| string |  | false
swipeable | Whether to switch tabs with swipe gestrue in the content | boolean |  true | false
useOnPan | use hand scroll | boolean |  true | false
prerenderingSiblingsNumber  | pre-render nearby # sibling, Infinity: render all the siblings, 0: render current page. | number | 1 | false
animated | Whether to change tabs with animation | boolean |  true | false
onChange | Callback when tab is switched | (tab: Models.TabData, index: number) => void |  | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false
destroyInactiveTab | destroy inactive tab | boolean |  false | false
distanceToChangeTab | distance to change tab, width ratio | number |  0.3 | false
usePaged | use paged | boolean |  true | false
tabDirection | tab paging direction | 'horizontal' \| 'vertical' |  horizontal | false
tabBarUnderlineStyle | style of the default tab bar's underline | React.CSSProperties \| any |  | false
tabBarBackgroundColor | color of the default tab bar's background | string |  | false
tabBarActiveTextColor | color of the default tab bar's text when active | string |  | false
tabBarInactiveTextColor | color of the default tab bar's text when inactive | string |  | false
tabBarTextStyle | tional styles to the tab bar's text | React.CSSProperties \| any |  | false
renderTab | render for replace the tab of tabbar | (tab: Models.TabData) => React.ReactNode | | false

### Tabs.DefaultTabBar

Properties | Descrition | Type | Default | Required
-----------|------------|------|--------|--------
goToTab | call this function to switch Tab | (index: number) => boolean | | true
tabs | tabs data | Models.TabData[] | | true
activeTab | current tab | number | | true
animated | Whether to change tabs with animation | boolean | | true
prefixCls | prefix class  | string | am-tabs-default-bar | false
renderTab | render for replace the tab of tabbar | (tab: Models.TabData) => React.ReactNode | | false
page | the size for the tab of tabbar | number | 5 | false
onTabClick  | on tab click | (tab: Models.TabData, index: number) => void |  | false
