---
category: UI Controls
type: UI Controls
chinese: 单选框
english: Radio
---


从多个互斥对象中，选中一个。


### 规则
- 一般出现在 List 右侧。
- 和 Switch 的区别是，Radio 支持 2 个以上互斥对象。


## API

### Radio

| 成员        | 说明           | 类型       |  可选值        | 默认值       |
|------------|----------------|----------|----------|--------------|
| name    |         | String |   | 无  |
| defaultChecked |   初始是否选中   | Boolean |   | 无  |
| checked    |   指定当前是否选中  | Boolean |   | 无  |
| disabled      |         | Boolean | |  无  |
| onChange    | change事件触发的回调函数,参数是event对象 | Function | |   无  |

### Radio.RadioItem

* 基于`List.Item`对`Radio`进行封装,`List.Item`的`extra`属性固定传入`Radio`,其他属性和List.Item保持一致。具体API请参考`List.Item`。
