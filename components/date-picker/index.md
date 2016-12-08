---
category: Components
type: Data Entry
chinese: 日期选择
english: DatePicker
---

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


## API ( 适用平台：WEB、React-Native )

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|-----------|--------------|
| mode  | 日期选择的类型,可以是日期`date`、时间`time`、日期+时间`datetime` | String | `date`  |
| value | 当前选中时间,各种mode下格式分别为:`YYYY-MM-DD`、`HH:mm`、`YYYY-MM-DD HH:mm` | [moment](http://momentjs.com/) | 无 |
| minDate   | 最小可选日期,格式同 value | [moment](http://momentjs.com/)  |  -  |
| maxDate   | 最大可选日期,格式同 value | [moment](http://momentjs.com/)  |  -  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void |  无  |
| locale   | 国际化配置 (可自行构造，结构为 {year, month, day, hour, minute})	 | Object  | DatePicker.locale.zh_CN |
| okText   | 选中的文案 | String |  `确定`  |
| dismissText  | 取消选中的文案 | String |  `取消`  |
| title  | 弹框的标题 | String |  无  |
| format  | 格式化选中的值 | (value:moment) => string/string | `(val) => { return val; }`  |
| extra   | Children如果是 List.Item, 则是 extra 属性的默认值, 如果是其它的UI组件,则 value 或者 extra 属性会经过 format 方法处理后传给 children 的 extra 属性,用户需要自己实现这个属性 | String  |  `请选择`  |

更多参数及支持情况可参考：https://github.com/react-component/m-date-picker
