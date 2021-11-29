# ErrorBlock 异常

<code src="./demos/demo-basic.tsx"></code>

<code src="./demos/demo-full-page.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### 属性

| 属性        | 说明           | 类型                                               | 默认值      |
| ----------- | -------------- | -------------------------------------------------- | ----------- |
| status      | 默认错误类型   | `'default' \| 'disconnected' \| 'empty' \| 'busy'` | `'default'` |
| title       | 标题           | `ReactNode`                                        | -           |
| description | 描述           | `ReactNode`                                        | -           |
| image       | 图片           | `string \| ReactElement`                           | -           |
| fullPage    | 是否为整页异常 | `boolean`                                          | `false`     |

### CSS 变量

| 属性                     | 说明                 | 默认值  | 全局变量                                   |
| ------------------------ | -------------------- | ------- | ------------------------------------------ |
| --image-height           | 图片的高度           | `100px` | `--adm-error-block-image-height`           |
| --image-height-full-page | 整页模式下的图片高度 | `200px` | `--adm-error-block-image-height-full-page` |
| --image-width            | 图片的宽度           | `auto`  | `--adm-error-block-image-width`            |
| --image-width-full-page  | 整页模式下的图片宽度 | `auto`  | `--adm-error-block-image-width-full-page`  |
