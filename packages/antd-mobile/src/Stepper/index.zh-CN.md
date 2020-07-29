---
title: 步进器
nav:
  title: 组件
  path: /components
---

用作增加或者减少当前数值

### 展示

<code src="./demo/basic.tsx" />


### 规则

- 当想要对数值进行小幅度调整时，可以使用 Stepper，eg：将年化收益从 4.00% 调整到 4.05%

### 参数

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| min     | 最小值   | Number | -Infinity        |
| max     | 最大值       | Number      | Infinity           |
| value     | 当前值       | Number      |            |
| step     | 每次改变步数，可以为小数  | Number or String      |  1      |
| defaultValue     | 初始值       | Number      |            |
| onChange     | 变化时回调函数      | (): void      |            |
| onFocus     | 聚焦时      | (e: React.SyntheticEvent\<HTMLInputElement\>) => void      |           |
| onBlur     | 失焦时      | (e: React.SyntheticEvent\<HTMLInputElement\>) => void      |            |
| disabled     | 禁用       | Boolean      |      false      |
| readOnly     | input 只读       | Boolean      |      false      |
| showNumber  | 是否显示数值，默认不显示  | Boolean      |      false      |
