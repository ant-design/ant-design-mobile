# Stepper

<code src="./demos/index.tsx"></code>

## API

### Stepper

| Name         | Description                                                                                    | Type                                              | Default |
| ------------ | ---------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------- |
| value        | current number, controlled value                                                               | `number`                                          | -       |
| onChange     | callback when value is changed                                                                 | `(value: number) => void`                         | -       |
| defaultValue | default value                                                                                  | `number`                                          | `1`     |
| min          | min value                                                                                      | `number`                                          | -       |
| max          | max value                                                                                      | `number`                                          | -       |
| step         | change the number of steps each time, it can be a decimal                                      | `number`                                          | `1`     |
| digits       | format to a fixed number of digits after the decimal point, set to `0` means format to integer | `number`                                          | -       |
| disabled     | whether to disabled Stepper                                                                    | `boolean`                                         | `false` |
| onFocus      | triggered when the input get focus                                                             | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
| onBlur       | triggered when the input lose focus                                                            | `(e: React.FocusEvent<HTMLInputElement>) => void` | -       |
