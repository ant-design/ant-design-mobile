---
category: Components
type: Feedback
title: ActionSheet
subtitle: 动作面板
---

从底部弹出的模态框，提供和当前场景相关的 2 个以上的操作动作，也支持提供标题和描述。内置固定的展示样式、不支持特别灵活的修改。

### 规则

- 提供清晰的退出按钮。
- 可高亮破坏性操作，e.g. 将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。


## API

适用平台：WEB、React-Native

#### static showActionSheetWithOptions(options: Object, callback: Function)

显示 action sheet，`options`对象必须包含以下的一个或者多个：

- options (array of strings) - 按钮标题列表 (required)
- cancelButtonIndex (int) - 按钮列表中取消按钮的索引位置
- destructiveButtonIndex (int) - 按钮列表中破坏性按钮（一般为删除）的索引位置
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool)(`web only`) - 点击蒙层是否允许关闭，默认允许

`callback`函数支持返回 Promise (`web only`)

#### static showShareActionSheetWithOptions(options: Object, callback: Function) `WEB only`

显示分享 action sheet，`options`对象必须包含以下的一个或者多个：

- options (array of `{icon: ReactNode, title: string}`) - 分享按钮列表 (required)
    - 可以是二维数组，能显示多行按钮，例如`[[{icon,title},...],...]`表示两行两列。当为二维数组时`callback`有两个参数，第一个为`列`序列、第二个为`行`序列。
- cancelButtonText (string)(`web only`) - 取消按钮文案，默认为`取消`
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool)(`web only`) - 点击蒙层是否允许关闭，默认允许

`callback`函数支持返回 Promise (`web only`)

#### static showShareActionSheetWithOptions(options: Object, failureCallback: Function, successCallback: Function)

`React-Native only, react-native@version >= 0.39`

显示分享 action sheet，`options`对象必须包含以下的一个或者多个：

- **options:**
  - message(`string`): 顶部标题下的简要消息
  - title(`string`): 顶部标题
  - url(`string`): 分享的 url `iOS only`
  - excludedActivityTypes(`array`): 指定在actionsheet中不显示的活动 `iOS only`
- **Callback**: (`iOS only`, see [react-native/share](https://github.com/facebook/react-native/blob/master/Libraries/Share/Share.js#L80))
  - failureCallback(error): 分享失败调用；
  - successCallback(completed, method)：分享成功调用;

#### static close() - (web, android only) programmatically close.
