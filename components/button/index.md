---
category: UI Controls
type: UI Controls
chinese: 按钮
english: Button
---

### 定义／Definition
按钮用于标记一个（或封装一组）操作命令，触发相应的业务逻辑命令。

### 规则 / Rule

-	在移动端中，同个页面只有一个主按钮；
-	当页面中有两个及以上按钮时，需要区分主次关系，将主按钮放置于次按钮的右侧；
-	按钮内容为两个字的时候，中间加空格；
-	当按钮有组合出现，以文字的居中对齐


## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 按钮类型，可选值为`primary`/`ghost`/`warning`或者不设     |   string   |   -  |
| htmlType(web)   | 设置`button`原生的`type`值，可选值请参考 HTML标准   |   string    |  button  |
| size       | 设置按钮大小，可选值为`large`、`small`, 在`inline`状态下 small 才会生效  | string | `large`|
| loading(web)	   | 设置按钮载入状态	  | boolean	 | false |
| inline(web)     | 是否是行内按钮   | boolean |   false  |
| disabled   | 是否不可用      | boolean |    false  |
| onClick    | 点击按钮的回调函数 | Function|   无  |
