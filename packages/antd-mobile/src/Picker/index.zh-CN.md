---
title: 选择器
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 单独使用
<code src="./demo/single.tsx" />


### 参数

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `Array<{value, label}>` | -   |
| value  | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value  | Array  | -   |
| defaultValue  | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value  | Array  | []  |
| cascade  | 是否级联   | Boolean| true|
| cols     | 列数    | Number | `3` |

> 其他属性见 BaseFormItemType
