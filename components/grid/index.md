---
category: Components
type: Components
chinese: 九宫格
english: Grid
---


### 定义／Definition
卡片可以控制和组织信息，通常是更复杂或详细信息的切入点。

### 规则 / Rule
九宫格内文本最长不超过五个字符。


## API

### Grid
| 成员        | 说明           | 类型       |   可选值     | 默认值       |
|------------|----------------|-----------|---------|--------------|
| data    |    传入的菜单数据     | Array,每个元素必须包含`icon`,和`text`两个key   |  | [] |
| onClick    |   点击每个菜单的回调     | Function(el, index)  |  |  |
| hasLine    |   是否有边框     | bollean  |  | `true` |
| needActive    |   点击时时候背景色变化     | bollean  |  | `true` |
| isCarousel    |   是否跑马灯,     | bollean  |  | `false` |
