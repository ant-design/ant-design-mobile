---
category: Components
type: Navigation
title: SegmentedControl
---

`SegmentedControl` includes at least two segments, it is used to display diffrent views and recommended by `iOS`.

### Rule
- It is similar to the functionality used for `Tabs`, so avoid to use them at same page as much as possible.
- You can use `SegmentedControl` with `NavBar` to display mutiple views.
- Generally there should be no more than 5 segments in one line, each segment has 2-4 words and needs simplified texts.
- Keep the length of the text consistent as much as possible.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| prefixCls  | prefix class        | String |  `am-segment`  |
| className | class name of component        | String |    |
| style | style of component        | Object | `{}`   |
| tintColor  | accent color of the control       | String |  `#2DB7F5`  |
| disabled  | whether the user is able to interact with the control  | Boolean |  false  |
| selectedIndex  | the index in `props.values` of the segment to be (pre)selected | Number |  0  |
| values  | The labels for the control's segment buttons, in order  | array |  []  |
| onChange    |  callback that is called when the user taps a segment; passes the event object as an argument. `e.nativeEvent.selectedSegmentIndex` is selected index. `e.nativeEvent.value` is selected value. | (e): void |  function(){}  |
| onValueChange    |  callback that is called when the user taps a segment; passes the segment's value as an argument | (val): void |  function(){}  |
