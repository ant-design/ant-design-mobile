# Mask

Dark background layer.

## When to Use

Often used in the background layer of a modal window to make the visual focus stand out on the modal window itself.

## Demos

<code src="./demos/demo1.tsx"></code>

## Mask

### Props

| Name              | Description                                                                                            | Type                                                            | Default     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------- | ----------- |
| afterClose        | Triggered when completely closed                                                                       | `() => void`                                                    | -           |
| afterShow         | Triggered after fully displayed                                                                        | `() => void`                                                    | -           |
| color             | Color of the mask                                                                                      | `'black' \| 'white'`                                            | `'black'`   |
| destroyOnClose    | Uninstall content when invisible                                                                       | `boolean`                                                       | `false`     |
| disableBodyScroll | Whether to disable `body` scrolling                                                                    | `boolean`                                                       | `true`      |
| forceRender       | Render content forcely                                                                                 | `boolean`                                                       | `false`     |
| getContainer      | To get the specified mounted `HTML` node, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                      | `null`      |
| onMaskClick       | Triggered when the mask is clicked                                                                     | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -           |
| opacity           | Opacity                                                                                                | `'default' \| 'thin' \| 'thick' \| number`                      | `'default'` |
| stopPropagation   | Stop the propagation of some events.                                                                   | `PropagationEvent[]`                                            | `['click']` |
| visible           | Whether to show or hide                                                                                | `boolean`                                                       | `true`      |

### CSS Variables

| Name      | Description                   | Default | Global               |
| --------- | ----------------------------- | ------- | -------------------- |
| --z-index | `z-index` of the mask element | `1000`  | `--adm-mask-z-index` |
