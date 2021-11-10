# Stepper

<code src="./demos/index.tsx"></code>

## API

### Stepper

| Name         | Description                                                                                    | Type                                              | Default |
| ------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- |
| value        | Current number, controlled value                                                               | `number`                                          | -       |
| onChange     | Callback when value is changed                                                                 | `(value: number) => void`                         | -       |
| defaultValue | Default value                                                                                  | `number`                                          | `0`     |
| min          | Min value                                                                                      | `number`                                          | -       |
| max          | Max value                                                                                      | `number`                                          | -       |
| step         | Change the number of steps each time, it can be a decimal                                      | `number`                                          | `1`     |
| digits       | Format to a fixed number of digits after the decimal point, set to `0` means format to integer | `number`                                          | -       |
| disabled     | Whether to disabled Stepper                                                                    | `boolean`                                         | `false` |
| onFocus      | Triggered when the input get focus                                                             | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur       | Triggered when the input lose focus                                                            | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |

## CSS Variables

| name                      | description                           | default                     |
| ------------------------- | ------------------------------------- | --------------------------- |
| --height                  | Height of the stepper.                | `22px`                      |
| --input-width             | Width of the input.                   | `40px`                      |
| --input-font-size         | Font size.                            | `var(--adm-font-size-main)` |
| --border                  | Border around stepper.                | `1px solid #e5e5e5`         |
| --border-inner            | Border inner stepper.                 | `1px solid #e5e5e5`         |
| --active-border           | In the focus state, the border style. | `1px solid #e5e5e5`         |
| --button-font-size        | Font size of the button.              | `10px`                      |
| --button-background-color | Background color of the button.       | `transparent`               |
| --button-width            | Width of the button.                  | `22px`                      |
| --stepper-border-radius   | Radius of the stepper.                | `2px`                       |
| --input-font-color        | Font color of the input.              | `var(--adm-color-text)`     |
| --button-text-color       | Font color of the button.             | `var(--adm-color-primary)`  |
