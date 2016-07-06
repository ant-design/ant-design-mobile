---
category: Components
type: Components
chinese: 卡片
english: Card
---

### 定义／Definition

卡片可以控制和组织信息，通常是更复杂或详细信息的切入点。

### 规则 / Rule

- 卡片是矩形，可定义为任何高度。
- 卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
- 卡头和内容可以是HTML。

## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 信息类型，可选值为 `success`, `info`, `error`, `warn`, `wait`, `question`|   string   |   info  |
| message   | 主提示文案      | string |    无  |
| description   | 副提示文案      | string |    无  |
| brief   | 说明文案     | string |    无  |
| result	   | 是否结果页面 | boolean	 | false |
