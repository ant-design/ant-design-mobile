# Button

<code src="./demos/index.tsx"></code>

## Props

| Name        | Description                                  | Type                                                               | Default     |
| ----------- | -------------------------------------------- | ------------------------------------------------------------------ | ----------- |
| color       | The color of the button.                     | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`     | `'default'` |
| fill        | The fill mode.                               | `'solid' \| 'outline' \| 'none'`                                   | `'solid'`   |
| size        | The size of the button.                      | `'mini' \| 'small' \| 'middle' \| 'large'`                         | `'middle'`  |
| block       | Should the button displays as block element. | `boolean`                                                          | `false`     |
| disabled    | Should the button be disabled.               | `boolean`                                                          | `false`     |
| loading     | Should the button displays as loading state. | `boolean`                                                          | `false`     |
| loadingText | The extra text displayed in loading state.   | `string`                                                           | -           |
| onClick     | The click event.                             | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -           |
| type        | The `type` prop of native `button` element.  | `'submit' \| 'reset' \| 'button'`                                  | -           |

## CSS Variables

| Name               | Description                     | Default                   |
| ------------------ | ------------------------------- | ------------------------- |
| --text-color       | Text color of the button.       | `var(--adm-color-text)`   |
| --background-color | Background color of the button. | `var(--adm-color-white)`  |
| --border-radius    | Border radius of the button.    | `4px`                     |
| --border-width     | Border width of the button.     | `1px`                     |
| --border-style     | Border style of the button.     | `solid`                   |
| --border-color     | Border color of the button.     | `var(--adm-border-color)` |
