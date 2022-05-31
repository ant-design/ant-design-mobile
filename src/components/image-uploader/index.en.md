# ImageUploader <Experimental></Experimental>

## Demos

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ImageUploader

### Props

| Name          | Description                                                                                                                                                              | Type                                                                   | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- | --------- |
| accept        | The file types, `image/gif` `image/jpeg` `image/jpg` `image/png`                                                                                                         | `string`                                                               | `image/*` |
| beforeUpload  | Callback function before file reading, return `null` to terminate file reading, support return `Promise`                                                                 | `(file: File, files: File[]) => Promise<File \| null> \| File \| null` | -         |
| capture       | Picture selection mode, the optional value is `camera` (directly adjust the camera)                                                                                      | `boolean \| string`                                                    | -         |
| children      | Custom upload button                                                                                                                                                     | `ReactNode`                                                            | -         |
| defaultValue  | Default list of uploaded files                                                                                                                                           | `ImageUploadItem[]`                                                    | -         |
| deletable     | Whether to show the delete button                                                                                                                                        | `boolean`                                                              | `true`    |
| disableUpload | Whether to disable the upload button                                                                                                                                     | `boolean`                                                              | `false`   |
| imageFit      | The fill mode of the image, same as [Image](./image#props)                                                                                                               | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'`             | `cover`   |
| maxCount      | To control how many pictures to be uploaded at most, the upload button would be automatically hidden if the number is exceeded, `0` means no limit                       | `number`                                                               | `0`       |
| multiple      | Whether to support selecting multiple pictures                                                                                                                           | `boolean`                                                              | `false`   |
| onChange      | Triggered when the list of uploaded files changing                                                                                                                       | `(items: ImageUploadItem[]) => void`                                   | -         |
| onCountExceed | Triggered when the number of pictures selected by the user exceeds the maximum limit                                                                                     | `(exceed: number) => void`                                             | -         |
| onDelete      | Triggered when the successfully uploaded image is deleted, if it returns false, it means that it is prevented from being deleted, and it supports the return of Promise. | `(item: ImageUploadItem) => boolean \| Promise<boolean> \| void`       | -         |
| onPreview     | Callback when the preview picture is clicked                                                                                                                             | `(index: number, item: ImageUploadItem) => void`                       | -         |
| preview       | Whether to support preview                                                                                                                                               | `boolean`                                                              | `true`    |
| showFailed    | Whether to display pictures in the failed uploading state                                                                                                                | `boolean`                                                              | `true`    |
| showUpload    | Whether to display the upload button                                                                                                                                     | `boolean`                                                              | `true`    |
| upload        | Upload method, the input parameter is the file object that needs to be uploaded, after asynchronous processing, the upload result is returned                            | `(file: File) => Promise<ImageUploadItem>`                             | -         |
| value         | List of uploaded files                                                                                                                                                   | `ImageUploadItem[]`                                                    | -         |

### ImageUploadItem

| Name         | Description                                   | Type               | Default         |
| ------------ | --------------------------------------------- | ------------------ | --------------- |
| extra        | Attach some extra data                        | `any`              | -               |
| key          | Unique identifier                             | `string \| number` | The array index |
| thumbnailUrl | The resource address of the thumbnail picture | `string`           | `url`           |
| url          | The resource address of the picture           | `string`           | -               |

### CSS Variables

| Name        | Description                         | Default |
| ----------- | ----------------------------------- | ------- |
| --cell-size | The size of image and upload button | `80px`  |
