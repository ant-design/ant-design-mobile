# NumberKeyboard

H5 numeric keyboard, can be used with password input box component or custom input box component

<code src="./demos/index.tsx"></code>

## API

| Name            | Description                                                                                                                 | Type                                       | Default               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| visible         | Whether to show or hide                                                                                                     | `boolean`                                  | -                     |
| title           | The title of the keyboard                                                                                                   | `string`                                   | -                     |
| getContainer    | To get the specified mounted HTML node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `() => document.body` |
| confirmText     | The text of the confirm button, if `null` is set, it would be shown                                                         | `string \| null`                           | `null`                |
| customKey       | Customized button                                                                                                           | `'-' \| '.' \| 'X'`                        | -                     |
| randomOrder     | Whether the keyboard is out of order                                                                                        | `boolean`                                  | `false`               |
| showCloseButton | Whether to show the collapsed keyboard arrow                                                                                | `boolean`                                  | `true`                |
| onInput         | Callback when the input content is changed                                                                                  | `(v: string) => void`                      | -                     |
| onDelete        | Callback when the content is deleted                                                                                        | `() => void`                               | -                     |
| onClose         | Triggered when it is clicked                                                                                                | `() => void`                               | -                     |
| onConfirm       | Triggered when the ok button is clicked                                                                                     | `() => void`                               | -                     |
| onBlur          | Callback when the outside of the keyboard is clicked                                                                        | `() => void`                               | -                     |
| afterShow       | Callback when the keyboard is completely bounced                                                                            | `() => void`                               | -                     |
| afterClose      | Callback when the keyboard is completely put away                                                                           | `() => void`                               | -                     |
| closeOnBlur     | Whether to automatically close when clicking outside the keyboard                                                           | `boolean`                                  | `true`                |
| closeOnConfirm  | Whether to automatically close when the ok button is clicked                                                                | `boolean`                                  | `true`                |

In addition, the following attributes of [Popup](./popup) are supported: `stopPropagation`

## CSS Variables

| 属性                | 说明                         | 默认值           |
| ------------------- | ---------------------------- | ---------------- |
| --font-size         | font size                    | 17px             |
| --color             | font color                   | --am-color-text  |
| --placeholder-color | placeholder font color       | --am-color-light |
| --disabled-color    | text color in disabled state | --am-color-weak  |
