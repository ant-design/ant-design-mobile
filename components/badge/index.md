---
category: Components
type: Components
chinese: 徽标数
english: Badge
---

## 何时使用  

图标右上角的圆形徽标数字。一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。  


## API  


| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| text       | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏     |   String`|`Number   |   -  |
| dot   | 不展示数字，只有一个小红点   |   Boolean    |  false  |
| corner     | 展示位角标样式  | Boolean |  false  |
| overflowCount       | 展示封顶的数字值  | Number | 99|
| size	   | 红点及角标状态下可选默认(null)或者大号(large)  | String	 | - |
