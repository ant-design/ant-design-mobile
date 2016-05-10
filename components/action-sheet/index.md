---
category: Components
chinese: 动作面板
type: 导航
english: ActionSheet
---

## 如何使用
类似 iPhone 的底部弹出菜单


## API

#### static showActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of strings) - 按钮标题列表 (required)
- cancelButtonIndex (int) - 按钮列表中取消按钮的索引位置
- destructiveButtonIndex (int) - 按钮列表中破坏性按钮（一般为删除）的索引位置
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许

#### static showShareActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of `{iconName: 'xx', title: ''}`) - 分享按钮列表 (required)
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许

#### static showActionSheetWithCustom(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- component - 自定义的任何组件
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许

#### static close()

programmatically close.

> 参考 RN API：https://facebook.github.io/react-native/docs/actionsheetios.html#content
