---
title: Checkbox
nav:
  title: Components
  path: /components
---

### DEMO

#### basic
<code src="./demo/basic.tsx" />

#### single
<code src="./demo/single.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| checked | controlled checked | boolean | - |
| defaultChecked | unControlled checked | boolean | false |

> and others as BaseFormItemTypeWithoutFocus

### Checkbox.Group
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| radius | radius for group | boolean | - |
| renderHeader | header for group | React.ReactNode | - |
| value | controlled value | any[] | - |
| defaultValue | unControlled defaultValue | any[] | [] |

> and others as `Omit<BaseFormItemTypeWithoutFocus, 'id'>`

### Checkbox.Item
| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| disabled | disabled | boolean | false |
| value | value for checkbox | any | - |
