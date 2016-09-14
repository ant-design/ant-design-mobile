---
category: UI Views
type: UI Views
chinese: 动作面板
english: ActionSheet
---

### 定义／Definition
操作列表展示了与用户触发的操作直接相关的一系列选项。由用户某个操作行为触发。

### 规则 / Rule
- 与 [react-native actionsheetios](https://facebook.github.io/react-native/docs/actionsheetios.html) API 以及 ui 展示尽量一致
- ui 展示比较固定，不推荐使用自定义元素、以免破坏整体风格。
- 分享功能的 ActionSheet ，当分享渠道过多，可横向滚动查看更多。


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

`callback`支持返回 Promise

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

`callback`支持返回 Promise

#### static close() - (web only) programmatically close.
#### static close(androidActionSheetName) - (android only) programmatically close.
