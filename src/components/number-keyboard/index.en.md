# NumberKeyboard

H5 numeric keyboard, can be used with password input box component or custom input box component

<code src="./demos/index.tsx"></code>

## API

| Name            | Description                                                                                                                 | Type                                       | Default               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| visible         | whether to show or hide                                                                                                     | `boolean`                                  | -                     |
| title           | the title of the keyboard                                                                                                   | `string`                                   | -                     |
| getContainer    | to get the specified mounted HTML node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `() => document.body` |
| confirmText     | the text of the confirm button, if `null` is set, it would be shown                                                         | `string \| null`                           | `null`                |
| customKey       | customized button                                                                                                           | `'-' \| '.' \| 'X'`                        | -                     |
| randomOrder     | whether the keyboard is out of order                                                                                        | `boolean`                                  | `false`               |
| showCloseButton | whether to show the collapsed keyboard arrow                                                                                | `boolean`                                  | `true`                |
| onInput         | callback when the input content is changed                                                                                  | `(v: string) => void`                      | -                     |
| onDelete        | callback when the content is deleted                                                                                        | `() => void`                               | -                     |
| onClose         | triggered when it is clicked                                                                                                | `() => void`                               | -                     |
| onConfirm       | triggered when the ok button is clicked                                                                                     | `() => void`                               | -                     |
| onBlur          | callback when the outside of the keyboard is clicked                                                                        | `() => void`                               | -                     |
| afterShow       | callback when the keyboard is completely bounced                                                                            | `() => void`                               | -                     |
| afterClose      | callback when the keyboard is completely put away                                                                           | `() => void`                               | -                     |
| closeOnBlur     | whether to automatically close when clicking outside the keyboard                                                           | `boolean`                                  | `true`                |
| closeOnConfirm  | whether to automatically close when the ok button is clicked                                                                | `boolean`                                  | `true`                |

<Alert type="info">
  Note: The keyboard would be put away when the outer keyboard of the keyboard is clicked, and you can prevent the keyboard from putting away by preventing the element click event from bubbling;
</Alert>

## CSS Variables

| 属性                | 说明                         | 默认值           |
| ------------------- | ---------------------------- | ---------------- |
| --font-size         | font size                    | 17px             |
| --color             | font color                   | --am-color-text  |
| --placeholder-color | placeholder font color       | --am-color-light |
| --disabled-color    | text color in disabled state | --am-color-weak  |
