---
title: 步骤条
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

Steps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 | number | `0` |
| direction | 显示方向，可选值 `vertical` \| `horizontal` | string  | `vertical` |

Steps.Step

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 |  string | `-` |
| description | 步骤的详情描述 | string  | `-` |
| fail | 是否失败，只在`vertical`模式下生效 | boolean  | `false` |
