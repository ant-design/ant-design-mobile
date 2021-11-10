# VirtualInput

<code src="./demos/demo1.tsx"></code>

### 属性

| Name        | Description                        | Type                                            | Default |
| ----------- | ---------------------------------- | ----------------------------------------------- | ------- |
| value       | The input value                    | `string`                                        | `''`    |
| placeholder | The placeholder text               | `string`                                        | -       |
| onFocus     | Triggered when element get focus   | `() => void`                                    | -       |
| onBlur      | Triggered when element lose focus  | `() => void`                                    | -       |
| onClick     | Triggered when element get clicked | `(e: React.MouseEvent<HTMLDivElement>) => void` | -       |

Strictly speaking, VirtualInput is not a form field component. It just displays the data.

### Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| focus | Let the input box get focus  | `() => void` |
| blur  | Let the input box lose focus | `() => void` |
