---
category: Components
type: Data Entry
chinese: 图片选择
english: ImagePicker
---

用户根据提示将自己本地图片（包含本地和云储存）上传到网站，并且可以更改或撤销。

### 规则
- 上传时提供大图预览功能。


## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|--------------------|
| files    | 图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性     | Array  | []  |
| onChange    | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引  | (files: Object, operationType: string, index: number): void |   |
| onImageClick(`web only`)    | 点击图片触发的回调  | (index: number, files: Object): void |   |
| onAddImageClick(`web only`) | 自定义选择图片的方法  | (): void |   |
| selectable(`web only`) | 是否显示添加按钮  | boolean |  true |

> 注: RN 版本回传 assets-library (性能考虑)，需要使用 native 模块进行上传，可参考 https://github.com/facebook/react-native/issues/201
