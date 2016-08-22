---
category: UI Bars
type: UI Bars
chinese: 搜索栏
english: SearchBar
---


### 定义／Definition
苹果风格的搜索栏，带有一个自动隐藏的取消按钮。适合作为主搜索固定在页面顶部

### 规则 / Rule
1. 输入前搜索必须要有默认的搜索建议，如“请输入关键字”，”双十一口红特卖”
2. 输入时提供搜索自动补全
3. 输入时提供清除按钮、取消按钮
4. 输入时提供历史记录
5. 输入后提供回取消、上一步功能
6. 业务场景需要时，搜索建议可凸显为匹配的部分，与其他部分做区分



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
| onCancel    |    点击`取消`链接,只会触发onCancel事件,组件不再主动清除内部的value以及触发onChange事件。     | Func |    |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelText    |   定制`取消`按钮的文字,     | bool |  `取消`  |
| disabled    |    禁用搜索栏,搜索栏只用于显示     | bool |  `false`  |
