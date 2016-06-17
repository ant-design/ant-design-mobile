---
category: Components
type: Components
chinese: 警告提示
english: Alert
display: false
---

### 定义／Definition

### 规则 / Rule

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | 信息类型，可选值为 `success`, `info`, `error`, `warn`, `wait`, `question`|   string   |   info  |
| message   | 主提示文案      | string |    无  |
| description   | 副提示文案      | string |    无  |
| brief   | 说明文案     | string |    无  |
| result	   | 是否结果页面 | boolean	 | false |
