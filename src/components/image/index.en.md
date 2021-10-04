# Image

<code src="./demos/index.tsx"></code>

## API

| Name        | Description                                                         | Type                                                       | Default             |
| ----------- | ------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------- |
| src         | the address of the image                                            | `string`                                                   | -                   |
| alt         | the description of the image                                        | `string`                                                   | -                   |
| width       | the width of the image, if a number is passed in, the unit is `px`  | `string \| number`                                         | -                   |
| height      | the height of the image, if a number is passed in, the unit is `px` | `string \| number`                                         | -                   |
| fit         | the fill mode of the image                                          | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `'fill'`            |
| placeholder | placeholder when loading                                            | `ReactNode`                                                | default placeholder |
| fallback    | placeholder when failed to load                                     | `ReactNode`                                                | default placeholder |
| onError     | callback when failed to load                                        | `(event) => void`                                          | -                   |

In addition, the following HTML native attributes are also supported: `crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`
