---
category: Form
type: UI Controls
chinese: 滑动开关
english: Switch
---


在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。
- 可调整 Switch 的样式来满足 app 的视觉风格。


## API

| 成员        | 说明           | 类型     |     可选值        | 默认值       |
|------------|----------------|--------------------|--------------|
| name (web only)      | switch的name    | String       |    |     |
| checked    | 是否默认选中    | Boolean      |     |   false  |
| disabled   | 是否不可修改    | Boolean      |     |   false  |
| onChange   | change事件触发的回调函数,参数是checked的值 | Function |  |  无  |
