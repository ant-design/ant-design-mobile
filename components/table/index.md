---
category: Components
type: Components
chinese: 表格
english: Table
---


### 定义／Definition
标签栏用于让用户在不同的子任务、视图和模式中进行切换。

### 规则 / Rule
- 单列高度为44dp
- 表格中内容不宜附带组件，如需组件请选择表单或列表
- 数据中文字内容左对齐，数字内容以小数点对齐，单元格前后间距为margin-2；
- 当数据量很多无法一次展现完全，可以固定表格的表头或行标题列，方便用户横向或纵向滚动时阅读时对照属性；
- h5页面中的表格，只能显示少量精简的内容，如果判断表格内内容文案过长，就不适合以表格形式展现；
- h5页面中的表格横向最好显示4列以内； 




## API

### Tabs

| 参数             | 说明                                         | 类型     | 默认值        |
|------------------|----------------------------------------------|----------|---------------|
| columns        | 表格列的配置描述，具体项见下表                     | Array   |             |
| dataSource | 数据数组	 | Array   | -    |
| direction         | 排列方式 horizon/vetical/mix                              | String | horizon            |
| hTitles       | 标题列数据                             | Array |             |
| scrollX | 是否横向滚动    |  Boolean   |    false    |
| fixedTitle | 横向滚动时，标题列是否固定   | Boolean   | false      |
| titleWidth |  固定标题列宽度   | Number   |      |


