---
category: UI Controls
type: UI Controls
chinese: 单选框
english: Radio
---


### 定义／Definition
Radio提供了一个简单的方法来从一个预定义集合中选取单个值。

### 规则 / Rule

- 单选按钮一般出现在列表右侧，只有当列表右侧有内容时，才出现在列表左侧；
- 选择后可以直接触发某个行为。


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
