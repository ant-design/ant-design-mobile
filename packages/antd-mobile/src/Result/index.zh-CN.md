---
title: 结果页
nav:
  title: 组件
  path: /components
---

### 展示

#### 基本用法
<code src="./demo/basic.tsx" />

#### 内置类型
<code src="./demo/type.tsx" />

### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 内置的类型 | 'error'\|'success'\|'info'\|'wait'\|'warn' | - |
| img | 插图(如果设置了 type , 则此属性无效) | ReactNode\|Icon | - |
| title | title 文案 | ReactNode | - |
| message | message 文案 | ReactNode | - |
| buttons | 按钮组合 | ButtonProps[] | - |
