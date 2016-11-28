---
category: Components
type: Data Display
chinese: 通告栏
english: NoticeBar
source: design
---

在导航栏下方，一般用作系统提醒、活动提醒等通知。

### 规则
- 需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast。

## API

| 成员        | 说明           | 类型         | 默认值       |
|------------|----------------|--------------|
| mode    | 提示类型，可选`closable`,`link`   | String |  ''  |
| icon    |  notice 前的图标  |  React.Element | `<Icon type={require('./trips.svg')} size="xxs" />`|
| onClick    | 点击关闭或者操作区域的回调函数        | function |   |
