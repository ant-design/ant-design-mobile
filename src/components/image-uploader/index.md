# ImageUploader 图片上传

## 基础用法

文件上传完毕后会触发 onAfterRead 回调函数，获取到对应的 file 对象，删除一定要传入 onDelete 方法，重新设置 fileList。

<code src="./demos/demo1.tsx"></code>

## API

### ImageUploader

| 属性         | 说明                                                              | 类型                                                                  | 默认值 |
| ------------ | ----------------------------------------------------------------- | --------------------------------------------------------------------- | ------ |
| fileList     | 已经上传的文件列表                                                | FileItem[]                                                            | -      |
| accept       | 文件类型，`image/gif` `image/jpeg` `image/jpg` `image/png`        | string[]                                                              | `all`  |
| disabled     | 是否禁用文件上传                                                  | boolean                                                               | false  |
| showUpload   | 是否展示文件上传按钮                                              | boolean                                                               | true   |
| deletable    | 是否展示删除按钮                                                  | boolean                                                               | true   |
| capture      | 图片选取模式，可选值为 camera(直接调起摄像头)                     | string                                                                | -      |
| maxSize      | 文件大小限制，单位为`byte`                                        | number                                                                | -      |
| maxCount     | 文件上传数量限制                                                  | number                                                                | -      |
| onPreview    | 点击预览图片                                                      | (index: number) => void                                               | -      |
| onChange     | 上传、删除图片都会调用                                            | (files: FileItem[]) => void                                           | -      |
| onDelete     | 删除图片的回调，files 是删除后剩余的文件列表                      | (files: FileItem[], index: number) => void                            | -      |
| onOversize   | 超出文件大小之后的回调                                            | (file: File) => void                                                  | -      |
| onOverCount  | 超出数量之后的回调, count 为超出的个数                            | (count: number) => void                                               | -      |
| onBeforeRead | 文件读取前的回调函数，返回 false 可终止文件读取，支持返回 Promise | ( file: File \| File[] ) => PromiseOrNot<File \| File[] \| undefined> | -      |
| onAfterRead  | 文件读取完成后的回调函数,可以这里上传到服务器                     | (files: FileItem[]) => void                                           | -      |

### FileItem

`file-list` 为一个对象数组，数组中的每一个对象包含以下 `key`

| 参数      | 说明                             |
| --------- | -------------------------------- |
| url       | 图片的资源地址                   |
| status    | `loading` 、 `error`、 `success` |
| deletable | 是否可以删除, `boolean` 类型的值 |
