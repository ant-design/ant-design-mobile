---
category: Components
type: Components
chinese: 滑动开关
english: Switch
---


### 定义／Definition
开关展示了两个互斥的选项或状态。

### 规则 / Rule
- 显示了一个项存在二元状态；
- 仅在表单视图中可用。


## API

| 成员        | 说明           | 类型     |     可选值        | 默认值       |
|------------|----------------|--------------------|--------------|
| name       | switch的name    | String       |    |     |
| checked    | 是否默认选中    | Boolean      |     |   false  |
| disabled   | 是否不可修改    | Boolean      |     |   false  |
| onChange   | change事件触发的回调函数,参数是checked的值 | Function |  |  无  |
