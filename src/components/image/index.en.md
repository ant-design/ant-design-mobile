# Image

<code src="./demos/index.tsx"></code>

## API

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

In addition, the following HTML native attributes are also supported: `crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`
