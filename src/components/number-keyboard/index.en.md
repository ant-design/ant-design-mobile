# NumberKeyboard <Experimental></Experimental>

Numeric keypad panel.

## When to Use

Applicable when entering numeric content.

Can be used with password input box component or custom input box component

If possible, we recommend using the native keyboard provided by the system or client. The virtual numeric keypad is just a supplement for some special scenarios.

## Demos

<code src="./demos/demo1.tsx"></code>

## NumberKeyboard

### Props

| Name            | Description                                                                                                                 | Type                                       | Default               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| afterClose      | Callback when the keyboard is completely put away                                                                           | `() => void`                               | -                     |
| afterShow       | Callback when the keyboard is completely bounced                                                                            | `() => void`                               | -                     |
| closeOnConfirm  | Whether to automatically close when the ok button is clicked                                                                | `boolean`                                  | `true`                |
| confirmText     | The text of the confirm button, if `null` is set, it would be shown                                                         | `string \| null`                           | `null`                |
| customKey       | Customized button                                                                                                           | `'-' \| '.' \| 'X'`                        | -                     |
| destroyOnClose  | Unmount content when not visible                                                                                            | `boolean`                                  | `false`               |
| forceRender     | Render content forcely                                                                                                      | `boolean`                                  | `false`               |
| getContainer    | To get the specified mounted HTML node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `() => document.body` |
| onClose         | Triggered when it is clicked                                                                                                | `() => void`                               | -                     |
| onConfirm       | Triggered when the ok button is clicked                                                                                     | `() => void`                               | -                     |
| onDelete        | Callback when the content is deleted                                                                                        | `() => void`                               | -                     |
| onInput         | Callback when the input content is changed                                                                                  | `(v: string) => void`                      | -                     |
| randomOrder     | Whether the keyboard is out of order                                                                                        | `boolean`                                  | `false`               |
| safeArea        | Whether to enable safe area padding                                                                                         | `boolean`                                  | `true`                |
| showCloseButton | Whether to show the collapsed keyboard arrow                                                                                | `boolean`                                  | `true`                |
| title           | The title of the keyboard                                                                                                   | `string`                                   | -                     |
| visible         | Whether to show or hide                                                                                                     | `boolean`                                  | -                     |

In addition, the following attributes of [Popup](./popup) are supported: `stopPropagation`

## FAQ

### Does the NumberKeyboard support automatic reading of verification codes from SMS?

No.
