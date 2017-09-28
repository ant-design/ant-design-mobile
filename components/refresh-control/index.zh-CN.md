---
category: Components
type: Gesture
title: RefreshControl
subtitle: 下拉刷新
---

通过触发，立刻重新加载内容。

### 规则
- 只能和 ListView 结合使用，不能单独使用。
- 可考虑定期自动刷新, e.g. 登录 APP 后，自动刷新首页 List。


## API (web)

> 注意: RefreshControl 会自动使用 ListView 的`useZscroller`(参考 ListView 代码)，所以需要给 ListView 设置固定的高度

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| icon | 刷新指示icon, 包含 `pull` and `release` 状态 | react node | - |
| loading | 加载指示器 | react node | - |
| distanceToRefresh | 刷新距离 | number | `25` |
| onRefresh | 必选, 刷新回调函数 | () => void | - |
| refreshing | 是否显示刷新状态 | bool | false |


如何自己设置`icon`/`loading`，参考https://github.com/ant-design/ant-design-mobile/blob/master/components/refresh-control/index.tsx#L8

如果页面使用了对 viewport 进行缩放的高清适配方案，请自行对 distanceToRefresh 进行调整, 例如对 antd-mobile@1.x 高清方案，可设置 `distanceToRefresh = window.devicePixelRatio * 25`

## API (react-native)
见 https://facebook.github.io/react-native/docs/refreshcontrol.html#props
