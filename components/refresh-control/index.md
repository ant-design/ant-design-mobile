---
category: Components
type: Others
chinese: 下拉刷新
english: RefreshControl
---

通过触发，立刻重新加载内容。

### 规则
- 只能和 ListView 结合使用，不能单独使用。
- 可考虑定期自动刷新，eg：登录 app 后，自动刷新首页 List。


## API (web)

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| children   | 内容      | any |    无  |
| className | 容器className | String | - |
| style | 容器style | object | - |
| icon   | 刷新指示icon   | React element |  `...` |
| loading   | 加载指示器   | React element |  anticon-loading |
| distanceToRefresh   |   刷新距离    | number |    50  |
| onRefresh   |   刷新回调函数   | function, required |  -  |
| refreshing   | 是否显示刷新状态    | boolean |    false  |

## API (ios/android)
见此：https://facebook.github.io/react-native/docs/refreshcontrol.html#props
