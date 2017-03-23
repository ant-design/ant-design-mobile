---
category: Components
type: Feedback
title: Modal
subtitle: 对话框
---

用作显示系统的重要信息，并请求用户进行操作反馈，eg：删除某个重要内容时，弹出 Modal 进行二次确认。

### 规则
- 尽可能少用。Modal 会打断用户操作，只用在重要的时候。
- 标题应该简明，不能超过 1 行；描述内容应该简明、完整，一般不多于 2 行。
- 操作按钮最多到 3 个（竖排），一般为 1-2 个（横排）；3 个以上建议使用组件 ActionSheet 来完成。
- 一般将用户最可能点击的按钮，放在右侧。另外，取消按钮应当始终放在左侧。


## API

适用平台：WEB、React-Native

### Modal

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| prefixCls (web only)      | 样式类名前缀 |    String   | `am-modal`      |
| visible      | 对话框是否可见 | Boolean          | false           |
| onClose      | 点击 x 或 mask 回调       | (): void   | 无 |
| title (only transparent)       | 标题           | React.Element    | 无           |
| closable    | 是否显示关闭按钮 | Boolean    | `false`        |
| maskClosable (only transparent) | 点击蒙层是否允许关闭 | Boolean   | true       |
| footer  (only not transparent)     | 底部内容       |  Array [{text, onPress}]    | [] |
| transparent | 是否弹窗模式       | Boolean   |  false |
| animationType (`rn only`) | 可选: 'slide-down/up'(transparent 模式下) / 'fade' / 'slide'(仅非 tranparent) | String |   fade |
| style (`web only`) |  样式    | Object | 透明模式下: {width: '286px', height: 'cross'}, <br />非透明模式:  {width: '100%', height: '100%'} (web)|
| platform (`web only`) |  设定组件的平台特有样式, 可选值为 `android`, `ios`， 默认为 `cross`， 即组件会自动检测设备 UA 应用不同平台的样式    | String | `'cross'`|

### Modal.alert(title, message, actions?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title        | 标题                      | String 或 React.Element   | 无            |
| message      | 提示信息                  | String 或 React.Element    | 无    |
| actions         | 按钮组, [{text, onPress, style}]       | Array | 无            |

`Modal.alert(title, message, actions?).close()` 可以在外部关闭 Alert

### Modal.prompt(title, message, callbackOrActions, type?, defaultValue?)

适用平台：WEB

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title        | 标题                      | String 或 React.Element   | 无            |
| message      | 提示信息                  | String 或 React.Element                    | 无    |
| callbackOrActions  | 按钮组 [{text, onPress}] 或回调函数      | Array or Function | 无            |
| type       | prompt 的样式   | String (`default`, `secure-text`, `login-password`)|  `default`  |
| defaultValue       | 默认值(input 为 password 类型不支持)   | String |   -  |

Modal.prompt(title, message, callbackOrActions, type?, defaultValue?).close()` 可以在外部关闭 prompt

### Modal.operation(actions?)

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| actions         | 按钮组, [{text, onPress, style}]       | Array | 无            |

Modal.operation(actions?).close()` 可以在外部关闭 operation
