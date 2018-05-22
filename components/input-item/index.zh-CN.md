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

**`InputItem` 必须用 [List](https://mobile.ant.design/components/list) 组件包裹才能正常使用**

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| type    | 可以是银行卡`bankCard`; 手机号`phone`(此时最大长度固定为11,`maxLength`设置无效); 密码`password`; 数字`number`(为了尽量唤起`带小数点`的数字键盘，此类型并不是原生 number，而是`<input type="text" pattern="[0-9]*" />`); `digit`(表示原生的 number 类型); `money`(带小数点的模拟的数字键盘`Web Only`) 以及其他标准 html input type 类型 | String |  `text`  |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |  是否带清除功能(仅`editable`为`true`,`disabled`为`false`才生效) | bool | false  |
| maxLength      |  最大长度      | number |  无  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调函数  | (e: Object): void |  无  |
| extra       | 右边注释   | string or node |  ''  |
| onExtraClick      | extra 点击事件触发的回调函数 | (e: Object): void |  无  |
| onVirtualKeyboardConfirm | 虚拟键盘点击确认时的回调函数 | (val: string): void |  无  |
| labelNumber  | 标签的文字个数，可用`2-7`之间的数字 | number | `5` |
| updatePlaceholder (`web only`) | 当清除内容时，是否将清除前的内容替换到 placeholder 中 | bool |  false  |
| prefixListCls (`web only`)    |   列表 className 前缀      | String |  `am-list`  |
| name (`web only`)   | input 的 name        | String |  无  |
| moneyKeyboardAlign (`web only`)   | 文字排版起始方向, 只有 `type='money'` 支持， 可选为 `'left'`, `'right'`       | String |  'right'  |
| moneyKeyboardWrapProps (`web only`)   | 自定义金额虚拟键盘属性  | Object | {} |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置, 当`type`为`money`，可以自定义确认按钮的文案。 | Object: { confirmLabel } |  无 |

> 更多 react-native `InputItem` 属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)

> 注意: `InputItem` 当 `type=number` 时不支持输入负号, 你可以利用 `type=text` 来自己实现。

## InputItem methods

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| focus    | 使 input 聚焦  | (): void |  -  |
