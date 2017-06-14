---
category: Components
type: Navigation
title: SegmentedControl
---

`SegmentedControl` includes at least two segments, it is used to display diffrent views and recommended by `iOS`.

### Rule
- It is similar to the functionality used for `Tabs`, so avoid to use them at same page as much as possible.
- You can use `SegmentedControl` with `NavBar` to display mutiple views.
- The number of segments is at most five in one use case. Each segment generally has 2-4 words and needs simplified texts.
- Keep the length of the text consistent as much as possible.


## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| prefixCls(`web only`)  | prefix class        | String |  `am-segment`  |
| className(`web only`) | class name of component        | String |    |
| style | style of component        | Object | `{}`   |
| tintColor  | accent color of the control       | String |  `#2DB7F5`  |
| disabled  | whether the user can be able to interact with the control  | Boolean |  false  |
| selectedIndex  | the index in `props.values` of the segment to be (pre)selected | Number |  0  |
| values  | The labels for the control's segment buttons, in order  | array |  []  |
| onChange    |  callback that is called when the user taps a segment; passes the event as an argument | (e): void |  function(){}  |
| onValueChange    |  callback that is called when the user taps a segment; passes the segment's value as an argument | (val): void |  function(){}  |
