# ImageUploader <Experimental></Experimental>

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>

### Props

| Name          | Description                                                                                                                                                              | Type                                                                   | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------- |
| value         | List of uploaded files                                                                                                                                                   | `ImageUploadItem[]`                                                    | -         |
| defaultValue  | Default list of uploaded files                                                                                                                                           | `ImageUploadItem[]`                                                    | -         |
| onChange      | Triggered when the list of uploaded files changing                                                                                                                       | `(items: ImageUploadItem[]) => void`                                   | -         |
| accept        | The file types, `image/gif` `image/jpeg` `image/jpg` `image/png`                                                                                                         | `string`                                                               | `image/*` |
| multiple      | Whether to support selecting multiple pictures                                                                                                                           | `boolean`                                                              | `false`   |
| maxCount      | To control how many pictures to be uploaded at most, the upload button would be automatically hidden if the number is exceeded, `0` means no limit                       | `number`                                                               | `0`       |
| onCountExceed | Triggered when the number of pictures selected by the user exceeds the maximum limit                                                                                     | `(exceed: number) => void`                                             | -         |
| disableUpload | Whether to disable the upload button                                                                                                                                     | `boolean`                                                              | `false`   |
| showUpload    | Whether to display the upload button                                                                                                                                     | `boolean`                                                              | `true`    |
| deletable     | Whether to show the delete button                                                                                                                                        | `boolean`                                                              | `true`    |
| capture       | Picture selection mode, the optional value is `camera` (directly adjust the camera)                                                                                      | `boolean \| string`                                                    | -         |
| onPreview     | Callback when the preview picture is clicked                                                                                                                             | `(index: number, item: ImageUploadItem) => void`                       | -         |
| beforeUpload  | Callback function before file reading, return `null` to terminate file reading, support return `Promise`                                                                 | `(file: File, files: File[]) => Promise<File \| null> \| File \| null` | -         |
| upload        | Upload method, the input parameter is the file object that needs to be uploaded, after asynchronous processing, the upload result is returned                            | `(file: File) => Promise<ImageUploadItem>`                             | -         |
| onDelete      | Triggered when the successfully uploaded image is deleted, if it returns false, it means that it is prevented from being deleted, and it supports the return of Promise. | `(item: ImageUploadItem) => boolean \| Promise<boolean> \| void`       | -         |
| children      | Custom upload button                                                                                                                                                     | `ReactNode`                                                            | -         |
| preview       | Whether to support preview                                                                                                                                               | `boolean`                                                              | `true`    |
| showFailed    | Whether to display pictures in the failed uploading state                                                                                                                | `boolean`                                                              | `true`    |
| imageFit      | The fill mode of the image, same as [Image](./image#props)                                                                                                               | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`             | `cover`   |

### ImageUploadItem

| Name         | Description                                   | Type               | Default         |
| ------------ | --------------------------------------------- | ------------------ | --------------- |
| key          | Unique identifier                             | `string \| number` | The array index |
| url          | The resource address of the picture           | `string`           | -               |
| thumbnailUrl | The resource address of the thumbnail picture | `string`           | `url`           |
| extra        | Attach some extra data                        | `any`              | -               |

### CSS Variables

| Name        | Description                         | Default |
| ----------- | ----------------------------------- | ------- |
| --cell-size | The size of image and upload button | `80px`  |
