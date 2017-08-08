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

Properties | Descrition | Type | Default
-----------|------------|------|--------
| activeKey        | Current TabPane's key                      | String   | 无            |
| defaultActiveKey | Default actived tabPanel's key, if activeKey is not set. | String   | first pane    |
| onChange         | Callback when tab is switched                        | (key: string): void | 无            |
| onTabClick       | Callback when tab is clicked                      | (key: string): void | 无            |
| animated |  Whether to change tabs with animation,    |  boolean   |    `true`    |
| swipeable | Whether to switch tabs with swipe gestrue in the content   |  boolean   |    `true`    |
| tabBarPosition |    Position of tabs. Options: top and bottom       |  string    |    `top`        |
| underlineColor(`react-native only`) |   Underline color of `Tabs`    |  string    |    `#ddd`        |
| activeUnderlineColor(`react-native only`) | Underline color of active tabPane   |  string    |    `#108ee9`        |
| textColor(`react-native only`) |  color of text      |  string    |    `#000`        |
| activeTextColor(`react-native only`) | color of text for active tabPanel       |  string    |    `#108ee9`        |
| barStyle (`react-native only`) |   style for tab's bar       |  object    |    `{}`        |
| destroyInactiveTabPane (`Web Only`) | Whether to destroy the inactive tabPane (for optimization) |  boolean    |    false   |
| hammerOptions(`Web Only`) |  The options of [pan](http://hammerjs.github.io/recognizer-pan/) and [swipe](http://hammerjs.github.io/recognizer-swipe/) gestrue in [hammerjs](http://hammerjs.github.io/) can be customized if `swipeable` is `true`    |  object   |    {}   |
| prefixCls(`web only`) |  prefix className    |  string    |    `am-tabs`        |
| className(`web only`) |  className  for `Tabs`    |  string    |    无        |
| pageSize(`web only`) |  The number of tab panes in the visible area, it can be seen as one page     |  number    |    5       |
| speed(`web only`) |   The scroll speed of `TabBar` in multiple page mode       |  Number: 1 ~ 10    |    8        |
| tabBarhammerOptions(`web only`) | same as `hammerOptions` which is used to custom swipe gestrue of `TabBar`|  Obejct  |  {}   |

### Tabs.TabPane

Properties | Descrition | Type | Default
-----------|------------|------|--------
| key  | TabPane's key   | String                  |      |
| tab  | Show text in TabPane's head | React.Element or String |      |
