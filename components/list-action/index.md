---
category: Components
type: Components
chinese: 滑动或长按操作
english: ListAction
---

滑动（ iOS ）或长按（ android ）操作组件。

## 何时使用

需要接入类似 iOS 滑动删除或 android 长按 等操作。

## API

### ListAction

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| prefixCls       | className prefix     | String | `rc-swipeout` |
| style           | swipeout style       | Object |             |
| left       | swipeout buttons on left      | Array | `null` |
| right       | swipeout buttons on right      | Array | `null` |
| autoClose       | auto close on button press   | Boolean | `function() {}` |
| onOpen       |       | Function | `function() {}` |
| onClose       |       | Function | `function() {}` |
| disabled       |   disabled swipeout    | Boolean | `false` |
| title          |    modal title (android only)   | String | `请确认操作` |


### Button

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| text       | button text     | String | `Click` |
| style       | button style （iOS only）    | Object | `` |
| onPress       | button press function      | Function | `function() {}` |
