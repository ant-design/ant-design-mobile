---
category: APIS
type: APIS
chinese: 轻提示
noinstant: true
english: Toast
---

全局展示反馈信息。

## 何时使用

在屏幕中间显示通知提醒信息。经常用于以下情况：

- 交互操作后，给用户交互结果的反馈。
- 系统主动推送。

## API

- `Toast.success(content, duration, onClose)`
- `Toast.fail(content, duration, onClose)`
- `Toast.info(content, duration, onClose)`
- `Toast.loading(content, duration, onClose)`
- `Toast.offline(content, duration, onClose)`

组件提供了五个静态方法，参数如下：

| 参数       | 说明           | 类型                       | 默认值       |
|------------|----------------|----------------------------|--------------|
| content    | 提示内容       | React.Element or String    | 无           |
| duration   | 自动关闭的延时，单位秒 | number                 | 3          |
| onClose    | 关闭后回调 |  Function                 | 无          |


还提供了全局配置和全局销毁方法：

- `Toast.destroy()`
