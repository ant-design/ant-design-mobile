---
category: Components
type: Gesture
title: PullToRefresh
subtitle: 拉动刷新
---

通过触发，立刻重新加载内容。

### 规则
- 可以和 `ListView` 结合使用，也可以单独使用。
- 可考虑定期自动刷新, e.g. 登录 APP 后，自动刷新首页 List。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| direction  | 拉动方向，可以是 `up` 或 `down` | String | `down` |
| distanceToRefresh | 刷新距离 | number | 25 |
| refreshing | 是否显示刷新状态 | bool | false |
| onRefresh | 必选, 刷新回调函数 | () => void | - |
| indicator  | 指示器配置 `{ activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }` | Object | - |
| damping | 拉动距离限制, 建议小于 200 | number | 100 |

如果页面使用了对 viewport 进行缩放的高清适配方案，请自行对 distanceToRefresh 进行调整, 例如对 antd-mobile@1.x 高清方案，可设置 `distanceToRefresh = window.devicePixelRatio * 25`

