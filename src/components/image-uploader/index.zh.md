# ImageUploader 图片上传 <Experimental></Experimental>

## 示例

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

## ImageUploader

### 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| accept | 文件类型，`image/gif` `image/jpeg` `image/jpg` `image/png` | `string` | `image/*` |
| beforeUpload | 文件读取前的回调函数，返回 `null` 可终止文件读取，支持返回 `Promise` | `(file: File, files: File[]) => Promise<File \| null> \| File \| null` | - |
| capture | 图片选取模式，可选值为 `camera`（直接调起摄像头） | `boolean \| string` | - |
| children | 自定义上传按钮 | `ReactNode` | - |
| columns | 列数 | `number` | - |
| defaultValue | 默认已上传的文件列表 | `ImageUploadItem[]` | - |
| deletable | 是否展示删除按钮 | `boolean` | `true` |
| deleteIcon | 删除按钮的 `icon` 图标 | `ReactNode` | `<CloseOutline />` |
| disableUpload | 是否禁用上传按钮 | `boolean` | `false` |
| imageFit | 图片填充模式，同 [Image](/zh/components/image#属性) | `'contain' \| 'cover' \| 'fill' \| 'none' \| 'scale-down'` | `cover` |
| maxCount | 最多上传几张图片，超出数量会自动隐藏上传按钮，`0` 表示不做限制 | `number` | `0` |
| multiple | 是否支持选择多张图片 | `boolean` | `false` |
| onChange | 已上传的文件列表变化时触发 | `(items: ImageUploadItem[]) => void` | - |
| onCountExceed | 用户选择的图片数量超出最大限制时触发 | `(exceed: number) => void` | - |
| onDelete | 删除已上传成功的图片时触发，如果返回 `false` 表示阻止删除，支持返回 `Promise` | `(item: ImageUploadItem) => boolean \| Promise<boolean> \| void` | - |
| onPreview | 点击预览图片 | `(index: number, item: ImageUploadItem) => void` | - |
| preview | 是否支持预览 | `boolean` | `true` |
| showFailed | 是否展示上传失败状态下的图片 | `boolean` | `true` |
| showUpload | 是否展示上传按钮 | `boolean` | `true` |
| upload | 上传方法，入参是需要被上传的文件对象，经过异步处理之后，返回上传结果 | `(file: File) => Promise<ImageUploadItem>` | - |
| value | 已上传的文件列表 | `ImageUploadItem[]` | - |
| onUploadQueueChange | 图片上传队列变化时触发 | `(tasks: UploadTask[]) => void` | - |
| renderItem | 自定义上传列表项 | `(originNode: React.ReactElement, file: ImageUploadItem, fileList: ImageUploadItem[] ) => React.ReactNode` | - |

### Ref

| 属性          | 说明           | 类型                       | 版本   |
| ------------- | -------------- | -------------------------- | ------ |
| nativeElement | 原生输入框节点 | `HTMLInputElement \| null` | 5.33.0 |

### ImageUploadItem

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| extra | 附带一些额外信息，可以业务中自己随意定义 | `any` | - |
| key | 唯一标识 | `string \| number` | 数组下标 |
| thumbnailUrl | 缩略图的资源地址 | `string` | `url` |
| url | 图片的资源地址 | `string` | - |

### UploadTask

| 属性   | 说明         | 类型                               | 默认值 |
| ------ | ------------ | ---------------------------------- | ------ |
| id     | 上传图片 id  | `number`                           | -      |
| status | 图片上传状态 | `'pending' \| 'fail' \| 'success'` | -      |

### CSS 变量

| 属性 | 说明 | 默认值 |
| --- | --- | --- |
| --cell-size | 图片和上传按钮的大小（仅在非 columns 模式下有效） | `80px` |
| --gap | 间距大小 | `12px` |
| --gap-horizontal | 水平方向的间距大小 | `var(--gap)` |
| --gap-vertical | 垂直方向的间距大小 | `var(--gap)` |

## FAQ

### 配置了 `capture` 属性，为什么部分安卓机型还是会带上文件选项？

ImageUploader 所提供的 `capture` 是来自 HTML 原生的能力，而在部分操作系统/浏览器环境下，可能并不支持该属性，因此这个问题无法避免。

详见此 [issue](https://github.com/ant-design/ant-design-mobile/issues/5254) 中的讨论。

### `columns` 属性说明

`columns` 属性依赖 [Grid](./grid) 布局，该属性存在时，不支持自定义 `--cell-size` 属性，因为图片和上传按钮的大小是自动计算的。

### 如何在 App 中使用客户端提供的上传能力？

可以通过 `disableUpload` 禁用原生上传，然后自定义上传按钮。

```tsx
const App = () => {
  const [fileList, setFileList] = useState([])

  const handleUpload = async () => {
    // 调用app上传
    const url = await hybrid.upload()
    setFileList(fileList => [...fileList, { url }])
  }

  return (
    <ImageUploader
      value={fileList}
      onChange={setFileList}
      disableUpload
    >
      <span
        className='adm-image-uploader-cell adm-image-uploader-upload-button'
        onClick={handleUpload}
      >
        <span className='adm-image-uploader-upload-button-icon'>
          <AddOutline />
        </span>
      </span>
    </ImageUploader>
  )
}
```
