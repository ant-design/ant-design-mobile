---
category: Components
type: Data Entry
chinese: 多行输入
english: TextareaItem
source: design
---


用于接受多行文本。

### 规则
- 支持通过键盘或者剪切板输入文本。
- 通过光标可以在垂直或者水平方向进行移动。


## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型             | 默认值       |
|------------|----------------|-----------------|--------------|
| title    | 文案说明        | String/node |  '' |
| value    | value 值(受控与否参考https://facebook.github.io/react/docs/forms.html)  | String |  无  |
| defaultValue    | 设置初始默认值        | String |  -  |
| placeholder      | placeholder        | String | ''  |
| editable    | 是否可编辑        | bool |  true  |
| disabled    | 是否禁用        | bool |  false  |
| clear      |   是否带清除功能      | bool |  true  |
| rows      |   显示几行      | number |   1 |
| count      |  计数功能,兼具最大长度,默认为0,代表不开启计数功能      | number | -  |
| onChange    | change 事件触发的回调函数 | (val: string): void |  -  |
| onBlur     | blur 事件触发的回调函数 | (val: string): void |   -  |
| onFocus    | focus 事件触发的回调函数 | (val: string): void |  -  |
| error       | 报错样式        | bool |  false  |
| onErrorClick       | 点击报错 icon 触发的回调   | (): void |  无  |
| autoHeight       | 高度自适应, autoHeight 和 rows 请二选一    | bool  | false  |
| labelNumber   | 标签 label 字数（可选`2`, `3`, `4`, `5`, `6`, `7`） | number | `4`  |
| name (`web only`)    | textarea 的 name       | String |   -  |
| prefixListCls (`web only`)    |   列表 className 前缀      | String |  `am-list`  |

> 更多属性请参考 react-native TextInput (http://facebook.github.io/react-native/docs/textinput.html)
