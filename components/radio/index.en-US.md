---
category: Components
type: Data Entry
title: Radio
---

Radio.

## API

### Radio

Properties | Descrition | Type | Default
-----------|------------|------|--------
| name    |   name  | String |   -  |
| defaultChecked |   the initial checked state   | Boolean  | -  |
| checked    |   to set the current checked state  | Boolean  | -  |
| disabled      |  whether disabled  | Boolean |  false  |
| onChange    | a callback function, can be executed when the checked state changes | (e: Object): void |  -  |

### Radio.RadioItem

The encapsulation about `Radio` based on `List.Item`, the property `extra` of `List.Item` will be passed to `Radio`, while other properties remain the same.

Other APIs are identical with `Radio`.
