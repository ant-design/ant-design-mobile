---
category: Other
type: Other
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
| columnNum    |   列数     | number  |  | `4` |
| hasLine    |   是否有边框     | bollean  |  | `true` |
| isCarousel    |   是否跑马灯,     | bollean  |  | `false` |
| carouselMaxRow    |   如果是跑马灯, 一页跑马灯需要展示的行数   | number  |  | `2` |
| createItemElement    |   自定义每个grid的条目的创建   | Function(el, index), 返回一个React.Element  |  |  |
