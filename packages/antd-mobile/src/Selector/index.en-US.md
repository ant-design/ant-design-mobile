---
title: Selector
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### Single

<code src="./demo/single.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| items | Options | SelectorItemType[] | - |
| className | class name | string | '' |
| activeItemClassName | class name added to active item(s) | string | '' |
| multiple | Whether to support multiple selections | boolean | false |
| value | controlled value | T[] | - |
| defaultValue | uncontrolled defaultValue | T[] | [] |

> and others as `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

Type of `SelectorItemType` is as follows:

```typescript | pure
export interface SelectorItemType {
  text: string
  value: T
  subText?: string
  disabled?: boolean
}
```
