---
category: Components
type: Data Entry
title: InputItem
---

A foundational component for inputting text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.
- Handle text with a specific format, eg: hide password.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| type    | the type of `InputItem` which is one of `bankCard`, `phone`(which the maxLength is 11 and setting will be ignored), `password`, `number`, （ antd-mobile will try to open the number keyboard, but web browser can not open number keyboard with decimal support we suggest one need decimal number support use text input and onChange to custom it.）, `money`(with decimal,`Web Only`),   `text`  | String |  `text`  |
| value | the value of input (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing. | String |  -  |
| placeholder  | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable        | bool |  true  |
| disabled    | whether is disabled       | bool |  false  |
| clear      |  whether to display clear icon(it takes effect only `editable` is `true` or `disabled` is `false` or `value` has been set) | bool | false  |
| maxLength      |  limits the maximum number of characters that can be entered      | number |    |
| onChange    | callback that is called when the text input's text changes | (val: string): void |  -  |
| onBlur     | callback that is called when the text input is blurred | (val: string): void |   -  |
| onFocus    | callback that is called when the text input is focused | (val: string): void |  -  |
| error       | whether to display error icon       | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked  | (e: Object): void |   |
| extra       | the right content of `InputItem`   | string or node |  ''  |
| onExtraClick      | callback that is called when the extra content is clicked | (e: Object): void |  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| autoFocus   | whether to focus the input on `componentDidMount`, each page has only one `Input` can be auto focused.（Note: It is no guarantee that all browsers are supported） | bool | false  |
| focused   | whether the `InputItem` has been focused on `componentDidMount`, you need to change this property on `onFocus` or `onBlur` callback | bool | false  |
| updatePlaceholder (`web only`) | whether to replace the placeholder with cleared content | bool | false|
| prefixListCls (`web only`)    |   the class name prefix of list      | String |  `am-list`  |
| name (`web only`)   | the name of input       | String |   |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置,  when`type`is`money`，can cunstom the keyboard confirm item's label | Object: { confirmLabel } |  无 |

> More available react-native `InputItem` API can be found at [react-native TextInput](http://facebook.github.io/react-native/docs/textinput.html)
