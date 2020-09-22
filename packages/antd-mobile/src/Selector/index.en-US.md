---
title: Selector
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| value | selected value | SelectorItemType.value[] | - |
| defaultValue | init value | SelectorItemType.value[] | - |
| items | Options | SelectorItemType[] | - |
| className | class name | string | '' |
| activeItemClassName | class name added to active item(s) | string | '' |
| multiple | Whether to support multiple selections | boolean | false |
| onChange | Callback when selected values changes | (v: SelectorItemType[]) => void | () => null |

Type of `SelectorItemType` is as follows:

```typescript | pure
export interface SelectorItemType {
  text: string
  value: any
  subText?: string
  disabled?: boolean
}
```
