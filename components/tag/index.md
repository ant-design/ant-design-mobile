---
category: Components
type: Components
chinese: 标签
english: Tag
---

### 定义／Definition
进行标记和分类的小标签，用于标记事物的属性和维度，以及进行分类。

### 规则 / Rule
1. 移动端标签文字必须显示完全，标签内允许文字换行；
2. 只读型样式设计避免有点击感



## API

| 成员        | 说明           | 类型      | 默认值       |
|------------|----------------|--------------------|--------------|
| type       | Tag 类型，可选值为`action`(操作)或 `read`(只读)     |   String   |   read  |
| size   |  Tag 大小，可选值为`large` 或 `small`  |   String    |  large  |
| closable	   | 是否可关闭, type='action' & size='large' | Boolean	 | false |
| disabled   | 是否不可用      | Boolean |    false  |
| onChange   | 切换选中回调函数 | Function|   无  |
| onClose    | 关闭前的回调 | Function|   无  |
| afterClose    | 关闭后的回调 | Function|   无  |
