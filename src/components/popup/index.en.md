# Popup

<code src="./demos/index.tsx"></code>

# API

| Name           | Description                                                                                                                   | Type                                                               | Default         |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------- |
| visible        | whether visible                                                                                                               | `boolean`                                                          | `false`         |
| onMaskClick    | triggered when the mask is clicked                                                                                            | `(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void` | -               |
| destroyOnClose | unmount content when not visible                                                                                              | `boolean`                                                          | `false`         |
| forceRender    | render content forcely                                                                                                        | `boolean`                                                          | `false`         |
| getContainer   | to get the specified mounted `HTML` node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null`                         | `document.body` |
| afterClose     | triggered when completely closed                                                                                              | `() => void`                                                       | -               |
| position       | the specified location of the pop-up                                                                                          | `'bottom' \| 'top' \| 'left' \| 'right'`                           | `'bottom'`      |
| className      | container class name                                                                                                          | `string`                                                           | -               |
| style          | container style                                                                                                               | `React.CSSProperties`                                              | -               |
| bodyClassName  | content section class name                                                                                                    | `string`                                                           | -               |
| bodyStyle      | content section style                                                                                                         | `React.CSSProperties`                                              | -               |
| maskClassName  | mask class name                                                                                                               | `string`                                                           | -               |
| maskStyle      | mask style                                                                                                                    | `React.CSSProperties`                                              | -               |
| onClick        | triggered when clicked, used to stop event bubbles usually                                                                    | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void`    | -               |
