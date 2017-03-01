---
category: Components
type: Data Entry
chinese: 滑动开关
english: Switch
source: design
---


在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。
- 可调整 Switch 的主体来满足 APP 的视觉风格。


## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|-------------|--------------|
| checked    | 是否默认选中    | Boolean       |   false  |
| disabled   | 是否不可修改    | Boolean       |   false  |
| onChange   | change 事件触发的回调函数 | (checked: bool): void |  无  |
| name(`web only`)  | switch 的 name    | String   |      |
