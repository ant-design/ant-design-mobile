---
category: UI Views
type: UI Views
chinese: 动作面板
english: ActionSheet
---

### 定义／Definition
操作列表展示了与用户触发的操作直接相关的一系列选项。

### 规则 / Rule
- 由用户某个操作行为触发
- 包含两个或以上的按钮

使用操作列表来：

1. 提供完成一项任务的不同方法。
操作列表提供一系列在当前情景下可以完成当前任务的操作，而这样的形式不会永久占用页面UI的空间。
2. 在用户完成一项可能有风险的操作前获得用户的确认。
操作列表让用户有机会停下来充分考虑当前操作可能导致的危险结果，并为他们提供了一些其它的选项。
3. 越靠近列表顶部的操作越容易引起用户注意。潜在风险的操作离列表底部越远，用户在操作的时候就越不容易误点它。使用红色文字来表示可能存在破坏性的操作，且在操作列表的底部使用。
4. 避免让用户滚动操作列表。
如果你的操作列表中存在过多按钮，用户必须要滚动才能看完所有操作。这样的体验是可能让用户不安，因为他们要花更多的时间来充分理解每个选项的区别。此外，用户在滚动的过程中将很有可能误点其它按钮。
5. 分享渠道icon是否出现，由用户手机是否安装对齐APP决定。
6. 当分享渠道过多，可横向滚动查看更多。


## API

#### static showActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of strings) - 按钮标题列表 (required)
- cancelButtonIndex (int) - 按钮列表中取消按钮的索引位置
- destructiveButtonIndex (int) - 按钮列表中破坏性按钮（一般为删除）的索引位置
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- androidActionSheetName (string) - android 平台下可以传入一个名字

#### static showShareActionSheetWithOptions(options: Object, callback: Function)

`options`对象必须包含以下的一个或者多个：

- options (array of `{icon:React.node, iconName:string, title:string}`) - 分享按钮列表 (required)
    - 注意：`iconName`为 icon 组件里的某一个 icon 的名字，优先级高于`icon`属性设置（`icon`属性用于设置自定义内容）
    - options 可以是二维数组，能显示多行按钮，例如`[[{icon,title},{icon,title}], [{icon,title},{icon,title}]]`表示两行两列
    - 当为二维数组时 callback 有两个参数，第一个为`列`序列、第二个为`行`序列
- cancelButtonText (string) - (web only) 默认为`取消`
- title (string) - 顶部标题
- message (string/React.element) - 顶部标题下的简要消息
- maskClosable (bool) - 点击蒙层是否允许关闭，默认允许
- androidActionSheetName (string) - android 平台下可以传入一个名字

#### static close() - (web only) programmatically close.
#### static close(androidActionSheetName) - (android only) programmatically close.
