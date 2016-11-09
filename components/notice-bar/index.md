---
category: Basic Components
type: Basic Components
chinese: 通告栏
english: NoticeBar
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 规则
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## API

| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|--------------|
| mode    | 提示类型，可选`closable`,`link`   | String |  ''  |
| type    | 图标类型，可选`success`,`error`,`info`,`question`,`warn`  | String |  ''  |
| onClick    | 点击关闭或者操作区域的回调函数        | function |   |
