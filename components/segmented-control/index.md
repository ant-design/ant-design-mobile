---
category: UI Controls
type: UI Controls
chinese: 分段控制
english: SegmentedControl
---

### 定义／Definition

主要应用在页面区块，一般起着控制全局页面内容切换的作用。API 来源于 [react-native segmentedcontrolios](http://facebook.github.io/react-native/docs/segmentedcontrolios.html)。

## API

### SegmentedControl
| 成员        | 说明           | 类型               | 默认值       |
|------------|----------------|--------------------|--------------|
| prefixCls(`web only`)  | 样式前缀        | String |  `am-segment`  |
| className(`web only`) | 样式类        | String |    |
| style | 自定义样式        | Object | `{}`   |
| tintColor  | 组件主色调        | String |  `#2DB7F5`  |
| enabled  | 是否启用        | Boolean |  true  |
| selectedIndex  | 选中项在数组中的索引        | Number |  0  |
| values  | 选项数组,值是字符串        | array |  []  |
| onChange(e)    |    回调函数     | Func |  function(){}  |
| onValueChange(value)    |    回调函数     | Func |  function(){}  |
