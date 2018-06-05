---
category: Components
type: Data Display
title: Badge
subtitle: 徽标数
---

图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。

### 规则

- 当用户只需知道大致有内容更新时，应该使用红点型，如：社交中的群消息通知。
- 当用户有必要知晓每条更新时，应该使用数字型。如：社交中的一对一的消息通知。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
size | 大小，可选 `large` `small` | string | `small`
text | 展示的数字或文案，当为数字时候，大于 overflowCount <br/> 时显示为 ${overflowCount}+，为 0 时隐藏 | string\|number | -
corner | 置于角落 | boolean | `false`
dot | 不展示数字，只有一个小红点 | boolean | `false`
overflowCount | 展示封顶的数字值 | number | `99`
hot | 营销样式 | boolean | `false`
