---
category: Components
type: Data Entry
title: ImagePicker
---

Note: Just for selecting picture. Generally `ImagePicker` is used to select picture before uploading, but without the feature of uploading. In this Component, we use Promise. Please refer to the description of compatibility in this [Promise document](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise).If necessary, refer to [/docs/react/introduce-cn](/docs/react/introduce) for compatibility processing.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| files    | Picture files array which includes `url`(required) in each object | Array  | []  |
| onChange    |   Callback is called when the value of `files` is changed. The `operationType` is one of `add` or `remove`(the third argument is the removed index).| (files: Object, operationType: string, index: number): void |   |
| onImageClick   | Callback is called when the user clicks the selected picture | (index: number, files: Object): void |   |
| onAddImageClick | Callback is called when the selector button is clicked   | (): void |   |
| onFail | failed selection | (msg: string): void |   |
| selectable | whether to show selector button  | boolean |  true |
| multiple | whether support choose multi images at once  | boolean |  false |
| accept | File type accept  | string |  image/* |
| length | Number of images in line  | string \| number | 4 |
| capture | Image capture setting, please refer to the description of capture in [MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) | boolean \| string | false |
| disableDelete | whether to hide delete icon | boolean | false |