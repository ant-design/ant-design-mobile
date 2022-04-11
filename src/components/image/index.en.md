# Image

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx" debug></code>

### Props

| Name        | Description                                                         | Type                                                             | Default             |
| ----------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- | ------------------- |
| src         | The address of the image                                            | `string`                                                         | -                   |
| alt         | The description of the image                                        | `string`                                                         | -                   |
| width       | The width of the image, if a number is passed in, the unit is `px`  | `string \| number`                                               | -                   |
| height      | The height of the image, if a number is passed in, the unit is `px` | `string \| number`                                               | -                   |
| fit         | The fill mode of the image                                          | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`       | `'fill'`            |
| placeholder | Placeholder when loading                                            | `ReactNode`                                                      | default placeholder |
| fallback    | Placeholder when failed to load                                     | `ReactNode`                                                      | default placeholder |
| lazy        | Whether to load image lazily                                        | `boolean`                                                        | `false`             |
| onError     | Callback when failed to load                                        | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -                   |
| onClick     | The click event                                                     | `(event: React.MouseEvent<HTMLImageElement, Event>) => void`     | -                   |
| onLoad      | Triggered when image loaded                                         | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -                   |

In addition, the following HTML native attributes are also supported: `crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`

`width` `height` props is not conflict with `--width` `--height`. These components props is actually based on CSS variables, and exists only as a convenient way to set CSS variables.

### CSS Variables

| Name     | Description          | Default | Global               |
| -------- | -------------------- | ------- | -------------------- |
| --width  | The width of image.  | `auto`  | `--adm-image-width`  |
| --height | The height of image. | `auto`  | `--adm-image-height` |

## FAQ

### How to make Image change from block element to inline-block element?

Image is rendered as a block element by default. If you need to make it an inline-block element, you can nest an inline-block container in the outer layer, for example:

```jsx
<div style={{ display: 'inline-block' }}>
  <Image />
</div>
```
