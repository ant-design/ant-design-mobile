---
category: Components
type: Data Display
title: Table
subtitle: 表格
---

由于以下原因：

- table 渲染机制是整块进行，不同于 div 能一点点渲染
- table 在修改样式或布局时，非常不方便
- table 的设计应用的场景非常少

所以 **绝大多数情况下、不要使用 table，移动端常见的列表数据、或类似 table 的数据展示需求，使用 List / ListView 组件代替。**
只在如 demo 展示的「锁定标题列」这种极特殊需求情况下使用。

> table 实现直接依赖 [rc-table@5](https://github.com/react-component/table) ，
使用遇到问题在 [antd issue](https://github.com/ant-design/ant-design/issues) 里查找答案或提问。

## API

适用平台：WEB

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| columns     | 表格列的配置描述，具体项见下表       | Array   |    -       |
| dataSource  | 数据数组	 | Array   |  -   |
| direction   | 排列方式 horizon/vetical/mix        | String | horizon   |
| scrollX     | 是否横向滚动    |  Boolean   |    false    |
| titleFixed  | 横向滚动时，标题列是否固定   | Boolean   | false      |

### columns

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| title  | 列头显示文字    | String or React.Element  |  -  |
| key | React 需要的 key，建议设置	 | String   |  -  |
| dataIndex   | 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法  | String | - |
| render | 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引  | (text, record, index) => React.Node | - |
