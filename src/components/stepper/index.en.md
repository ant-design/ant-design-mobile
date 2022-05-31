# Stepper

A two-stage control that increases, decreases or modifies values.

## When to Use

It is suitable for inputting and adjusting the current value within a certain range.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Stepper

### Props

| Name          | Description                                                                                    | Type                                              | Default |
| ------------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- |
| allowEmpty    | Whether to allow empty content.                                                                | `boolean`                                         | `false` |
| defaultValue  | Default value                                                                                  | `number \| null`                                  | `0`     |
| digits        | Format to a fixed number of digits after the decimal point, set to `0` means format to integer | `number`                                          | -       |
| disabled      | Whether to disabled Stepper                                                                    | `boolean`                                         | `false` |
| inputReadOnly | Whether input readonly or not                                                                  | `boolean`                                         | `false` |
| max           | Max value                                                                                      | `number`                                          | -       |
| min           | Min value                                                                                      | `number`                                          | -       |
| onBlur        | Triggered when the input lose focus                                                            | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onChange      | Callback when value is changed                                                                 | `(value: number \| null) => void`                 | -       |
| onFocus       | Triggered when the input get focus                                                             | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| step          | Change the number of steps each time, it can be a decimal                                      | `number`                                          | `1`     |
| value         | Current number, controlled value                                                               | `number \| null`                                  | -       |

When `allowEmpty` is `true`, the `value` parameter of `onChange` may be `null`, please pay attention when using it.

### CSS Variables

| Name                      | Description                           | Default                     |
| ------------------------- | ------------------------------------- | --------------------------- |
| --active-border           | In the focus state, the border style. | `var(--border)`             |
| --border                  | Border style.                         | `none`                      |
| --border-inner            | Inner border style.                   | `solid 2px transparent`     |
| --border-radius           | Radius of the stepper.                | `2px`                       |
| --button-background-color | Background color of the button.       | `#f5f5f5`                   |
| --button-font-size        | Font size of the button.              | `15px`                      |
| --button-text-color       | Font color of the button.             | `var(--adm-color-primary)`  |
| --button-width            | Width of the button.                  | `var(--height)`             |
| --height                  | Height of the stepper.                | `28px`                      |
| --input-background-color  | Background color of input.            | `#f5f5f5`                   |
| --input-font-color        | Font color of the input.              | `var(--adm-color-text)`     |
| --input-font-size         | Font size of input.                   | `var(--adm-font-size-main)` |
| --input-width             | Width of the input.                   | `44px`                      |
