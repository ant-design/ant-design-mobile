---
category: UI Bars
type: UI Bars
chinese: 通告栏
english: NoticeBar
---


在导航栏下方，一般用作系统提醒、活动提醒等通知。


### 规则
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。



## API

### TabItem
| 成员        | 说明           | 类型      |     可选值    | 默认值       |
|------------|----------------|--------------------|--------------|
| mode    | 提示类型      | String |`closable`、`link`、`''` |  ''  |
| type    | 图标类型        | String | `success`、`error`、`info`、`question`、`warn` 、'' |  ''  |
| onClick    | 点击关闭或者操作区域的回调函数        | function | |    |
