# ImageViewer

<code src="./demos/demo1.tsx"></code>

## ImageViewer

| Name         | Description                                                                                                                 | Type                                       | Default         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| image        | The `url` of the image resource                                                                                             | `string`                                   | -               |
| maxZoom      | The maximum zoom ratio                                                                                                      | `number`                                   | `3`             |
| getContainer | To get the specified mounted HTML node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| visible      | Whether to show or hide                                                                                                     | `boolean`                                  | `false`         |
| onClose      | Triggered when it is closed                                                                                                 | `boolean`                                  | -               |
| afterClose   | Triggered when it is completely closed                                                                                      | `() => void`                               | -               |

## ImageViewer.Multi

On the basis of `ImageViewer`, the following props have been added:

| Name          | Description                                 | Type                      | Default |
| ------------- | ------------------------------------------- | ------------------------- | ------- |
| images        | Url list of image resources                 | `string[]`                | `[]`    |
| defaultIndex  | Which picture would be displayed by default | `number`                  | `0`     |
| onIndexChange | Triggered when the picture is switched      | `(index: number) => void` | -       |

At the same time, the `image` prop is removed.

### Ref

| Name    | Description                   | Type                                          |
| ------- | ----------------------------- | --------------------------------------------- |
| swipeTo | Switch to the specified index | `(index: number, immediate: boolean) => void` |

## Imperative

Compared with the component-based usage above, the command-style is more convenient and more commonly used. In most cases, this method is recommended:

```ts | pure
const handler = ImageViewer.show(props)
const handlerMulti = ImageViewer.Multi.show(props)
```

You can directly enter the image view by calling the `show` method on the `ImageViewer`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported. When the viewer is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following props:

| Name  | Description                       | Type         |
| ----- | --------------------------------- | ------------ |
| close | Function to close the ImageViewer | `() => void` |

If you want to close all ImageViewers created by the `show` method. You can call `ImageViewer.clear()`.
