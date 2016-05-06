---
category: Components
chinese: 对话框
type: 展示
english: Modal
---

模态对话框。

## 何时使用

包含了某个特定任务或提醒，用来告知用户关键信息，要求用户作出决定或操作。当页操作弹出展示，可承载：提示、数据收集、信息确认、反馈信息、通知展示…

## API

静态方法 modal(title, message, actions, closable)

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| title        | 标题                      | String 或 React.Element   | 无            |
| message      | 提示信息                  | String                     | 无    |
| actions         | 按钮组, [{text, onPress}]       | Array | 无            |
| closable       | 显示右上角 `x` 关闭及点击 mask 关闭   | Bool | false            |

> 注: title 和 message 两者其一不能为空;



