---
category: Components
type: Data Display
title: Card
---


用于组织信息和操作，通常也作为详细信息的入口。

### 规则
- 形状为矩形，高度可定义。
- 可包含多种类型的元素，eg：图片、文字、按钮等。

## API

Support WEB, React-Native.

### Card

Properties | Descrition | Type | Default
-----------|------------|------|--------
|   full  |  是否通栏  | boolean | `false` |

### Card.Header

Properties | Descrition | Type | Default
-----------|------------|------|--------
|title| 卡片标题 | React.Element、String | |
|thumb| 卡片标题图片 | String |  |
|thumbStyle| 标题图片样式 | Object | {} |
|extra| 卡片标题辅助内容 | React.Element、String |  |

### Card.Body

Properties | Descrition | Type | Default
-----------|------------|------|--------
|无| | | |

### Card.Footer

Properties | Descrition | Type | Default
-----------|------------|------|--------
|content|尾部内容 | React.Element、String | |
|extra| 尾部辅助内容 | React.Element、String |  |
