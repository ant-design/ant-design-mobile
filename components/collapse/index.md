---
category: UI Views
type: UI Views
chinese: 折叠面板
english: Collapse
---


### 定义／Definition
列表容器以一致的格式来显示一组相关的内容，为一致性的类型或者一组内容指定优先顺序来体现层次感以获取更好的可读性。列表瓦片可以包含多行的文本，并且文本的字数可以在同一列表的不同瓦片间有所不同。

### 规则 / Rule
- 对复杂区域进行分组和隐藏，保持页面的整洁。
- `手风琴` 是一种特殊的折叠面板，只允许单个内容区域展开。


## API

### Collapse

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| activeKey        | 当前激活 tab 面板的 key| Array or String   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | String   | 无 |
| accordion    | `手风琴`模式 | Boolean | false  |
| onChange      |   切换面板的回调   | Function(key) |  noop  |

### Collapse.Panel

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| key  | 对应 activeKey   | String                  | 无     |
| header | 面板头内容 | React.Element or String | 无     |
