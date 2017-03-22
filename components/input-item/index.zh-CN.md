---
category: Components
type: Data Entry
title: InputItem
subtitle: 文本输入
---


用于接受单行文本。


### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在水平方向进行移动。
- 对特定格式的文本进行处理，eg：隐藏密码。


## API

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 银行卡`bankCard`,手机号`phone`（此时最大长度固定为11,`maxLength`设置无效）,密码`password`, 数字`number`（尽量唤起数字键盘）  | String |  `text`  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`,`value`设置才生效) | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| extra       | 右边注释   | string or node |  ''  |
| onExtraClick      | extra 点击事件触发的回调函数 | (e: Object): void |  无  |
| labelNumber  | 定宽枚举值：`num * @input-label-width: 34px`，可用`2-7`之间的数字，一般(不能保证全部)能对应显示出相应个数的中文文字(不考虑英文字符) | number | `5` |
| autoFocus   | 页面初始化时Input自动获取光标,每个页面只有一个Input的autpFocus会生效。（不保证所有浏览器都生效） | bool | false  |
| focused   | 页面运行过程中,Input获取光标,当Input获取光标（`focused`更新为true）后，需要在`onFocus`或者`onBlur`时再次将该属性设置为false。 | bool | false  |
| updatePlaceholder (`web only`) | 当清除内容时，是否将清除前的内容替换到 placeholder 中 | bool |  false  |
| prefixListCls (`web only`)    |   列表 className 前缀      | String |  `am-list`  |
| name (`web only`)   | input 的 name        | String |  无  |

> 更多属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)
