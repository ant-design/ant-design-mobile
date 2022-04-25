# Button

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name        | Description                                                                                                             | Type                                                                                | Default                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------- |
| color       | The color of the button.                                                                                                | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`                      | `'default'`                           |
| fill        | The fill mode.                                                                                                          | `'solid' \| 'outline' \| 'none'`                                                    | `'solid'`                             |
| size        | The size of the button.                                                                                                 | `'mini' \| 'small' \| 'middle' \| 'large'`                                          | `'middle'`                            |
| block       | Should the button displays as block element.                                                                            | `boolean`                                                                           | `false`                               |
| disabled    | Should the button be disabled.                                                                                          | `boolean`                                                                           | `false`                               |
| loading     | Should the button displays as loading state. `'auto'` will update loading state based on the Promise state of `onClick` | `boolean \| 'auto'`                                                                 | `false`                               |
| loadingText | The extra text displayed in loading state.                                                                              | `string`                                                                            | -                                     |
| loadingIcon | The customized `icon` in loading state.                                                                                 | `ReactNode`                                                                         | `<DotLoading color='currentColor' />` |
| onClick     | The click event.                                                                                                        | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -                                     |
| type        | The `type` prop of native `button` element.                                                                             | `'submit' \| 'reset' \| 'button'`                                                   | `'button'`                            |
| shape       | The shape of the button.                                                                                                | `'default' \| 'rounded' \| 'rectangular'`                                           | `'default'`                           |

### CSS Variables

| Name               | Description                     | Default                   | Global                          |
| ------------------ | ------------------------------- | ------------------------- | ------------------------------- |
| --text-color       | Text color of the button.       | `var(--adm-color-text)`   | `--adm-button-text-color`       |
| --background-color | Background color of the button. | `var(--adm-color-white)`  | `--adm-button-background-color` |
| --border-radius    | Border radius of the button.    | `4px`                     | `--adm-button-border-radius`    |
| --border-width     | Border width of the button.     | `1px`                     | `--adm-button-border-width`     |
| --border-style     | Border style of the button.     | `solid`                   | `--adm-button-border-style`     |
| --border-color     | Border color of the button.     | `var(--adm-border-color)` | `--adm-button-border-color`     |

### Ref

| Name          | Description           | Type                          |
| ------------- | --------------------- | ----------------------------- |
| nativeElement | Native button element | `HtmlButtonElement` \| `null` |
