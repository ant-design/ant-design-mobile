# ImageViewer

<code src="./demos/index.tsx"></code>

## API

### ImageViewer

| Name         | Description                                                                                                                 | Type                                       | Default         |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------- |
| image        | the `url` of the image resource                                                                                             | `string`                                   | -               |
| maxZoom      | the maximum zoom ratio                                                                                                      | `number`                                   | `3`             |
| getContainer | to get the specified mounted HTML node, the default is `body`, if `null` returned, it would be rendered to the current node | `HTMLElement \| () => HTMLElement \| null` | `document.body` |
| visible      | whether to show or hide                                                                                                     | `boolean`                                  | `false`         |
| onClose      | triggered when it is closed                                                                                                 | `boolean`                                  | -               |
| afterClose   | triggered when it is completely closed                                                                                      | `() => void`                               | -               |

### ImageViewer.Multi

On the basis of `ImageViewer`, the following props have been added:

| Name          | Description                                 | Type                      | Default |
| ------------- | ------------------------------------------- | ------------------------- | ------- |
| images        | url list of image resources                 | `string[]`                | `[]`    |
| defaultIndex  | which picture would be displayed by default | `number`                  | `0`     |
| onIndexChange | triggered when the picture is switched      | `(index: number) => void` | -       |

At the same time, the `image` prop is removed.

### 指令式

Compared with the component-based usage above, the command-style is more convenient and more commonly used. In most cases, this method is recommended:

```ts | pure
const handler = ImageViewer.show(props)
const handlerMulti = ImageViewer.Multi.show(props)
```

You can directly enter the image view by calling the `show` method on the `ImageViewer`. The type of the `props` parameter is the same as the above table, but the `visible` prop is not supported. When the viewer is closed, the component instance would be automatically destroyed.

The return value of the `show` method is a component controller, which contains the following props:

| Name  | Description                       | Type         |
| ----- | --------------------------------- | ------------ |
| close | function to close the ImageViewer | `() => void` |
