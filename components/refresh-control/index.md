---
category: Components
type: Components
chinese: 下拉刷新
english: RefreshControl
---

### 定义／Definition
用于需要下拉刷新的场景

### 规则 / Rule
用于需要下拉刷新的场景


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| children   | 内容      | any |    无  |
| icon   | 刷新指示icon   | React element |  `...` |
| loading   | 加载指示器   | React element |  anticon-loading |
| distanceToRefresh   |   刷新距离    | number |    70  |
| resistance   |   阻力系数   | number |    2.5  |
| loadingFunction   |   刷新回调函数   | function, required |  -  |
