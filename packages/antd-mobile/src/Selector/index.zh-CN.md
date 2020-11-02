---
title: 选择器
nav:
  title: 组件
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### Single

<code src="./demo/single.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| items | 选项 | SelectorItemType[] | - |
| className | 类名 | string | '' |
| activeItemClassName | Item 被激活时添加的类名 | string | '' |
| multiple | 是否支持多选 | boolean | false |
| value | 受控 value | T[] | - |
| defaultValue | 非受控 defaultValue | T[] | [] |

> 其他属性见 `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

其中 `SelectorItemType` 的类型如下：

```typescript | pure
export interface SelectorItemType {
  text: string
  value: T
  subText?: string
  disabled?: boolean
}
```
