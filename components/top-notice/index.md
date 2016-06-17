---
category: Components
type: Components
chinese: 顶部提示
english: TopNotice
---


### 定义／Definition
一般是系统提醒，活动等通知，需要引起用户关注时使用。

### 规则 / Rule
按需使用



## API

### TabItem
| 成员        | 说明           | 类型      |     可选值    | 默认值       |
|------------|----------------|--------------------|--------------|
| mode    | 提示类型      | String |`closable`、`link`、`''` |  ''  |
| type    | 图标类型        | String | `success`、`error`、`info`、`question`、`warn` 、'' |  ''  |
| onClick    | 点击关闭或者操作区域的回调函数        | function | |    |
