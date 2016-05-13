---
category: Components
type: Components
chinese: 支付流程
english: Process
display: false
---



列表项

## 如何使用

每个流程需要传入三个参数,分别为type、title、brief

## API

### TabItem
| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| result    |    流程的每一步骤的配置数据对象, 分别为type、title、brief,<br/> type的可选值有`done`、`done_alipay`、`pending`、`pending_alipay`、`fail`,<br/> title、brief的类型为String  | Object |    |
