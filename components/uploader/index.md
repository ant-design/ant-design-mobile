---
category: Components
type: Components
chinese: 图片上传
english: Uploader
-----------------

简单的图片上传,可以删除已选照片,或者选择新图片,通过onChange事件将新的图片数组传递给父组件,父组件处理完后,将结果更新到files。

orientation值代表图片方向,请参考http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side


## 如何使用


## API

### TabItem
| 成员        | 说明           | 类型      |     可选值    | 默认值       |
|------------|----------------|--------------------|--------------|
| files    | 图片文件数组,元素为对象,包含属性url（必选）,可能还有id, orientation,以及业务需要的其它属性     | Array |  | []  |
| onChange    | files值发生变化触发的回调        | Function(files) | |    |
