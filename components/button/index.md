---
category: Components
type: Data Entry
chinese: 按钮
english: Button
source: design
---

点击后会触发一个操作。

### 规则
- 同个页面只有一个主按钮。


## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设     |   string   |   -  |
| size       | 设置按钮大小，可选值为`large`、`small` | string | `large`|
| activeStyle  | 禁止点击反馈效果(设为 false)，也可设置为自己的点击 style | false/{} | {} |
| disabled   | 是否不可用      | boolean |    false  |
| onClick    | 点击按钮的回调函数 | (e: Object): void |   无  |
| style    | 自定义样式(对于React是个JSON，对于RN则可以是JSON或者Array) |   Object  | 无 |
| inline (`WEB only`)     | 是否是行内按钮   | boolean |   false  |
| across (`WEB only`)     | 是否通栏展示  | boolean |   false  |
| loading (`WEB only`)	   | 设置按钮载入状态	  | boolean	 | false |
| icon (`WEB only`)  | 可以是 Icon 组件里包含的 icon 的名字，也可以是 require 本地 svg 图标 (注意：loading 设置后此项设置失效) | string/require(./local.svg) | -  |
| prefixCls (`WEB only`) |  class前缀 | string | `am-button` |
| className (`WEB only`) |  样式类名 | string | 无 |
| onPressIn (`RN only`)   | 同 RN TouchableHighlight onPressIn | (e: Object): void |   无  |
| onPressOut (`RN only`)    | 同 RN TouchableHighlight onPressOut | (e: Object): void |   无  |
| onShowUnderlay (`RN only`)    | 同 RN TouchableHighlight onShowUnderlay | (e: Object): void |   无  |
| onHideUnderlay (`RN only`)    | 同 RN TouchableHighlight onHideUnderlay | (e: Object): void |   无  |
