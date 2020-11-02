---
title: Picker
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### Single
<code src="./demo/single.tsx" />


### API

Properties | Description | Type | Default
-----------|------------|------|--------
| data    | data source       | `Array<{value, label}>` |   -  |
| value   | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | - |
| defaultValue  | the value, the format is `[value1, value2, value3]`, corresponds to the level value of the data source   | Array  | [] |
| cascade    | whether cascade | Boolean |  true  |
| cols    | col numbers   | Number |  `3`  |

> and others as BaseFormItemType
