# ImageUploader 图片上传 <Experimental></Experimental>

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ImageUploader

### 属性

| 属性          | 说明                                                                          | 类型                                                                   | 默认值    |
| ------------- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------- |
| accept        | 文件类型，`image/gif` `image/jpeg` `image/jpg` `image/png`                    | `string`                                                               | `image/*` |
| beforeUpload  | 文件读取前的回调函数，返回 `null` 可终止文件读取，支持返回 `Promise`          | `(file: File, files: File[]) => Promise<File \| null> \| File \| null` | -         |
| capture       | 图片选取模式，可选值为 `camera`（直接调起摄像头）                             | `boolean \| string`                                                    | -         |
| children      | 自定义上传按钮                                                                | `ReactNode`                                                            | -         |
| defaultValue  | 默认已上传的文件列表                                                          | `ImageUploadItem[]`                                                    | -         |
| deletable     | 是否展示删除按钮                                                              | `boolean`                                                              | `true`    |
| disableUpload | 是否禁用上传按钮                                                              | `boolean`                                                              | `false`   |
| imageFit      | 图片填充模式，同 [Image](./image#属性)                                        | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`             | `cover`   |
| maxCount      | 最多上传几张图片，超出数量会自动隐藏上传按钮，`0` 表示不做限制                | `number`                                                               | `0`       |
| multiple      | 是否支持选择多张图片                                                          | `boolean`                                                              | `false`   |
| onChange      | 已上传的文件列表变化时触发                                                    | `(items: ImageUploadItem[]) => void`                                   | -         |
| onCountExceed | 用户选择的图片数量超出最大限制时触发                                          | `(exceed: number) => void`                                             | -         |
| onDelete      | 删除已上传成功的图片时触发，如果返回 `false` 表示阻止删除，支持返回 `Promise` | `(item: ImageUploadItem) => boolean \| Promise<boolean> \| void`       | -         |
| onPreview     | 点击预览图片                                                                  | `(index: number, item: ImageUploadItem) => void`                       | -         |
| preview       | 是否支持预览                                                                  | `boolean`                                                              | `true`    |
| showFailed    | 是否展示上传失败状态下的图片                                                  | `boolean`                                                              | `true`    |
| showUpload    | 是否展示上传按钮                                                              | `boolean`                                                              | `true`    |
| upload        | 上传方法，入参是需要被上传的文件对象，经过异步处理之后，返回上传结果          | `(file: File) => Promise<ImageUploadItem>`                             | -         |
| value         | 已上传的文件列表                                                              | `ImageUploadItem[]`                                                    | -         |

### ImageUploadItem

| 属性         | 说明                                     | 类型               | 默认值   |
| ------------ | ---------------------------------------- | ------------------ | -------- |
| extra        | 附带一些额外信息，可以业务中自己随意定义 | `any`              | -        |
| key          | 唯一标识                                 | `string \| number` | 数组下标 |
| thumbnailUrl | 缩略图的资源地址                         | `string`           | `url`    |
| url          | 图片的资源地址                           | `string`           | -        |

### CSS 变量

| 属性        | 说明                 | 默认值 |
| ----------- | -------------------- | ------ |
| --cell-size | 图片和上传按钮的大小 | `80px` |
