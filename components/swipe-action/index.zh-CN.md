---
category: Components
type: Gesture
title: SwipeAction
subtitle: 滑动操作
---

滑动操作组件。

### 定义／Definition
结合手势操作，从屏幕唤出删除键。

### 规则 / Rule
1. 一次只可滑动一行列表
2. 点击任意删除按钮之外任意处或往回滑动该列表可撤销该操作。


## API

适用平台：WEB、React-Native

### SwipeAction

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| style           | swipeout style (iOS only)      | Object |             |
| left       | swipeout buttons on left      | Array | `null` |
| right       | swipeout buttons on right      | Array | `null` |
| autoClose       | auto close on button press   | Boolean | `function() {}` |
| onOpen       |    打开时回调函数   | (): void | `function() {}` |
| disabled       |   disabled swipeout    | Boolean | `false` |
| title          |    modal title (`android only`)   | String | `请确认操作` |
| onClose (`web only`)   |  关闭时回调函数    | (): void | `function() {}` |

### Button

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| text       | button text     | String | `Click` |
| style       | button style （iOS only）    | Object | `` |
| onPress       | button press function     | (): void | `function() {}` |
