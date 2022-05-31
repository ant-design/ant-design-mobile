# VirtualInput <Experimental></Experimental>

Consistent with the appearance and usage of the Input input box.

## When to Use

When you need to use it with the virtual keyboard.

## Demos

<code src="./demos/demo1.tsx"></code>

## VirtualInput

### Props

| Name        | Description                                                                                           | Type                                            | Default |
| ----------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ------- |
| clearable   | Whether to enable the clear icon, the virtual input box will be cleared after clicking the clear icon | `boolean`                                       | `false` |
| onBlur      | Triggered when element lose focus                                                                     | `() => void`                                    | -       |
| onClick     | Triggered when element get clicked                                                                    | `(e: React.MouseEvent<HTMLDivElement>) => void` | -       |
| onFocus     | Triggered when element get focus                                                                      | `() => void`                                    | -       |
| placeholder | The placeholder text                                                                                  | `string`                                        | -       |
| value       | The input value                                                                                       | `string`                                        | `''`    |

Strictly speaking, VirtualInput is not a form field component. It just displays the data.

### Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| blur  | Let the input box lose focus | `() => void` |
| focus | Let the input box get focus  | `() => void` |

### CSS Variables

| Name                | Description               | Default                    | Global                            |
| ------------------- | ------------------------- | -------------------------- | --------------------------------- |
| --caret-color       | The color of caret.       | `var(--adm-color-primary)` | `--adm-virtual-input-caret-color` |
| --caret-width       | The width of caret.       | `2px`                      | `--adm-virtual-input-caret-width` |
| --color             | Text color.               | `var(--adm-color-text)`    | -                                 |
| --disabled-color    | Text color when disabled. | `var(--adm-color-weak)`    | -                                 |
| --font-size         | Text font size.           | `17px`                     | -                                 |
| --placeholder-color | Placeholder text color.   | `var(--adm-color-light)`   | -                                 |
| --text-align        | The alignment of text.    | `left`                     | -                                 |
