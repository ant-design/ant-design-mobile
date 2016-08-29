---
category: UI Views
type: UI Views
chinese: 对话框
english: Modal
---

### 定义／Definition
对话框通常是包含了某个特定任务或提醒，用来告知用户关键信息，要求用户作出决定或操作。当页操作弹出展示，可承载：提示、数据收集、信息确认、反馈信息、通知展示…

### 规则 / Rule

1. 多个Modal类组件同时被呼起时，会按先后顺序被缓存在队列中，前一个modal关闭后，下一个modal才会打开。
2. 使用对话框时需要慎重考虑，因为其特性具有很强的干扰项。非不得已的情况下可以使用原生控件的下拉或展开方式替代。
3. 应避免对话框里再弹对话框的情况。


## API

### Modal `web & react native`

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| prefixCls (web only)      | 样式类名前缀 | String          | `am-modal`           |
| visible      | 对话框是否可见 | Boolean          | false           |
| onClose      | 点击 x 或 mask 回调       | Function   | 无 |
| onShow      | modal 显示回调       | Function   | 无 |
| animated     | 是否展示动画       | Boolean   | true |

| title (only transparent)       | 标题           | React.Element    | 无           |
| closable (only transparent)    | 是否显示右上角的关闭按钮 | Boolean    | false        |
| maskClosable (only transparent) | 点击蒙层是否允许关闭 | Boolean   | false       |
| footer  (only transparent)     | 底部内容       |  Array [{text, onPress}]    | [] |
| transparent  | 是否显示半透明       | Boolean   |  false |
| style        |  样式              | Object | 透明模式下: {width: '286px', height: 'auto'}, <br />非透明模式:  {width: '100%', height: '100%'} (web)|

### Modal.alert(title, message, actions?) `web only`

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| title        | 标题                      | String 或 React.Element   | 无            |
| message      | 提示信息                  | String 或 React.Element    | 无    |
| actions         | 按钮组, [{text, onPress}]       | Array | 无            |

### Modal.prompt(title?, message?, callbackOrActions, type?) `web only`

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| title        | 标题                      | String 或 React.Element   | 无            |
| message      | 提示信息                  | String 或 React.Element                    | 无    |
| callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数      | Array or Function | 无            |
| type       | prompt 的样式   | String (`default`, `secure-text`, `login-password`)|   `default`          |
