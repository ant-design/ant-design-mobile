---
category: UI Controls
type: UI Controls
chinese: 滑动输入条
english: Slider
---


### 定义／Definition
滑块允许用户在一个限定范围内调整某个数值或进程。

### 规则 / Rule
- 由一条水平的轨迹和一个Thumb(滑块中支持用户水平拖拽的圆形控件)组成；
- 左边和右边支持使用自定义图片来表述相对的最小值与最大值的含义；
- 填充轨道左边缘最小值之间到Thumb之间的部分；
- 定义Thumb的外观，让用户一看就知道滑块当前的状态。


## API


| 参数        | 类型           | 默认值               | 说明       |
|------------|----------------|--------------------|--------------|
| min    |  Number     | 0     | 最小值 |
| max    |  Number     | 100    | 最大值 |
| marks `web`     |  Object{Number:String}     | { }    | 刻度标记，key 的类型必须为 `Number` 且取值在闭区间 [min, max] 内 |
| step    |  Number or null     | 1    | 步长，取值必须大于 0，并且可被 (max - min) 整除。当 `marks` 不为空对象时，可以设置 `step` 为 `null`，此时 Slider 的可选值仅有 marks 标出来的部分。 |
| dots `web`     |  Boolean     | false    | 是否只能拖拽到刻度上 |
| value    |  Number     |     | 设置当前取值。 |
| defaultValue    |  Number   | 0 or [0, 0]    | 设置初始取值。|
| included `web`     |  Boolean     | true    | `marks` 不为空对象时有效，值为 true 时表示值为包含关系，false 表示并列 |
| disabled    |  Boolean     | false    | 值为 `true` 时，滑块为禁用状态 |
| onChange    |  Function     | Noop    | 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。 |
| onAfterChange    |  Function     | Noop    | 与 `ontouchend` 触发时机一致，把当前值作为参数传入。 |
| tipFormatter `web`     |  Function or null     | IDENTITY    | Slider 会把当前值传给 `tipFormatter`，并在 Tooltip 中显示 `tipFormatter` 的返回值，若为 null，则隐藏 Tooltip。 |
