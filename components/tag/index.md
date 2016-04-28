---
category: Components
chinese: 标签
type: 展示
english: Tag
---

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | Tag 类型，可选值为`action`(操作)或 `read`(只读)     |   string   |   read  |
| size   |  Tag 大小，可选值为`large` 或 `small`  |   string    |  large  |
| closable	   | 是否可关闭, 和 type='action' 配合使用 | boolean	 | false |
| disabled   | 是否不可用      | boolean |    false  |
| onChange   | 切换选中回调函数 | Function|   无  |
| onClose    | 关闭前的回调 | Function|   无  |
| afterClose    | 关闭后的回调 | Function|   无  |
