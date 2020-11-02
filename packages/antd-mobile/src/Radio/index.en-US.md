---
title: Radio
nav:
  title: Components
  path: /components
---

### Radio

<code src="./demo/basic.tsx" />

### Single

<code src="./demo/single.tsx" />

### Radio.Group
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| radius | radius for group | boolean | - |
| renderHeader | header for group | React.ReactNode | - |
| value | controlled value | any | - |
| defaultValue | unControlled defaultValue | any | '' |

> and others as `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

### Radio.Item
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disabled | boolean | false |
| value | value for radio | any | - |
| brief | second line for item | any | - |
