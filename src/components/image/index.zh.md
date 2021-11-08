# Image 图片

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx" debug></code>

## 属性

| 属性        | 说明                                | 类型                                                             | 默认值   |
| ----------- | ----------------------------------- | ---------------------------------------------------------------- | -------- |
| src         | 图片地址                            | `string`                                                         | -        |
| alt         | 图片描述                            | `string`                                                         | -        |
| width       | 图片宽度，如果传入数字则单位为 `px` | `string \| number`                                               | -        |
| height      | 图片高度，如果传入数字则单位为 `px` | `string \| number`                                               | -        |
| fit         | 图片填充模式                        | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`       | `'fill'` |
| placeholder | 加载时的占位                        | `ReactNode`                                                      | 默认占位 |
| fallback    | 加载失败的占位                      | `ReactNode`                                                      | 默认占位 |
| lazy        | 是否懒加载图片                      | `boolean`                                                        | `false`  |
| onError     | 加载失败时触发                      | `(event: React.SyntheticEvent<HTMLImageElement, Event>) => void` | -        |
| onClick     | 图片点击事件                        | `(event: React.MouseEvent<HTMLImageElement, Event>) => void`     | -        |

此外，还支持以下 HTML 原生属性：`crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`

`width` `height` 属性其实和 CSS 变量 `--width` `--height` 并不冲突，这些组件属性其实就是基于 CSS 变量实现的，只是 CSS 变量的一种快捷设置方式。

## CSS 变量

| 属性     | 说明     | 默认值 | 全局变量             |
| -------- | -------- | ------ | -------------------- |
| --width  | 图片宽度 | `auto` | `--adm-image-width`  |
| --height | 图片高度 | `auto` | `--adm-image-height` |
