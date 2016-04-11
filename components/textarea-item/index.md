---
category: Components
chinese: 多行输入
type: 表单
english: TextareaItem
---



表单页面中的文本输入时

## 何时使用



## API


| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| label    | 文案说明        | String |   ''  |
| name    | textarea的name        | String |   ''  |
| value    | textarea的默认值        | String |   ''  |
| placeholder      | placeholder        | String |   ‘’  |
| clear      |   是否带清除功能      | bool |   true  |
| rows      |   显示几行      | number |   1  |
| maxLength      |  最大长度      | number |     |
| onChange    | input change事件触发的回调函数,参数是event对象 | Function |     |
| onBlur     | input blur事件触发的回调函数,参数是event对象 | Function | |
| onFocus    | input focus事件触发的回调函数,参数是event对象 | Function |   |
| error       | 报错样式        | bool |  false  |
| autoHeight       | 高度自适应, autoHeight和rows请二选一       | bool |  false  |
| editable    | 输入框是否可输入        | bool |  true  |