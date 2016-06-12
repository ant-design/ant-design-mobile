---
category: Components
type: Components
chinese: 日期选择
english: DatePicker
---

日期或时间选择器

## API

| 成员        | 说明           | 类型        |  可选值       | 默认值       |
|------------|----------------|--------------------|--------------|
| mode  | 日期选择的类型,可以是日期、时间、日期+时间 | String | `date`, `time`, `datetime`  | `date`  |
| value | 当前选中时间,各种mode下格式分别为:`yyyy-MM-dd`、`HH:mm`、`yyyy-MM-dd HH:mm` | String or Date |   |  无  |
| minDate   | 最小可选日期,格式同value | String or Date |   |  `2000-1-1`  |
| maxDate   | 最大可选日期,格式同value | String or Date |   |  `2030-1-1`  |
| onChange   | 时间发生变化的回调，发生在用户选择时间时, 如果使用rc-form,一般不需要自己处理 | function(Date value) |   |  无  |
| locale   | 国际化配置	 | String | `zhCn`,目前只支持`zhCn`  |  `zhCn` |
| style   | 自定义内联样式 | Object |   |  {}  |
| okText   | 选中的文案 | String |   |  `确定`  |
| dismissText  | 取消选中的文案 | String |   |  `取消`  |
| title  | 大标题 | String |   |    |
| format   | 格式化选中的值 | Function |   | `(val) => { return val; }`  |
| extra   | Children如果是List.Item,则是extra属性的默认值, 如果是其它的UI组件,则value或者extra属性会经过format方法处理后传给children的extra属性,用户需要自己实现这个属性 | String |   |  `请选择`  |
