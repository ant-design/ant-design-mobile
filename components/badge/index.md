---
category: Components
type: Components
chinese: 徽标数
english: Badge
---

### 定义／Definition
图标右上角的圆形徽标数字。一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

### 规则 / Rule
- 展示的数字，根据业务需求设定最大值，例如：大于 99 时展示封顶数字值为 99+。
- 展示数字为0时，徽标数隐藏。
- 中间元素可以是数字／字母／汉字，保证两边到边框距离为8px。


## API  

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| text       | 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏     |   String`|`Number   |   -  |
| dot   | 不展示数字，只有一个小红点   |   Boolean    |  false  |
| corner     | 展示位角标样式  | Boolean |  false  |
| overflowCount       | 展示封顶的数字值  | Number | 99|
| size	   | 红点及角标状态下可选默认(null)或者大号(large)  | String	 | - |
