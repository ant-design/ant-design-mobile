# Button

Used to start an immediate operation.

## When to Use

Marks or encapsulates a group of operation commands, responds to user click behavior, and triggers corresponding business logic.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## Button

### Props

| Name        | Description                                                                                                             | Type                                                                                | Default                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------- |
| block       | Should the button displays as block element.                                                                            | `boolean`                                                                           | `false`                               |
| color       | The color of the button.                                                                                                | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'`                      | `'default'`                           |
| disabled    | Should the button be disabled.                                                                                          | `boolean`                                                                           | `false`                               |
| fill        | The fill mode.                                                                                                          | `'solid' \| 'outline' \| 'none'`                                                    | `'solid'`                             |
| loading     | Should the button displays as loading state. `'auto'` will update loading state based on the Promise state of `onClick` | `boolean \| 'auto'`                                                                 | `false`                               |
| loadingIcon | The customized `icon` in loading state.                                                                                 | `ReactNode`                                                                         | `<DotLoading color='currentColor' />` |
| loadingText | The extra text displayed in loading state.                                                                              | `string`                                                                            | -                                     |
| onClick     | The click event.                                                                                                        | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void \| Promise<void>` | -                                     |
| shape       | The shape of the button.                                                                                                | `'default' \| 'rounded' \| 'rectangular'`                                           | `'default'`                           |
| size        | The size of the button.                                                                                                 | `'mini' \| 'small' \| 'middle' \| 'large'`                                          | `'middle'`                            |
| type        | The `type` prop of native `button` element.                                                                             | `'submit' \| 'reset' \| 'button'`                                                   | `'button'`                            |

In addition, the following properties of the native `button` element are supported: `onMouseDown` `onMouseUp` `onTouchStart` `onTouchEnd`.

### CSS Variables

| Name               | Description                     | Default                   | Global                          |
| ------------------ | ------------------------------- | ------------------------- | ------------------------------- |
| --background-color | Background color of the button. | `var(--adm-color-white)`  | `--adm-button-background-color` |
| --border-color     | Border color of the button.     | `var(--adm-border-color)` | `--adm-button-border-color`     |
| --border-radius    | Border radius of the button.    | `4px`                     | `--adm-button-border-radius`    |
| --border-style     | Border style of the button.     | `solid`                   | `--adm-button-border-style`     |
| --border-width     | Border width of the button.     | `1px`                     | `--adm-button-border-width`     |
| --text-color       | Text color of the button.       | `var(--adm-color-text)`   | `--adm-button-text-color`       |

### Ref

| Name          | Description           | Type                          |
| ------------- | --------------------- | ----------------------------- |
| nativeElement | Native button element | `HtmlButtonElement` \| `null` |
