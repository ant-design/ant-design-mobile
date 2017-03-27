---
category: Components
type: Data Entry
title: Slider
---


允许用户在一个区间中选择特定值，eg：控制屏幕的显示亮度。


### 规则
- 默认状态下，左边为最小值，右边为最大值。
- 一般水平放置。


## Common API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| min    |  Number     | 0     | 最小值 |
| max    |  Number     | 100    | 最大值 |
| step    |  Number or null     | 1    | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 |
| value    |  Number  |     | 设置当前取值。 |
| defaultValue    |  Number   | 0     | 设置初始取值。|
| disabled    |  Boolean     | false    | 值为 `true` 时，滑块为禁用状态 |
| onChange    |  Function     | Noop    | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 |
| onAfterChange    |  Function     | Noop    | 与 `ontouchend` 触发时机一致，把当前值作为参数传入。 |
| maximumTrackTintColor    |  String     | `#108ee9`    | The color used for the track to the right of the button. Overrides the default blue gradient image on iOS. ( Also can custom theme to define color in web) |
| minimumTrackTintColor    |  String     | `#ddd`    | The color used for the track to the left of the button. Overrides the default blue gradient image on iOS. ( Also can custom theme to define color in web) |
| marks (`web only`)     |  Object{Number:String}     | { }    | 刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内 |
| dots (`web only`)     |  Boolean     | false    | 是否只能拖拽到刻度上 |
| included (`web only`)    |  Boolean     | true    | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 |

## ToolTip(Web Only)

注：1.0.x 之后将原先的`Slider`拆分成了`Slider`, `Range`, `creatToolTip`, 以便用户按需加载相应的功能使用, 例如带 `tooltip` 的 `slider` 使用方式如下:

````jsx
import { Slider, WingBlank, WhiteSpace, createTooltip } from 'antd-mobile';

const SliderWithTooltip = createTooltip(Slider); // High Order Component
<SliderWithTooltip defaultValue={26} min={0} max={30} />
````
