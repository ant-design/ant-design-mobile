# WaterMark 水印

页面上添加特定的文字或图案。

## 何时使用

适用于防止信息盗用。

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## WaterMark

### 属性

| 参数        | 说明                                                 | 类型               | 默认值               |
| ----------- | ---------------------------------------------------- | ------------------ | -------------------- |
| content     | 水印文字内容                                         | `string`           | -                    |
| fontColor   | 水印文字颜色                                         | `string`           | `rgba(0, 0, 0, .15)` |
| fontSize    | 文字大小                                             | `string \| number` | `16`                 |
| fullPage    | 是否覆盖整个页面                                     | `boolean`          | `true`               |
| gapX        | 水印之间的水平间距                                   | `number`           | `24`                 |
| gapY        | 水印之间的垂直间距                                   | `number`           | `48`                 |
| height      | 水印的高度                                           | `number`           | `64`                 |
| image       | 图片源，建议导出 2 倍或 3 倍图，优先使用图片渲染水印 | `string`           | -                    |
| imageHeight | 图片高度                                             | `number`           | `64`                 |
| imageWidth  | 图片宽度                                             | `number`           | `120`                |
| rotate      | 水印绘制时，旋转的角度，单位 °                       | `number`           | `-22`                |
| width       | 水印的宽度                                           | `number`           | `120`                |
| zIndex      | 追加的水印元素的 z-index                             | `number`           | `2000`               |

### CSS 变量

| 属性      | 说明                 | 默认值 | 全局变量                   |
| --------- | -------------------- | ------ | -------------------------- |
| --z-index | 水印浮层的 `z-index` | `2000` | `--adm-water-mark-z-index` |
