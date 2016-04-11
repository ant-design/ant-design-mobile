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
| name    | input的name        | String | |  无  |
| value    | input的初始值        | String | |  无  |
| editable    | 输入框是否可输入        | bool | |  true  |
| placeholder      | placeholder        | String |  | 无  |
| maxLength      |  最大长度      | number | |  无  |
| onChange    | input change事件触发的回调函数,参数是event对象 | Function | |  无  |
| onBlur     | input blur事件触发的回调函数,参数是event对象 | Function |  | 无  |
| onFocus    | input focus事件触发的回调函数,参数是event对象 | Function |  | 无  |
| icon      | 右边icon        | Strin | `camera`、`list`、`bill`、`cards`、`calculator`、`scan`、`contacts-alipay`、`contacts-mobile` |  无  |
| onIconClick      | icon点击事件触发的回调函数,参数是event对象 | String |  | 无  |
| error       | 报错样式        | bool | |  false  |
| extra       | 右边注释   | string | |  ''  |
