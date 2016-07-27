---
category: Components
type: Components
chinese: 滑动或长按操作
english: SwipeAction
---

滑动（ iOS ）或长按（ android ）操作组件。

### 定义／Definition
结合手势操作，从屏幕唤出删除键。

### 规则 / Rule
1. 一次只可滑动一行列表
2. 点击任意删除按钮之外任意处或往回滑动该列表可撤销该操作。


## API

### ListAction

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| prefixCls (web only)      | className prefix     | String | `rc-swipeout` |
| style           | swipeout style (iOS only)      | Object |             |
| left       | swipeout buttons on left      | Array | `null` |
| right       | swipeout buttons on right      | Array | `null` |
| autoClose       | auto close on button press   | Boolean | `function() {}` |
| onOpen       |       | Function | `function() {}` |
| onClose (web only)      |       | Function | `function() {}` |
| disabled       |   disabled swipeout    | Boolean | `false` |
| title          |    modal title (android only)   | String | `请确认操作` |


### Button

| 参数 | 说明             | 类型                    | 默认值 |
|------|------------------|-------------------------|--------|
| text       | button text     | String | `Click` |
| style       | button style （iOS only）    | Object | `` |
| onPress       | button press function      | Function | `function() {}` |
