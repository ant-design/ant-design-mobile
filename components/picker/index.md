---
category: UI Controls
type: UI Controls
chinese: 选择器
english: Picker
---

### 定义／Definition
选择器展示了一组值，用户可以从中选择一个。

适用于数据有级联关系的选择器，比如`省市区选择`、`商品分类选择`。

### 规则 / Rule
- 是日期时间选择器的通用模式
- 包括一个或多个滑轮，每个滑轮含有一组值
- 当前选中的值在中间，以深色标识
- 不可以自定义大小（选择器的大小与iPhone的键盘相同）

一般来说，当用户对整组值都比较熟悉的时候，可以使用选择器。由于当滑轮静止的时候，大部分的数值会被隐藏，最好是在用户对所有数值均有预期的情况下才使用选择器。
尽可能让让用户在当前视图中使用选择器。不要让他们在使用选择器时还要进入其它的视图。
如果你需要展示的备选项数量很多，考虑使用表格视图(Table View)而不是选择器。因为表格视图的高度较大，内容滚动起来会更快。


## API

| 成员        | 说明           | 类型            | 默认值       |
|------------|----------------|--------------------|--------------|
| data    | 数据源        | Array<{value, label, children: Array}> |   -  |
| value   | 值, 格式[value1, value2, value3], 对应数据源的N级value    | Array  | - |
| format  | 格式化选中的值  | Function | `(values) => { return values.join(','); } ` |
| cols    | 列数        | Number |  `3`  |
| onChange | 选中后的回调   | Function(value) ,如果使用[rc-form](https://github.com/react-component/form),一般不需要自己处理| - |
| children| 通常是List.Item | Object |  List.Item  |
| okText  | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| title  | 大标题 | String | - |
| extra   | Children如果是List.Item,则是extra属性的默认值, 如果是其它的UI组件,则value或者extra属性会经过format方法处理后传给children的extra属性,用户需要自己实现这个属性 | String |  `请选择`  |
| style   | 样式 | Object |  无  |
