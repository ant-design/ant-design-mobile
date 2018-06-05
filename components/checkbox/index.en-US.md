---
category: Components
type: Data Entry
title: Checkbox
---

Checkbox

## API

### Checkbox

Properties | Descrition | Type | Default
-----------|------------|------|--------
| defaultChecked  |  whether is checked when init  | Boolean   |   |
| checked         |  whether is checked now (Controlled Mode)   | Boolean  |   |
| disabled        |  whether is been disabled       | Boolean |  false  |
| onChange        | callback when check status is changed | (e: Object): void |     |

### Checkbox.CheckboxItem

The encapsulation about `Checkbox` based on `List.Item`, the property `thumb` of `List.Item` will be passed to `Checkbox`, while other properties remain the same.

Other APIs are identical with `Checkbox`.

### Checkbox.AgreeItem

Almost the same as CheckboxItem and be used for special scenes. See demo for details.
