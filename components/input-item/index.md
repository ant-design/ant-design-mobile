---
category: Components
chinese: 文本输入
type: 表单
english: InputItem
---



表单页面中的文本输入时

## 何时使用


## API


| 成员        | 说明           | 类型     |     可选值        | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixCls    |      | String | |  `am-input`  |
| prefixListCls    |         | String | |  `am-list`  |
| style    |         | object | | {}  |
| type    |  文本框样式类型 | String | 线型`hasLine`,有边框`hasBorder`,本期只支持`hasLine` |  `hasLine`  |
| format    |  格式  | String | 银行卡输入`bankCard`,手机号输入`phone`（此时最大长度固定为11,`maxLength`设置无效）,密码输入`password`,文本输入`text` |  `text`  |
| editable    | 输入框是否可输入        | bool | |  true  |
| name    | input的name        | String | |  无  |
| value    | input的初始值        | String | |  无  |
| placeholder      | placeholder        | String |  | 无  |
| clear      |  是否出现清除icon | bool |  | false  |
| maxLength      |  最大长度      | number | |  无  |
| onChange    | input change事件触发的回调函数,参数是value | Function | |  无  |
| onBlur     | input blur事件触发的回调函数,参数是value | Function |  | 无  |
| onFocus    | input focus事件触发的回调函数,参数是value | Function |  | 无  |
| extra       | 右边注释   | string or node | |  ''  |
| onExtraClick      | extra点击事件触发的回调函数,参数是event对象 | String |  | 无  |
| error       | 报错样式        | bool | |  false  |
| size(本期不实现)       | 尺寸        | string | `large`,`small` |  `large`  |
| labelPosition(本期不实现)        | 标题方向        | string | `left`,`top` |  `left`  |
| textAlign(本期不实现)        | 文本对齐        | string | `left`,`center` |  `left`  |