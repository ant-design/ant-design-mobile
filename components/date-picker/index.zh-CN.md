---
category: Components
type: Data Entry
title: DatePicker
subtitle: 日期选择
---

用于选择日期或者时间。

### 规则
- 最多展示 5 个独立滚轮，每个滚轮表示一个不同的值。


## API

适用平台：WEB、React-Native

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| mode  | 日期选择的类型,可以是日期`date`、时间`time`、日期+时间`datetime` 、年`year`, 月 `month` | String | `date`  |
| value | 当前选中时间,各种mode下格式分别为:`YYYY-MM-DD`、`HH:mm`、`YYYY-MM-DD HH:mm` | [moment](http://momentjs.com/) | 无 |
| minDate   | 最小可选日期,格式同 value | [moment](http://momentjs.com/)  |  -  |
| maxDate   | 最大可选日期,格式同 value | [moment](http://momentjs.com/)  |  -  |
| onChange   | 时间发生变化的回调函数  | (date: Object): void |  无  |
| locale   | 国际化，可覆盖全局`[LocaleProvider](https://mobile.ant.design/components/locale-provider)`的配置 | Object: {DatePickerLocale: {year, month, day, hour, minute}, okText, dismissText } |  无 |
| title  | 弹框的标题 | string/React.ReactElement |  无  |
| format  | 格式化选中的值 | (value:moment) => string/string | `(val) => { return val; }`  |
| extra   | DatePicker children 建议是 List.Item, 如果不是，需要是自定义组件(组件内需处理`onClick`/`extra`属性) | String  |  `请选择`  |
| disabled   | 是否不可用      | Boolean |    false  |
| prefixCls (`WEB only`) |  class前缀 | string | 无 |
| className (`WEB only`) |  样式类名 | string | 无 |
| minuteStep |   The amount of time, in minutes, between each minute item.    | Number | 1 |

更多参数及支持情况可参考：https://github.com/react-component/m-date-picker
