---
category: Components
type: Feedback
title: ActionSheet
---

从底部浮出的模态，提供和当前场景相关的 2 个以上操作或者更多描述内容。

### 规则
- 提供清晰的退出按钮。
- 可高亮破坏性操作，eg：将『删除』处理成红色文本。
- 不要放置过多内容，避免面板纵向滚动。


## API

Support WEB, React-Native.

#### static showActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of strings) - 按钮标题列表 (required)
- cancelButtonIndex (int) - 按钮列表中取消按钮的索引位置
- destructiveButtonIndex (int) - 按钮列表中破坏性按钮（一般为删除）的索引位置
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许 `web only`

`callback`支持返回 Promise `web only` ( for ActionSheetiOS)

#### static showShareActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of `{icon:React.node, iconName:string, title:string}`) - 分享按钮列表 (required)
    - 注意：`iconName`为 icon 组件里的某一个 icon 的名字，优先级高于`icon`属性设置（`icon`属性用于设置自定义内容）
    - options 可以是二维数组，能显示多行按钮，例如`[[{icon,title},{icon,title}], [{icon,title},{icon,title}]]`表示两行两列
    - 当为二维数组时 callback 有两个参数，第一个为`列`序列、第二个为`行`序列
- cancelButtonText (string) - (web only) 默认为`取消`
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许 `web only`

`callback`支持返回 Promise `web only` ( for ActionSheetiOS)

#### static close() - (web、android only) programmatically close.
