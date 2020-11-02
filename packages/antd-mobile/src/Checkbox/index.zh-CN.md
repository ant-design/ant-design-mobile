---
title: 复选框
nav:
  title: 组件
  path: /components
---

### DEMO

#### 基本用法
<code src="./demo/basic.tsx" />

#### 单独使用
<code src="./demo/single.tsx" />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| checked | 受控 checked | boolean | - |
| defaultChecked | 非受控 checked | boolean | false |

> 其他属性见 BaseFormItemTypeWithoutFocus

### Checkbox.Group
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| radius | 是否有圆角 | boolean | - |
| renderHeader | header 内容 | React.ReactNode | - |
| value | 受控 value | any[] | - |
| defaultValue | 非受控 defaultValue | any[] | [] |

> 其他属性见 `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

### Checkbox.Item
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用 | boolean | false |
| value | 复选框的值 | any | - |
