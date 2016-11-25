---
category: Components
type: Form
chinese: 文本输入
english: InputItem
source: design
---


用于接受单行文本。


### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。


## API


| 成员        | 说明           | 类型             | 默认值       |
|------------|----------------|-----------------|--------------|
| prefixListCls    |   列表 className 前缀      | String |  `am-list`  |
| type    | 银行卡`bankCard`,手机号`phone`（此时最大长度固定为11,`maxLength`设置无效）,密码`password`, 数字`number`（尽量唤起数字键盘）  | String |  `text`  |
| name    | input 的 name        | String |  无  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`,`value`设置才生效) | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| onChange    | change 事件触发的回调函数 | Function(val) |  -  |
| onBlur     | blur 事件触发的回调函数 | Function(val) |   -  |
| onFocus    | focus 事件触发的回调函数 | Function(val) |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | Function |  无  |
| extra       | 右边注释   | string or node |  ''  |
| onExtraClick      | extra 点击事件触发的回调函数 | Function(e) |  无  |
| labelNumber   | 标签 label 字数（可选`2`, `3`, `4`, `5`, `6`, `7`） | number | `4`  |
| updatePlaceholder | 当清除内容时，是否将清除前的内容替换到 placeholder 中 | bool |  false  |
