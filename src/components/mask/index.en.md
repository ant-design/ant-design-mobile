# Mask

<code src="./demos/demo1.tsx"></code>

# API

| Name              | Description                                                                                            | Type                                                               | Default     |
| ----------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------- |
| visible           | whether to show or hide                                                                                | `boolean`                                                          | `false`     |
| onMaskClick       | triggered when the mask is clicked                                                                     | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -           |
| destroyOnClose    | uninstall content when invisible                                                                       | `boolean`                                                          | `false`     |
| forceRender       | render content forcely                                                                                 | `boolean`                                                          | `false`     |
| color             | color of the mask                                                                                      | `'black' \| 'white'`                                               | `'black'`   |
| opacity           | opacity                                                                                                | `'default' \| 'dark' \| number`                                    | `'default'` |
| getContainer      | to get the specified mounted `HTML` node, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `null`      |
| afterShow         | triggered after fullly displayed                                                                       | `() => void`                                                       | -           |
| afterClose        | triggered when completely closed                                                                       | `() => void`                                                       | -           |
| disableBodyScroll | whether to disable `body` scrolling                                                                    | `boolean`                                                          | `true`      |
