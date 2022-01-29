# TextArea

<code src="./demos/demo1.tsx"></code>

## API

| Name         | Description                                                        | Type                                                             | Default |
| ------------ | ------------------------------------------------------------------ | ---------------------------------------------------------------- | ------- |
| value        | Input value                                                        | `string`                                                         | -       |
| defaultValue | Input value by default                                             | `string`                                                         | -       |
| onChange     | Triggered when the TextArea content changed                        | `(value: string) => void`                                        | -       |
| placeholder  | Hint text                                                          | `string`                                                         | -       |
| autoSize     | Adaptive content height                                            | `boolean \| { minRows?: number, maxRows?: number }`              | `false` |
| rows         | Number of rows                                                     | `number`                                                         | `2`     |
| maxLength    | Maximum number of characters                                       | `number`                                                         | -       |
| showCount    | Display the number of words, supports custom render                | `boolean \| ((length: number, maxLength?: number) => ReactNode)` | `false` |
| id           | `id` of `textarea` element, often used in conjunction with `label` | `string`                                                         | -       |

In addition, the following native attributes are supported: `autoComplete` `disabled` `readOnly` `onFocus` `onBlur` `onCompositionStart` `onCompositionEnd`

## CSS Variables

| Name                | Description                   | Default                  |
| ------------------- | ----------------------------- | ------------------------ |
| --font-size         | font size                     | `17px`                   |
| --color             | font color                    | `var(--adm-color-text)`  |
| --placeholder-color | `placeholder` font color      | `var(--adm-color-light)` |
| --disabled-color    | font color in disabled status | `var(--adm-color-weak)`  |
