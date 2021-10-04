# Search

<code src="./demos/demo1.tsx"></code>

## API

| Name             | Description                                                                                  | Type                                              | Default  |
| ---------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------- |
| value            | input value                                                                                  | `string`                                          | -        |
| placeholder      | hint text                                                                                    | `string`                                          | -        |
| maxLength        | the max number of the inputing character                                                     | `number \| string`                                | -        |
| clearable        | whether to enable the clear icon, the input would be cleared after the clear icon is clicked | `boolean`                                         | `true`   |
| showCancelButton | whether to display the cancel button on the right side of the search input                   | `boolean`                                         | `false`  |
| cancelText       | text of the cancel button                                                                    | `string`                                          | `'取消'` |
| onSearch         | triggered when the enter key is input                                                        | `(value: string) => void`                         | -        |
| onChange         | triggered when the input content is changed                                                  | `(value: string) => void`                         | -        |
| onFocus          | triggered when the input get focus                                                           | `(e: React.FocusEvent<HTMLInputElement>) => void` | -        |
| onBlur           | triggered when the input lose focus                                                          | `(e: React.FocusEvent<HTMLInputElement>) => void` | -        |
| onClear          | triggered when the clear button is clicked                                                   | `() => void`                                      | -        |
| onCancel         | triggered when the cancel button is clicked                                                  | `() => void`                                      | -        |

## CSS variables

| Name                | Description              | Default                 |
| ------------------- | ------------------------ | ----------------------- |
| --background        | background color         | `#f5f5f5`               |
| --border-radius     | circle corner            | `6px`                   |
| --placeholder-color | `placeholder` font color | `var(--adm-color-weak)` |

## Ref

The same as [Input](./input)
