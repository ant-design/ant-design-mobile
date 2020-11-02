---
title: 协议
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 单独使用

<code src="./demo/single.tsx" />

### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| term | 协议内容 | React.ReactNode | - |
| describe | 是否描述性质 | boolean | false |
| hasChecked | 是否有 checkbox 表单元素 | boolean | false |
| checked | 受控 checked | boolean | - |
| defaultChecked | 非受控 defaultChecked | boolean | - |

> 当 hasChecked 打开，checked, defaultChecked 等表单元素才有效果, 其他属性见 BaseFormItemTypeWithoutFocus
