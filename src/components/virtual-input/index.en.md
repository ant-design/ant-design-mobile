# VirtualInput <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>

### Props

| Name        | Description                                                                                           | Type                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------- |
| value       | The input value                                                                                       | `string`                                        | `''`    |
| placeholder | The placeholder text                                                                                  | `string`                                        | -       |
| clearable   | Whether to enable the clear icon, the virtual input box will be cleared after clicking the clear icon | `boolean`                                       | `false` |
| onFocus     | Triggered when element get focus                                                                      | `() => void`                                    | -       |
| onBlur      | Triggered when element lose focus                                                                     | `() => void`                                    | -       |
| onClick     | Triggered when element get clicked                                                                    | `(e: React.MouseEvent<HTMLDivElement>) => void` | -       |

Strictly speaking, VirtualInput is not a form field component. It just displays the data.

### Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| focus | Let the input box get focus  | `() => void` |
| blur  | Let the input box lose focus | `() => void` |

### CSS Variables

| Name                | Description               | Default                    | Global                            |
| ------------------- | ------------------------- | -------------------------- | --------------------------------- |
| --font-size         | Text font size.           | `17px`                     | -                                 |
| --color             | Text color.               | `var(--adm-color-text)`    | -                                 |
| --placeholder-color | Placeholder text color.   | `var(--adm-color-light)`   | -                                 |
| --disabled-color    | Text color when disabled. | `var(--adm-color-weak)`    | -                                 |
| --text-align        | The alignment of text.    | `left`                     | -                                 |
| --caret-width       | The width of caret.       | `2px`                      | `--adm-virtual-input-caret-width` |
| --caret-color       | The color of caret.       | `var(--adm-color-primary)` | `--adm-virtual-input-caret-color` |
