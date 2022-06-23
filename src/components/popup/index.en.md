# Popup

Slide or pop out a custom content area from the screen.

## When to Use

It is suitable for displaying pop-up windows, information prompts, selection input, switching, etc., and supports
multiple pop-up layer overlay display.

## Popup

### Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name             | Description                                                                                                                   | Type                                                               | Default               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------- |
| afterClose       | Triggered when completely closed                                                                                              | `() => void`                                                       | -                     |
| afterShow        | Triggered when completely showed                                                                                              | `() => void`                                                       | -                     |
| bodyClassName    | Content section class name                                                                                                    | `string`                                                           | -                     |
| bodyStyle        | Content section style                                                                                                         | `React.CSSProperties`                                              | -                     |
| className        | Container class name                                                                                                          | `string`                                                           | -                     |
| closeOnMaskClick | Whether to close after clicking the mask layer                                                                                | `boolean`                                                          | `false`               |
| destroyOnClose   | Unmount content when not visible                                                                                              | `boolean`                                                          | `false`               |
| forceRender      | Render content forcely                                                                                                        | `boolean`                                                          | `false`               |
| getContainer     | To get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `() => document.body` |
| mask             | Whether to display Mask                                                                                                       | `boolean`                                                          | `true`                |
| maskClassName    | Mask class name                                                                                                               | `string`                                                           | -                     |
| maskStyle        | Mask style                                                                                                                    | `React.CSSProperties`                                              | -                     |
| onClick          | Triggered when clicked, used to stop event bubbles usually                                                                    | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -                     |
| onClose          | Triggered when closed                                                                                                         | `() => void`                                                       | -                     |
| onMaskClick      | Triggered when the mask is clicked                                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -                     |
| position         | The specified location of the pop-up                                                                                          | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`            |
| showCloseButton  | Whether to show a close icon button                                                                                           | `boolean`                                                          | `false`               |
| stopPropagation  | Stop the propagation of some events.                                                                                          | `PropagationEvent[]`                                               | `['click']`           |
| style            | Container style                                                                                                               | `React.CSSProperties`                                              | -                     |
| visible          | Whether visible                                                                                                               | `boolean`                                                          | `false`               |

### CSS Variables

| Name      | Description                    | Default | Global                |
| --------- | ------------------------------ | ------- | --------------------- |
| --z-index | `z-index` of the popup element | `1000`  | `--adm-popup-z-index` |

## CenterPopup

CenterPopup does not support the `position` property, and the default value of `getContainer` is `null`, other properties are the same as Popup.

### Demos

<code src="../center-popup/demos/demo1.tsx"></code>

### Props

The props are the same with Popup expect for `positon`.

### CSS Variables

| Name               | Description                              | Default   | Global                                |
| ------------------ | ---------------------------------------- | --------- | ------------------------------------- |
| --background-color | The background color of the popup layer. | `#ffffff` | `--adm-center-popup-background-color` |
| --border-radius    | The border radius of the popup layer.    | `8px`     | `--adm-center-popup-border-radius`    |
| --max-width        | The max width of the popup layer.        | `75vw`    | `--adm-center-popup-max-width`        |
| --min-width        | The min width of the popup layer.        | `280px`   | `--adm-center-popup-min-width`        |
| --z-index          | `z-index` of the popup element           | `1000`    | `--adm-center-popup-z-index`          |
