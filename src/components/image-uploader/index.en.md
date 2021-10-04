# ImageUploader

<code src="./demos/demo1.tsx"></code>

## API

### ImageUploader

| Name          | Description                                                                                                                                                              | Type                                                      | Default   |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- | --------- |
| value         | list of uploaded files                                                                                                                                                   | `FileItem[]`                                              | -         |
| defaultValue  | default list of uploaded files                                                                                                                                           | `FileItem[]`                                              | -         |
| onChange      | triggered when the list of uploaded files changing                                                                                                                       | `(files: FileItem[]) => void`                             | -         |
| accept        | the file types, `image/gif` `image/jpeg` `image/jpg` `image/png`                                                                                                         | `string`                                                  | `image/*` |
| multiple      | whether to support selecting multiple pictures                                                                                                                           | `boolean`                                                 | `false`   |
| maxCount      | to control how many pictures to be uploaded at most, the upload button would be automatically hidden if the number is exceeded, `0` means no limit                       | `number`                                                  | `0`       |
| onCountExceed | triggered when the number of pictures selected by the user exceeds the maximum limit                                                                                     | `(exceed: number) => void`                                | -         |
| disableUpload | whether to disable the upload button                                                                                                                                     | `boolean`                                                 | `false`   |
| showUpload    | whether to display the upload button                                                                                                                                     | `boolean`                                                 | `true`    |
| deletable     | whether to show the delete button                                                                                                                                        | `boolean`                                                 | `true`    |
| capture       | picture selection mode, the optional value is `camera` (directly adjust the camera)                                                                                      | `boolean \| string`                                       | -         |
| onPreview     | callback when the preview picture is clicked                                                                                                                             | `(index: number) => void`                                 | -         |
| beforeUpload  | callback function before file reading, return `false` to terminate file reading, support return `Promise`                                                                | `(file: File[]) => Promise<File[]> \| File[]`             | -         |
| upload        | upload method, the input parameter is the file object that needs to be uploaded, after asynchronous processing, the upload result is returned                            | `(file: File) => Promise<FileItem>`                       | -         |
| onDelete      | triggered when the successfully uploaded image is deleted, if it returns false, it means that it is prevented from being deleted, and it supports the return of Promise. | `(file: FileItem) => boolean \| Promise<boolean> \| void` | -         |

### FileItem

| Name | Description                         | Type     | Default |
| ---- | ----------------------------------- | -------- | ------- |
| url  | the resource address of the picture | `string` | -       |
