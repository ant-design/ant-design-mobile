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
| htmlType (`WEB only`)   | 设置`button`原生的`type`值，可选值请参考 HTML标准   |   string    |  button  |
| inline (`WEB only`)     | 是否是行内按钮   | boolean |   false  |
| across (`WEB only`)     | 是否通栏展示  | boolean |   false  |
| loading (`WEB only`)	   | 设置按钮载入状态	  | boolean	 | false |
| icon (`WEB only`)     | icon 名 (注意：loading 设置后此项设置失效)  | string |   -  |
| onPressIn (`RN only`)   | 同 RN TouchableHighlight onPressIn | (e: Object): void |   无  |
| onPressOut (`RN only`)    | 同 RN TouchableHighlight onPressOut | (e: Object): void |   无  |
| onShowUnderlay (`RN only`)    | 同 RN TouchableHighlight onShowUnderlay | (e: Object): void |   无  |
| onHideUnderlay (`RN only`)    | 同 RN TouchableHighlight onHideUnderlay | (e: Object): void |   无  |
