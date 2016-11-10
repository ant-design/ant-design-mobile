---
category: Components
type: Form
chinese: 多行输入
english: TextareaItem
---


用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。


## API


| 成员        | 说明           | 类型             | 默认值       |
|------------|----------------|-----------------|--------------|
| prefixListCls    |   列表 className 前缀      | String |  `am-list`  |
| title    | 文案说明        | String/node |  '' |
| name    | textarea的name       | String |   -  |
| value    | value值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |   是否带清除功能      | bool |  true  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change事件触发的回调函数 | Function(val) |  -  |
| onBlur     | blur事件触发的回调函数 | Function(val) |   -  |
| onFocus    | focus事件触发的回调函数 | Function(val) |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错icon触发的回调   | Function |  无  |
| autoHeight       | 高度自适应, autoHeight和rows请二选一    | bool  | false  |
| labelNumber   | 标签label字数（可选`2`, `3`, `4`, `5`, `6`, `7`） | number | `4`  |
