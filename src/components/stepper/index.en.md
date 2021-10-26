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
