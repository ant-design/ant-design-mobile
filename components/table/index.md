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
| activeKey        | 当前激活 tab 面板的 key                      | String   | 无            |
| defaultActiveKey | 初始化选中面板的 key，如果没有设置 activeKey | String   | 第一个面板    |
| onChange         | 切换面板的回调                               | Function | 无            |
| onTabClick       | tab 被点击的回调                             | Function | 无            |
| type | 页签的基本样式，可选 `line`、`capsule`、`tabbar` 类型   | String   | 'line'      |
| animation | 内容区域动画, 目前仅支持 `slide-horizontal`, 设为 false 禁用动画    |  String   |    `slide-horizontal`    |
| mode |  `dark`、`light` 仅当 type 为 tabbar 有效   | String   | 'light'      |


