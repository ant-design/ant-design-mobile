# ImageUplader 图片上传

<code src="./demos/demo1.tsx" />

# API

## ImageUplader

| 属性       | 说明                                                       | 类型                    | 默认值 | 是否必填 | 是否完成 |
| ---------- | ---------------------------------------------------------- | ----------------------- | ------ | -------- | -------- |
| fileList   | 已经上传的文件列表                                         | FileListItem[]          | -      |          | √        |
| accept     | 文件类型，`image/gif` `image/jpeg` `image/jpg` `image/png` | string[]                | `all`  | false    | √        |
| disabled   | 是否禁用文件上传                                           | boolean                 | false  | false    | √        |
| showUpload | 是否展示文件上传按钮                                       | boolean                 | true   | false    | √        |
| deletable  | 是否展示删除按钮                                           | boolean                 | true   | false    | √        |
| capture    | 图片选取模式，可选值为 camera(直接调起摄像头)              | string                  | -      | false    | √        |
| maxSize    | 文件大小限制，单位为`byte`                                 | number                  | -      | false    |
| maxCount   | 文件上传数量限制                                           | number                  | -      | false    | √        |
| onPreview  | 点击预览图片                                               | (index: number) => void | -      | false    | √        |
| onDelete   | 删除图片                                                   | (index: number) => void | -      | false    | √        |
| onOversize | 超出文件大小之后的回调                                     | (file: File) => void    | -      | false    |

### FileListItem

`file-list`  为一个对象数组，数组中的每一个对象包含以下  `key`

| 参数   | 说明                                   |
| ------ | -------------------------------------- |
| url    | 图片和视频的网络资源地址               |
| type   | 文件类型，可选值`image` `video` `file` |
| status | `loading` 、 `error`、 `success`       |
