# Image

Previewable pictures.

## When to Use

- Use when you need to show pictures.
- Display loading when loading large images or fault-tolerant handling when loading fails.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx" debug></code>

## Image

### Props

| Name             | Description                                                         | Type                                                             | Default             |
| ---------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------- |
| alt              | The description of the image                                        | `string`                                                         | -                   |
| draggable        | Whether to allow users to drag the image                            | `boolean`                                                        | `false`             |
| fallback         | Placeholder when failed to load                                     | `ReactNode`                                                      | default placeholder |
| fit              | The fill mode of the image                                          | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`       | `'fill'`            |
| height           | The height of the image, if a number is passed in, the unit is `px` | `string \| number`                                               | -                   |
| lazy             | Whether to load image lazily                                        | `boolean`                                                        | `false`             |
| onClick          | The image click event                                               | `(event: React.MouseEvent<HTMLImageElement, Event>) => void`     | -                   |
| onContainerClick | The content click event                                             | `(event: React.MouseEvent<HTMLDivElement, Event>) => void`       | -                   |
| onError          | Callback when failed to load                                        | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -                   |
| onLoad           | Triggered when image loaded                                         | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -                   |
| placeholder      | Placeholder when loading                                            | `ReactNode`                                                      | default placeholder |
| src              | The address of the image                                            | `string`                                                         | -                   |
| width            | The width of the image, if a number is passed in, the unit is `px`  | `string \| number`                                               | -                   |

In addition, the following HTML native attributes are also supported: `crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`

`width` `height` props is not conflict with `--width` `--height`. These components props is actually based on CSS variables, and exists only as a convenient way to set CSS variables.

### CSS Variables

| Name     | Description          | Default | Global               |
| -------- | -------------------- | ------- | -------------------- |
| --height | The height of image. | `auto`  | `--adm-image-height` |
| --width  | The width of image.  | `auto`  | `--adm-image-width`  |

## FAQ

### How to make Image change from block element to inline-block element?

Image is rendered as a block element by default. If you need to make it an inline-block element, you can nest an inline-block container in the outer layer, for example:

```jsx
<div style={{ display: 'inline-block' }}>
  <Image />
</div>
```

### What is the difference between `onContainerClick` and `onClick`?

`onContainerClick` is the container click event, and `onClick` is the image click event. `onClick` will not fire before the image is loaded successfully or after the image fails to load, but `onContainerClick` can be fired normally.
