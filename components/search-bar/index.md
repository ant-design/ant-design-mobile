---
category: Components
type: Components
chinese: 搜索栏
english: SearchBar
---

搜索栏

## 何时使用

看demo就了然了吧

## API

### SearchBar
| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| value    |    搜索框的默认值     | String |    |
| placeholder    |    placeholder     | String |    |
| onSubmit    |    点击键盘的enter会触发submit事件     | Func |    |
| onChange    |    change事件的回调     | Func |    |
| onFocus    |    focus事件的回调     | Func |    |
| onBlur    |    blur事件的回调     | Func |    |
| onClear    |    点击clear图标     | Func |    |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelTxt    |   定制`取消`按钮的文字,     | bool |  `取消`  |
| disablSearch    |    禁用搜索栏,搜索栏只用于显示     | bool |  `false`  |
