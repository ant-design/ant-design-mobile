# Mask

<code src="./demos/demo1.tsx"></code>

# API

| Name              | Description                                                                                            | Type                                                               | Default     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------- |
| visible           | Whether to show or hide                                                                                | `boolean`                                                          | `false`     |
| onMaskClick       | Triggered when the mask is clicked                                                                     | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -           |
| destroyOnClose    | Uninstall content when invisible                                                                       | `boolean`                                                          | `false`     |
| forceRender       | Render content forcely                                                                                 | `boolean`                                                          | `false`     |
| color             | Color of the mask                                                                                      | `'black' \| 'white'`                                               | `'black'`   |
| opacity           | Opacity                                                                                                | `'default' \| 'dark' \| number`                                    | `'default'` |
| getContainer      | To get the specified mounted `HTML` node, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `null`      |
| afterShow         | Triggered after fullly displayed                                                                       | `() => void`                                                       | -           |
| afterClose        | Triggered when completely closed                                                                       | `() => void`                                                       | -           |
| disableBodyScroll | Whether to disable `body` scrolling                                                                    | `boolean`                                                          | `true`      |
