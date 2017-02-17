---
category: Components
type: Navigation
chinese: 分页器
english: Pagination
---

分隔长列表，每次只加载一个页面。

### 规则
- 当加载/渲染所有数据将花费很多时间或者流量时使用

## API ( 适用平台：WEB、React-Native )

| 参数      | 说明                                     | 类型    |默认值 |
|-----------|----------------------------------------|--------|--------|
|  mode  | 形态，可选`button`,`number`,`pointer` | string | `button`  |
|  current  | 当前索引 | number  |  无  |
|  total  | 数据总数 | number  |  0  |
|  simple  | 是否显示数值 | boolean | true  |
|  disabled  | 禁用状态 | boolean | false  |
| locale |  国际化, 可以覆盖全局`LocaleProvider`的配置 | Object：{prevText, nextText} | 无 |
|  onChange | change 事件触发的回调函数 | (e: Object): void | 无 |
