---
category: Components
type: Data Entry
title: ImagePicker
subtitle: 图片选择器
---

注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能. 选择器中使用了Promise，请参考[Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)中兼容性的说明. 如果必要，可以参考[/docs/react/introduce-cn](/docs/react/introduce-cn)进行兼容性处理.

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| files    | 图片文件数组,元素为对象,包含属性 url（必选, 可能还有id, orientation, 以及业务需要的其它属性     | Array  | []  |
| onChange    | files 值发生变化触发的回调函数, operationType 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引  | (files: Object, operationType: string, index: number): void |   |
| onImageClick    | 点击图片触发的回调  | (index: number, files: Object): void |   |
| onAddImageClick  | 自定义选择图片的方法  | (): void |   |
| onFail | 选择失败  | (msg: string): void |   |
| selectable | 是否显示添加按钮  | boolean |  true |
| multiple | 是否支持多选  | boolean |  false |
| accept | 图片类型  | string |  image/* |
| length | 单行的图片数量  | string \| number | 4 |
| capture | 图片捕获设置, 具体请参考[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input)中关于capture的说明 | boolean \| string | false |
| disableDelete | 是否隐藏删除按钮 | boolean | false |