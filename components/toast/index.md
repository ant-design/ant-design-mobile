---
category: Components
chinese: 轻提示
type: 展示
english: Toast
---

## 何时使用

在屏幕中间显示通知提醒信息。经常用于以下情况：

- 交互操作后，给用户交互结果的反馈。
- 系统主动推送。

## API

| 成员        | 说明           | 类型        |  可选值       | 默认值       |
|------------|----------------|--------------------|--------------|
| mode       | icon类型        | String |   `success`、`fail`、`loading`、`network`或不写 |  无 |
| duration       | 持续时间        | Number |   数字或不写 |  `3000` |
| afterHide       | 消失后的回调        | Function |  无  |  无 |
