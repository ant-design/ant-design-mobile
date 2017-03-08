---
category: Components
type: Gesture
title: RefreshControl
subtitle: 下拉刷新
---

通过触发，立刻重新加载内容。

### 规则
- 只能和 ListView 结合使用，不能单独使用。
- 可考虑定期自动刷新，eg：登录 APP 后，自动刷新首页 List。


## API (web)

- icon (any) - 刷新指示icon, 包含 `pull` and `release` 状态
- loading (any) - 加载指示器
- distanceToRefresh (number, default: 50 / 2 * (window.devicePixelRatio || 2)) - 刷新距离
- onRefresh (function, required) - 刷新回调函数
- refreshing (boolean, false) - 是否显示刷新状态

`icon`/`loading` API 如何自己设置，参考这里 https://github.com/ant-design/ant-design-mobile/blob/master/components/refresh-control/index.web.tsx#L11

## API (react-native)
见此：https://facebook.github.io/react-native/docs/refreshcontrol.html#props
