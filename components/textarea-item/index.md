---
category: Components
chinese: 多行输入
type: 表单
english: TextareaItem
---



表单页面中的文本输入时

## 何时使用



## API


| 成员        | 说明           | 类型     |     可选值        | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixListCls    |         | String | |  `am-list`  |
| type    |  文本区域样式类型 | String | 线型`hasLine`,有边框`hasBorder`,本期只支持`hasLine` |  `hasLine`  |
| title    | 文案说明        | String/node |     | '' |
| name    | textarea的name        | String |  |  ''  |
| value    | textarea的默认值        | String |  |   ''  |
| placeholder      | placeholder        | String |  | ''  |
| clear      |   是否带清除功能      | bool |   | true  |
| rows      |   显示几行      | number |     | 1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number |  |   |
| onChange    | textarea change事件触发的回调函数,参数是value | Function |   |  |
| onBlur     | textarea blur事件触发的回调函数,参数是value | Function |    | |
| onFocus    | textarea focus事件触发的回调函数,参数是value | Function |   |  |
| error       | 报错样式        | bool | |  false  |
| autoHeight       | 高度自适应, autoHeight和rows请二选一       | bool |  | false  |
| editable    | 输入框是否可输入        | bool | |  true  |