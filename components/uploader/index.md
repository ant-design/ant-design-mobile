---
category: Components
type: Components
chinese: 图片上传
english: Uploader
-----------------

简单的图片上传,可以删除已选照片,或者选择新图片,通过onChange事件将新的图片数组传递给父组件,父组件处理完后,将结果更新到files。

## 如何使用


## API

### TabItem
| 成员        | 说明           | 类型      |     可选值    | 默认值       |
|------------|----------------|--------------------|--------------|
| files    | 图片文件数组,元素为对象,包含属性url（必选）,可能还有id, orientation。     | Array |  | []  |
| onChange    | files值发生变化触发的回调        | Function(files) | |    |
| maxUpload    | 上传上限,当大于等于上限时,添加图片的按钮不显示        | Number |  |  10  |
