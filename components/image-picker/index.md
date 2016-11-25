---
category: Components
type: Form
chinese: 图片选择
english: ImagePicker
--------------------

用户根据提示将自己本地图片（包含本地和云储存）上传到网站，并且可以更改或撤销。

### 规则
- 上传时提供大图预览功能。


## API

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|--------------------|
| files    | 图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性     | Array  | []  |
| onChange    | files值发生变化触发的回调, operationType 操作类型有添加（add）,移除（remove）,如果是移除操作,则第三个参数代表的是移除图片的索引  | Function(files, operationType, index) |   |
| onImageClick(`web`)    | 点击图片触发的回调  | Function(index, files) |   |
| onAddImageClick(`web`) | 自定义选择图片的方法  | Function |   |
| selectable(`web`) | 是否显示添加按钮  | boolean |  true |
