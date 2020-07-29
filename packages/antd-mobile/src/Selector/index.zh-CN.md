---
title: 选择器
nav:
  title: 组件
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| items | 选项 | SelectorItemType[] | - |
| className | 类名 | string | '' |
| activeItemClassName | Item 被激活时添加的类名 | string | '' |
| multiple | 是否支持多选 | boolean | false |
| onChange | 值变更回调 | (v: SelectorItemType[]) => void | () => null |

其中 `SelectorItemType` 的类型如下：

```typescript | pure
export interface SelectorItemType {
  text: string
  value: any
  subText?: string
  disabled?: boolean
  active?: boolean
}
```
