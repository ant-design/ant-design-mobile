---
category: Form
type: UI Controls
chinese: 多行输入
english: TextareaItem
---


用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。


## API


| 成员        | 说明           | 类型     |     可选值        | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixListCls    |         | String | |  `am-list`  |
| title    | 文案说明        | String/node |     | '' |
| name    | textarea的name        | String |  |  ''  |
| value    | value值        | String | 是否设置value,决定了该InputItem是否是受控组件,详情请参考https://facebook.github.io/react/docs/forms.html |   无  |
| defaultValue    | 设置初始默认值        | String | |  ''  |
| placeholder      | placeholder        | String |  | ''  |
| editable    | 是否可编辑        | bool | |  true  |
| disabled    | 是否禁用        | bool | |  false  |
| clear      |   是否带清除功能      | bool |   | true  |
| rows      |   显示几行      | number |     | 1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number |  |   |
| onChange    | textarea change事件触发的回调函数,参数是value | Function |   |  |
| onBlur     | textarea blur事件触发的回调函数,参数是value | Function |    | |
| onFocus    | textarea focus事件触发的回调函数,参数是value | Function |   |  |
| error       | 报错样式        | bool | |  false  |
| onErrorClick       | 点击报错icon触发的回调,        | Function | |  无  |
| autoHeight       | 高度自适应, autoHeight和rows请二选一       | bool |  | false  |
| labelNumber        | 标签字数（一个表单页面中,通常有多个InputItem或者TextareaItem,需要统一标签字数以便统一宽度,保持页面整洁、美观）        | number | `2`, `3`, `4`, `5`, `6`, `7`|  `4`  |
