---
title: Picker
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | data source       | `Array<{value, label}>` / `Array<Array<{value, label}>>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| cascade    | whether cascade        | Boolean |  true  |
| cols    | col numbers   | Number |  `3`  |
| onChange | selected callback function, can use [rc-form](https://github.com/react-component/form) | (val): void | - |
| cascade  | whether is cascade mode | Boolean | true |
