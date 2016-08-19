---
category: UI Views
type: UI Views
chinese: 轻提示
noinstant: true
english: Toast
---


### 定义／Definition
一种轻量级反馈/提示，可以用来显示一些不会打断用户操作的提示，适合用于页面转场、数据交互的等待提示。

### 规则 / Rule

- 当出现此提示时，除返回操作外，其他操作均不可用。
- 当用于加载场景时，超过 10 秒未刷新成功则停止刷新并给出提示反馈；
- toast在页面展示的位置为水平居中、垂直居中。
- 淡入淡出动画各0.4s


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

- `Toast.hide()`
