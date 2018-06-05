---
category: Components
type: Gesture
title: SwipeAction
subtitle: 滑动操作
---

滑动操作组件。

### 定义
结合手势操作，从屏幕一侧唤出操作。

### 规则
1. 一次只可滑动一行列表
2. 点击任意按钮之外处或往回滑动该列表可隐藏操作。

## API

### SwipeAction

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| style           | `swipeout` 样式      | Object |             |
| left       | 左侧按钮组      | Array | `null` |
| right       | 右侧按钮组      | Array | `null` |
| autoClose       | 点击按钮后自动隐藏按钮   | Boolean | `function() {}` |
| onOpen       |    打开时回调函数   | (): void | `function() {}` |
| disabled       |   禁用 `swipeout`    | Boolean | `false` |
| onClose  |  关闭时回调函数    | (): void | `function() {}` |

### Button

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| text       | 按钮文案     | String | `Click` |
| style       | 按钮样式     | Object | `` |
| onPress       | 按钮点击事件     | (): void | `function() {}` |
| className | 按钮样式类 | String | |
