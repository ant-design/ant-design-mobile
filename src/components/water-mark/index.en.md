# WaterMark

<code src="./demos/demo1.tsx"></code>

## API

### Basic Props

| Name        | Description                                                                                          | Type               | Default              |
| ----------- | ---------------------------------------------------------------------------------------------------- | ------------------ | -------------------- |
| width       | the width of the WaterMark                                                                           | `number`           | `120`                |
| height      | the height of the WaterMark                                                                          | `number`           | `64`                 |
| rotate      | when the watermark is drawn, the angle of rotation, in °                                             | `number`           | `-22`                |
| image       | image source, it is recommended to export 2x or 3x image, give priority to image rendering watermark | `string`           | -                    |
| imageWidth  | image width                                                                                          | `number`           | `120`                |
| imageHeight | image height                                                                                         | `number`           | `64`                 |
| zIndex      | z-index of the added watermark element                                                               | `number`           | `2000`               |
| content     | WaterMark text content                                                                               | `string`           | -                    |
| fontColor   | WaterMark text color                                                                                 | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | WaterMark text font size                                                                             | `string \| number` | `16`                 |
| gapX        | horizontal spacing between watermarks                                                                | `number`           | `24`                 |
| gapY        | vertical spacing between watermarks                                                                  | `number`           | `48`                 |
