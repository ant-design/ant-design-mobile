---
title: 选择器
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| data  | 数据源     | `Array<{value, label}>` / `Array<Array<{value, label}>>` | -   |
| value  | 值, 格式是`[value1, value2, value3]`, 对应数据源的相应级层 value  | Array  | -   |
| cascade  | 是否级联   | Boolean| true|
| cols     | 列数    | Number | `3` |
| onChange | 选中后的回调，可使用[rc-form](https://github.com/react-component/form) | (val): void      | -   |
| cascade  | whether is cascade mode | Boolean | true |
