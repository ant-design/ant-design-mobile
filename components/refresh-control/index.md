---
category: Components
type: Others
chinese: 下拉刷新
english: RefreshControl
source: design
---

通过触发，立刻重新加载内容。

### 规则
- 只能和 ListView 结合使用，不能单独使用。
- 可考虑定期自动刷新，eg：登录 app 后，自动刷新首页 List。


## API (web)

- icon (React.Element) - 刷新指示icon, 包含 `pull` and `release` 状态
- loading (React.Element) - 加载指示器
- distanceToRefresh (number, default 50) - 刷新距离
- onRefresh (function, required) - 刷新回调函数
- refreshing (boolean, false) - 是否显示刷新状态

## API (ios/android)
见此：https://facebook.github.io/react-native/docs/refreshcontrol.html#props
