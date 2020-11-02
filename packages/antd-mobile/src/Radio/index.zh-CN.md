---
title: 单选框
nav:
  title: 组件
  path: /components
---

### Radio

<code src="./demo/basic.tsx" />

### Single

<code src="./demo/single.tsx" />

### Checkbox.Group
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| radius | 是否有圆角 | boolean | - |
| renderHeader | header 内容 | React.ReactNode | - |
| value | 受控 value | any | - |
| defaultValue | 非受控 defaultValue | any | '' |

> 其他属性见 `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

### Checkbox.Item
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| value | 单选框的值 | any | - |
| brief | 第二行的内容 | any | - |
