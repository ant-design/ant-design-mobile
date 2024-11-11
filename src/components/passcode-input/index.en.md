# PasscodeInput <Experimental></Experimental>

Enter the password into this text box.

## When to Use

It is suitable for desensitization display when entering password.

Input for password, captcha and verification code.

## Demos

<code src="./demos/demo1.tsx"></code>

## PasscodeInput

### Props

| Name | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| caret | Whether to show the caret | `boolean` | `true` |  |
| className | ClassName of passcode | `string` | - |  |
| defaultValue | The initial passcode content | `string` | - |  |
| error | Whether to show the error style | `boolean` | `false` |  |
| keyboard | The virtual keyboard component. If not set, it will use the native keyboard. | `NumberKeyboard` | - |  |
| inputMode | The type of the input box, which changes the native keyboard type | `'numeric' \| 'text'` | `'numeric'` | 5.39.0 |
| length | Length of passcode | `number` | `6` |  |
| plain | Whether to show the plain text | `boolean` | `false` |  |
| seperated | Whether to make the cells seperated | `boolean` | `false` |  |
| style | Style of passcode | `CSSProperties` | - |  |
| value | The passcode content value | `string` | - |  |
| onBlur | Emitted when passcode is blurred | `() => void` | - |  |
| onChange | Emitted when user input | `(value: string) => void` | - |  |
| onFill | Emitted when passcode is filled | `() => void` | - |  |
| onFocus | Emitted when passcode is focused | `() => void` | - |  |

When `length` is not a positive number, replace it with the default value.

### Ref

| Name  | Description  | Type         |
| ----- | ------------ | ------------ |
| blur  | Remove focus | `() => void` |
| focus | Get focus    | `() => void` |

### CSS Variables

| Name | Description | Default |
| --- | --- | --- |
| --border-color | Color of border | `var(--adm-color-border)` |
| --border-radius | Corner radius of border | `8px` |
| --cell-gap | Gap between cells, only take effect in `seperated` mode | `6px` |
| --cell-size | Size of cells | `40px` |
| --dot-size | The size of the point when the password is hidden | `10px` |
