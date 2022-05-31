# WaterMark

Add specific text or patterns to the page.

## When to Use

Suitable for preventing information theft.

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## WaterMark

### Props

| Name        | Description                                                                                          | Type               | Default              |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------ | -------------------- |
| content     | WaterMark text content                                                                               | `string`           | -                    |
| fontColor   | WaterMark text color                                                                                 | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | WaterMark text font size                                                                             | `string \| number` | `16`                 |
| fullPage    | Whether to cover the whole page                                                                      | `boolean`          | `true`               |
| gapX        | Horizontal spacing between watermarks                                                                | `number`           | `24`                 |
| gapY        | Vertical spacing between watermarks                                                                  | `number`           | `48`                 |
| height      | The height of the WaterMark                                                                          | `number`           | `64`                 |
| image       | Image source, it is recommended to export 2x or 3x image, give priority to image rendering watermark | `string`           | -                    |
| imageHeight | Image height                                                                                         | `number`           | `64`                 |
| imageWidth  | Image width                                                                                          | `number`           | `120`                |
| rotate      | When the watermark is drawn, the angle of rotation, in °                                             | `number`           | `-22`                |
| width       | The width of the WaterMark                                                                           | `number`           | `120`                |
| zIndex      | Z-index of the added watermark element                                                               | `number`           | `2000`               |

### CSS Variables

| Name      | Description                       | Default | Global                     |
| --------- | --------------------------------- | ------- | -------------------------- |
| --z-index | `z-index` of the water mark layer | `2000`  | `--adm-water-mark-z-index` |
