# PasscodeInput <Experimental></Experimental>

Input for password, captcha and verification code.

<code src="./demos/demo1.tsx"></code>

### Props

| Name         | Description                                                                  | Type                      | Default |
| ------------ | ---------------------------------------------------------------------------- | ------------------------- | ------- |
| length       | Length of passcode                                                           | `number`                  | `6`     |
| value        | The passcode content value                                                   | `string`                  | -       |
| defaultValue | The initial passcode content                                                 | `string`                  | -       |
| className    | ClassName of passcode                                                        | `string`                  | -       |
| style        | Style of passcode                                                            | `CSSProperties`           | -       |
| plain        | Whether to show the plain text                                               | `boolean`                 | `false` |
| error        | Whether to show the error style                                              | `boolean`                 | `false` |
| caret        | Whether to show the caret                                                    | `boolean`                 | `true`  |
| seperated    | Whether to make the cells seperated                                          | `boolean`                 | `false` |
| keyboard     | The virtual keyboard component. If not set, it will use the native keyboard. | `NumberKeyboard`          | -       |
| onChange     | Emitted when user input                                                      | `(value: string) => void` | -       |
| onFocus      | Emitted when passcode is focused                                             | `() => void`              | -       |
| onBlur       | Emitted when passcode is blurred                                             | `() => void`              | -       |
| onFill       | Emitted when passcode is filled                                              | `() => void`              | -       |

When `length` is not a positive number, replace it with the default value.

### Ref

| Name  | Description  | Type         |
| ----- | ------------ | ------------ |
| focus | Get focus    | `() => void` |
| blur  | Remove focus | `() => void` |

### CSS Variables

| Name            | Description                                             | Default   |
| --------------- | ------------------------------------------------------- | --------- |
| --cell-gap      | Gap between cells, only take effect in `seperated` mode | `6px`     |
| --cell-size     | Size of cells                                           | `42px`    |
| --border-color  | Color of border                                         | `#E5E5E5` |
| --border-radius | Corner radius of border                                 | `8px`     |
| --dot-size      | The size of the point when the password is hidden       | `10px`    |
