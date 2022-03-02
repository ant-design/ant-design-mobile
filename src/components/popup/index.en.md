# Popup

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name            | Description                                                                                                                   | Type                                                               | Default         |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible         | Whether visible                                                                                                               | `boolean`                                                          | `false`         |
| mask            | Whether to display Mask                                                                                                       | `boolean`                                                          | `true`          |
| onMaskClick     | Triggered when the mask is clicked                                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| destroyOnClose  | Unmount content when not visible                                                                                              | `boolean`                                                          | `false`         |
| forceRender     | Render content forcely                                                                                                        | `boolean`                                                          | `false`         |
| getContainer    | To get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `document.body` |
| afterShow       | Triggered when completely showed                                                                                              | `() => void`                                                       | -               |
| afterClose      | Triggered when completely closed                                                                                              | `() => void`                                                       | -               |
| position        | The specified location of the pop-up                                                                                          | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| className       | Container class name                                                                                                          | `string`                                                           | -               |
| style           | Container style                                                                                                               | `React.CSSProperties`                                              | -               |
| bodyClassName   | Content section class name                                                                                                    | `string`                                                           | -               |
| bodyStyle       | Content section style                                                                                                         | `React.CSSProperties`                                              | -               |
| maskClassName   | Mask class name                                                                                                               | `string`                                                           | -               |
| maskStyle       | Mask style                                                                                                                    | `React.CSSProperties`                                              | -               |
| onClick         | Triggered when clicked, used to stop event bubbles usually                                                                    | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
| stopPropagation | Stop the propagation of some events.                                                                                          | `PropagationEvent[]`                                               | `['click']`     |

### CSS Variables

| Name      | Description                    | Default | Global                |
| --------- | ------------------------------ | ------- | --------------------- |
| --z-index | `z-index` of the popup element | `1000`  | `--adm-popup-z-index` |
