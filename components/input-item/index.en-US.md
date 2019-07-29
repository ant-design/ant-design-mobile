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

**`InputItem` must wrapped by a [List](https://mobile.ant.design/components/list)**

Properties | Description | Type | Default
-----------|------------|------|--------
| type    | can be `bankCard`; `phone`(which the maxLength is 11 and setting will be ignored); `password`; `number`(in order to evoke the 'numeric keyboard with decimal', this type is not a native number, but `<input type="text" pattern="[0-9]*"/>`); `digit`(represent the native type number); `money`(analog numeric keyboard with decimal); As well as other standard html input type values. | String |  `text`  |
| value | the value of input (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing. | String |  -  |
| placeholder  | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable        | bool |  true  |
| disabled    | whether is disabled       | bool |  false  |
| clear      |  whether to display clear(it takes effect only `editable` is `true` and `disabled` is `false` has been set) | bool | false  |
| maxLength      |  limits the maximum number of characters that can be entered      | number |  valid for "text, email, search, password, tel, or url" . https://developer.mozilla.org/zh-TW/docs/Web/HTML/Element/input, https://github.com/ant-design/ant-design-mobile/issues/2966 |
| onChange    | callback that is called when the text input's text changes | (val: string): void |  -  |
| onBlur     | callback that is called when the text input is blurred | (val: string): void |   -  |
| onFocus    | callback that is called when the text input is focused | (val: string): void |  -  |
| error       | whether to display error       | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked  | (e: Object): void |   |
| extra       | the right content of `InputItem`   | string or node |  ''  |
| onExtraClick      | callback that is called when the extra content is clicked | (e: Object): void |  |
| onVirtualKeyboardConfirm | callback that is called when "confirm" button of virtual keyboard is clicked | (val: string): void |  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| updatePlaceholder  | whether to replace the placeholder with cleared content | bool | false|
| prefixListCls     |   the class name prefix of list      | String |  `am-list`  |
| name    | the name of input       | String |   |
| moneyKeyboardAlign    | text align direction, only `type='money'` support this api， could be `'left'`, `'right'`       | String |  'right'  |
| moneyKeyboardWrapProps    | custom money virtual keyboard props  | Object | {} |
| moneyKeyboardHeader    | custom money virtual keyboard header  | ReactNode | null |
| locale   | internationalization, can override `[LocaleProvider](https://mobile.ant.design/components/locale-provider)`,  when`type`is`money`，can cunstom the keyboard confirm item's label | Object: { confirmLabel } |   |
| autoAdjustHeight   | prevent keyboard from covering input element.(only for `type=money`) | bool |  false |
| disabledKeys   | disable some keyboard item (only for  `type=money`) | array | null |  null |

> Note: Do not set `value` asynchronously in the `onChange` event of the controlled component, otherwise Chinese input may cause problems, [related issue](https://github.com/facebook/react/issues/3926).
>
> Note: `InputItem` does not support negative number if `type` is text, you can use `type=text` to do that.
>
> Note: When use `moneyKeyboardHeader`, only one `InputItem` which `type=money` is allowed on one page.

## InputItem Instance methods

Property | Description | Type | Default
----|-----|------|------
| focus    | Force focus back onto the input node  | (): void |  -  |
