# TextArea

<code src="./demos/index.tsx"></code>

## API

| Name         | Description                                                        | Type                                                | Default |
| ------------ | ------------------------------------------------------------------ | --------------------------------------------------- | ------- |
| value        | input value                                                        | `string`                                            | -       |
| defaultValue | input value by default                                             | `string`                                            | -       |
| onChange     | triggered when the TextArea content changed                        | `(value: string) => void`                           | -       |
| placeholder  | hint text                                                          | `string`                                            | -       |
| autoSize     | adaptive content height                                            | `boolean \| { minRows?: number, maxRows?: number }` | `false` |
| rows         | number of rows                                                     | `number`                                            | `2`     |
| maxLength    | maximum number of characters                                       | `number`                                            | -       |
| showCount    | whether to display the number of words                             | `boolean`                                           | `false` |
| id           | `id` of `textarea` element, often used in conjunction with `label` | `string`                                            | -       |

In addition, the following native attributes are supported: `autoComplete` `disabled` `readOnly` `onFocus` `onBlur`

## CSS Variables

| Name                | Description                   | Default                  |
| ------------------- | ----------------------------- | ------------------------ |
| --font-size         | font size                     | `17px`                   |
| --color             | font color                    | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` font color      | `var(--adm-color-light)` |
| --disabled-color    | font color in disabled status | `var(--adm-color-weak)`  |
