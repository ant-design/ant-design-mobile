# Stepper

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name          | Description                                                                                    | Type                                              | Default |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- |
| value         | Current number, controlled value                                                               | `number \| null`                                  | -       |
| defaultValue  | Default value                                                                                  | `number \| null`                                  | `0`     |
| onChange      | Callback when value is changed                                                                 | `(value: number \| null) => void`                 | -       |
| min           | Min value                                                                                      | `number`                                          | -       |
| max           | Max value                                                                                      | `number`                                          | -       |
| step          | Change the number of steps each time, it can be a decimal                                      | `number`                                          | `1`     |
| digits        | Format to a fixed number of digits after the decimal point, set to `0` means format to integer | `number`                                          | -       |
| disabled      | Whether to disabled Stepper                                                                    | `boolean`                                         | `false` |
| inputReadOnly | Whether input readonly or not                                                                  | `boolean`                                         | `false` |
| onFocus       | Triggered when the input get focus                                                             | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur        | Triggered when the input lose focus                                                            | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| allowEmpty    | Whether to allow empty content.                                                                | `boolean`                                         | `false` |

When `allowEmpty` is `true`, the `value` parameter of `onChange` may be `null`, please pay attention when using it.

### CSS Variables

| Name                      | Description                           | Default                     |
| ------------------------- | ------------------------------------- | --------------------------- |
| --height                  | Height of the stepper.                | `28px`                      |
| --input-width             | Width of the input.                   | `44px`                      |
| --input-font-size         | Font size of input.                   | `var(--adm-font-size-main)` |
| --input-font-color        | Font color of the input.              | `var(--adm-color-text)`     |
| --input-background-color  | Background color of input.            | `#f5f5f5`                   |
| --border-radius           | Radius of the stepper.                | `2px`                       |
| --border                  | Border style.                         | `none`                      |
| --border-inner            | Inner border style.                   | `solid 2px transparent`     |
| --active-border           | In the focus state, the border style. | `var(--border)`             |
| --button-font-size        | Font size of the button.              | `15px`                      |
| --button-text-color       | Font color of the button.             | `var(--adm-color-primary)`  |
| --button-background-color | Background color of the button.       | `#f5f5f5`                   |
| --button-width            | Width of the button.                  | `var(--height)`             |
