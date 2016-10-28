---
category: Basic Components
type: Basic Components
chinese: 手风琴
english: Accordion
---

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏。
- 通常情况下，一次只允许单个内容区域展开；特殊情况下，通过配置项支持多个内容区域同时展开。


## API

### Accordion

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| activeKey        | 当前激活 tab 面板的 key| Array or String   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | String   | 无 |
| accordion    | `手风琴`模式 | Boolean | false  |
| onChange      |   切换面板的回调   | Function(key) |  noop  |

### Accordion.Panel

| 成员        | 说明           | 类型       | 默认值       |
|------------|----------------|----------|-------------|
| key  | 对应 activeKey   | String                  | 无     |
| header | 面板头内容 | React.Element or String | 无     |
