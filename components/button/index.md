---
category: Basic Components
type: Basic Components
chinese: 按钮
english: Button
---

点击后会触发一个操作。

### 规则
- 同个页面只有一个主按钮。


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设     |   string   |   -  |
| htmlType(web)   | 设置`button`原生的`type`值，可选值请参考 HTML标准   |   string    |  button  |
| size       | 设置按钮大小，可选值为`large`、`small` | string | `large`|
| loading(web)	   | 设置按钮载入状态	  | boolean	 | false |
| inline(web)     | 是否是行内按钮   | boolean |   false  |
| activeStyle  | 禁止(web/rn)点击反馈效果(设为 false)，也可设置为自己的点击 style(web/rn) | false/{} | {} |
| disabled   | 是否不可用      | boolean |    false  |
| onClick    | 点击按钮的回调函数 | Function|   无  |
