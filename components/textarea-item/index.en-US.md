---
category: Components
type: Data Entry
title: TextareaItem
---

A foundational component for inputting multi-line text into the app via a keyboard.

### Rule
- Support text input via keyboard or clipboard.
- The cursor can be moved horizontally.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| value | the value to show for the textarea (see [react doc](https://facebook.github.io/react/docs/forms.html) for more information about controlled component)  | String | |
| defaultValue | provides an initial value that will change when the user starts typing.  | String |  -  |
| placeholder      | the string that will be rendered before text input has been entered. | String | ''  |
| editable    | whether is editable         | bool |  true  |
| disabled    | whether is disabled         | bool |  false  |
| clear       | whether to display the clear icon (it takes effect only if `editable` is `true` and `disabled` is `false`) | bool | false  |
| rows        | sets the number of lines for a textarea     | number |   1 |
| count |  it is used for word count and maxlength, the default is 0 which indicates that word count is turned off. | number | -  |
| onChange    | callback that is called when the textarea's text changes. | (val: string): void |  -  |
| onBlur     | callback that is called when the textarea is blurred. | (val: string): void |   -  |
| onFocus    | callback that is called when the textarea is focused. | (val: string): void |  -  |
| error       | whether to display error         | bool |  false  |
| onErrorClick   | callback that is called when the error icon is clicked   | (): void |    |
| autoHeight | auto adjust height (only use one of `autoHeight` and `rows` properties) | bool  | false  |
| labelNumber  | number of label text, valid value is 2 to 7 | number | `5` |
| name   | the name of textarea      | String |   -  |
| prefixListCls   |   the class name prefix of list      | String |  `am-list`  |
| title   | the description of textarea        | String/node |  '' |

## TextareaItem methods

Property | Description | Type | Default
----|-----|------|------
| focus   | Force focus back onto the input node  | - |  -  |
