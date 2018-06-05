---
category: Components
type: Data Entry
title: Switch
subtitle: 滑动开关
---

在两个互斥对象进行选择，eg：选择开或关。

### 规则
- 只在 List 中使用。
- 避免增加额外的文案来描述当前 Switch 的值。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| checked    | 是否默认选中    | Boolean       |   false  |
| disabled   | 是否不可修改    | Boolean       |   false  |
| onChange   | change 事件触发的回调函数 | (checked: bool): void |  无  |
| color | 开关打开后的颜色 | String | #4dd865 |
| name | switch 的 name    | String   |      |
| platform |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `ios`  | String | `'ios'`|
| onClick   | click事件触发的回调函数，当switch为disabled时，入参的值始终是默认传入的checked值。 | (checked: bool): void |  无  |
