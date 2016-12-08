---
category: Components
type: Data Entry
chinese: 搜索栏
english: SearchBar
source: design
---

一般可位于 NavBar 下方，通过『取消按钮』退出激活状态。

### 规则

- 提供提示文案，帮助用户输入，eg：关键词、双十一特卖。
- 在搜索栏下方，可提供有用的标签文案，帮助用户通过点击直接完成输入，eg：最近搜索的内容。

## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| defaultValue |    搜索框的默认值     | String |    |
| value    |    搜索框的当前值     | String |    |
| placeholder    |    placeholder     | String |    |
| onSubmit    |    点击键盘的 enter 会触发 submit 事件    | (val: string): void |    |
| onChange    |    change 事件的回调     | (val: string): void |    |
| onFocus    |    focus 事件的回调     | (): void |    |
| onBlur    |    blur 事件的回调     | (): void |    |
| onCancel  | 点击`取消`链接,只会触发 onCancel 事件, 组件不再主动清除内部的 value 以及触发 onChange 事件  | (val: string): void |    |
| showCancelButton    |    是否一直显示`取消`按钮     | bool |  `false`  |
| cancelText    |   定制`取消`按钮的文字,     | String |  `取消`  |
| disabled    |    禁用搜索栏,搜索栏只用于显示     | bool |  `false`  |
| onClear(`web only`)    |    点击 clear 图标     | Func |    |

注：RN 版本更多 API 请参考 [http://facebook.github.io/react-native/docs/textinput.html](http://facebook.github.io/react-native/docs/textinput.html)
