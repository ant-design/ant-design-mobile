# ErrorBlock

<code src="./demos/demo-basic.tsx"></code>

<code src="./demos/demo-full-page.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name        | Description                          | Type                                               | Default     |
| ----------- | ------------------------------------ | -------------------------------------------------- | ----------- |
| status      | The Default error type               | `'default' \| 'disconnected' \| 'empty' \| 'busy'` | `'default'` |
| title       | Title                                | `ReactNode`                                        | -           |
| description | Description                          | `ReactNode`                                        | -           |
| image       | Image                                | `string \| ReactElement`                           | -           |
| fullPage    | Whether it is a whole page exception | `boolean`                                          | `false`     |

### CSS Variables

| Name                     | Description                            | Default | Global                                     |
| ------------------------ | -------------------------------------- | ------- | ------------------------------------------ |
| --image-height           | Height of the image                    | `100px` | `--adm-error-block-image-height`           |
| --image-height-full-page | Height of the image in `fullPage` mode | `200px` | `--adm-error-block-image-height-full-page` |
| --image-width            | Width of the image                     | `auto`  | `--adm-error-block-image-width`            |
| --image-width-full-page  | Width of the image in `fullPage` mode  | `auto`  | `--adm-error-block-image-width-full-page`  |
