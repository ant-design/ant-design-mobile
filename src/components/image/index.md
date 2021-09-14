# Image 图片

<code src="./demos/index.tsx"></code>

## API

| 属性        | 说明                              | 类型                                                     | 默认值   |
| ----------- | --------------------------------- | -------------------------------------------------------- | -------- |
| src         | 图片地址                          | string                                                   | -        |
| alt         | 图片描述                          | string                                                   | -        |
| width       | 图片宽度，如果传入数字则单位为 px | string \| number                                         | -        |
| height      | 图片高度，如果传入数字则单位为 px | string \| number                                         | -        |
| fit         | 图片填充模式                      | 'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down' | 'fill'   |
| placeholder | 加载时的占位                      | ReactNode                                                | 默认占位 |
| fallback    | 加载失败的占位                    | ReactNode                                                | 默认占位 |
| onError     | 加载失败时触发                    | (event) => void                                          | -        |

此外，还支持以下 HTML 原生属性：`crossOrigin`、`decoding`、`loading`、`referrerPolicy`、`sizes`、`srcSet`、`useMap`
