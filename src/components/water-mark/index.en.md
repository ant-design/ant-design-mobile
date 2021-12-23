# WaterMark

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

| Name        | Description                                                                                          | Type               | Default              |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------ | -------------------- |
| width       | The width of the WaterMark                                                                           | `number`           | `120`                |
| height      | The height of the WaterMark                                                                          | `number`           | `64`                 |
| rotate      | When the watermark is drawn, the angle of rotation, in °                                             | `number`           | `-22`                |
| image       | Image source, it is recommended to export 2x or 3x image, give priority to image rendering watermark | `string`           | -                    |
| imageWidth  | Image width                                                                                          | `number`           | `120`                |
| imageHeight | Image height                                                                                         | `number`           | `64`                 |
| zIndex      | Z-index of the added watermark element                                                               | `number`           | `2000`               |
| content     | WaterMark text content                                                                               | `string`           | -                    |
| fontColor   | WaterMark text color                                                                                 | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | WaterMark text font size                                                                             | `string \| number` | `16`                 |
| gapX        | Horizontal spacing between watermarks                                                                | `number`           | `24`                 |
| gapY        | Vertical spacing between watermarks                                                                  | `number`           | `48`                 |
| fullPage    | Whether to cover the whole page                                                                      | `boolean`          | `true`               |

### CSS Variables

| Name      | Description                       | Default | Global                     |
| --------- | --------------------------------- | ------- | -------------------------- |
| --z-index | `z-index` of the water mark layer | `2000`  | `--adm-water-mark-z-index` |
