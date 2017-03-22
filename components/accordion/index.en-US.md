---
category: Components
type: Data Display
title: Accordion
subtitle: 手风琴
---

可以折叠/展开的内容区域。

### 规则
- 对复杂区域进行分组和隐藏。
- 通常情况下，一次只允许单个内容区域展开；特殊情况下，通过配置项支持多个内容区域同时展开。


## API

### Accordion

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| activeKey        | 当前激活 tab 面板的 key| Array or String   | 默认无，accordion模式下默认第一个元素|
| defaultActiveKey | 初始化选中面板的 key | String   | 无 |
| accordion    | `手风琴`模式 | Boolean | false (`web only`)  |
| onChange      |   切换面板的回调   | (key: string): void |  noop  |
| openAnimation (`web only`)  |  设置自定义切换动画，禁止动画可设为`{}` | Object | 参考 rc-collapse/lib/openAnimationFactory.js 文件  |

### Accordion.Panel

Support WEB.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| key  | 对应 activeKey   | String                  | 无     |
| header | 面板头内容 | React.Element or String | 无     |

`note: RN Accordion 依赖 Icon，使用时需添加对应的 iconfont 字体；目前暂不支持嵌套使用`
