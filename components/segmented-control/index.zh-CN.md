---
category: Components
type: Navigation
title: SegmentedControl
subtitle: 分段器
---


由至少 2 个分段控件组成，用作不同视图的显示；是 iOS 的推荐组件。

### 规则
- 和 Tabs 功能相似，尽可能避免一个页面中同时出现这两个组件。
- 可以搭配 NavBar 一起使用，用于显示多个视图，分段数一般为 2 个。
- 单独放置一行时，分段数最多为 5 个；文案需要精简，一般 2-4 个字。
- 尽可能保持文案长度一致。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| prefixCls  | 样式前缀        | String |  `am-segment`  |
| className | 样式类        | String |    |
| style | 自定义样式        | Object | `{}`   |
| tintColor  | 组件主色调        | String |  `#2DB7F5`  |
| disabled  | 是否启用        | Boolean |  false  |
| selectedIndex  | 选中项在数组中的索引        | Number |  0  |
| values  | 选项数组,值是字符串        | array |  []  |
| onChange    | 回调函数, 其中`e.nativeEvent.selectedSegmentIndex`是选中项索引, `e.nativeEvent.value`是选中的值. | (e): void |  function(){}  |
| onValueChange    |    回调函数   | (val): void |  function(){}  |
