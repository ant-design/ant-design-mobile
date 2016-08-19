---
category: Components
type: Components
chinese: 图片选择
english: ImagePicker
--------------------

简单的图片上传,可以删除已选照片,或者选择新图片,通过onChange事件将新的图片数组传递给父组件,父组件处理完后,将结果更新到files。

orientation值代表图片方向,请参考http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side

### 定义／Definition
用户根据提示将自己本地的相应图片（包含本地和云储存）上传到网站，并且可以更改或撤销上传行为。

### 规则 / Rule
1. 图片上传时需要提供大图预览功能；
2. 图片尺寸自定义，图片之间间距为4*n，一般根据容器大小进行栅格布局，一行的上限是4张并列图片。


## API

### TabItem
| 成员        | 说明           | 类型      |     可选值    | 默认值       |
|------------|----------------|--------------------|--------------|
| files    | 图片文件数组,元素为对象,包含属性url（必选）,可能还有id, orientation,以及业务需要的其它属性     | Array |  | []  |
| onChange    | files值发生变化触发的回调        | Function(files) | |    |
