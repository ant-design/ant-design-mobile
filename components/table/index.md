---
category: Components
type: Data Display
chinese: 表格
english: Table
---

展示行列数据。

### 规则
- 当有大量的结构化数据需要展现时，eg：股票信息。
- 中英文左对齐，数值以小数点对齐。
- 一般不建议超过 4 列。

## API ( 适用平台：WEB )

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| columns        | 表格列的配置描述，具体项见下表                     | Array   |    -         |
| dataSource | 数据数组	 | Array   | -    |
| direction         | 排列方式 horizon/vetical/mix                              | String | horizon            |
| scrollX | 是否横向滚动    |  Boolean   |    false    |
| titleFixed | 横向滚动时，标题列是否固定   | Boolean   | false      |

### columns

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| title        | 列头显示文字                    | String or React.Element   |             |
| key | React 需要的 key，建议设置	 | String   |     |
| dataIndex         | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法             | String |             |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引  | (text, record, index) => React.Node | |
