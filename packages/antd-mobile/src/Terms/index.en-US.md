---
title: Terms
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
| term | term node | React.ReactNode | - |
| describe | whether is description | boolean | false |
| hasChecked | whether has checkbox | boolean | false |
| checked | controlled checked | boolean | - |
| defaultChecked | uncontrolled defaultChecked | boolean | - |

> when hasChecked is true, checked/defaultChecked and other form props work, others as BaseFormItemTypeWithoutFocus
