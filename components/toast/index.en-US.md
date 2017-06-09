---
category: Components
type: Feedback
title: Toast
---


A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.


### Rules
- Only one Toast is allowed at a time.
- Toast with Icon, the number of words for the 4-6; Toast without Icon, the number of words should not exceed 14.


## API

Support WEB, React-Native.

- `Toast.success(content, duration, onClose, mask)`
- `Toast.fail(content, duration, onClose, mask)`
- `Toast.info(content, duration, onClose, mask)`
- `Toast.loading(content, duration, onClose, mask)`
- `Toast.offline(content, duration, onClose, mask)`

The component provides five static methods, parameters as follow:

Properties | Descrition | Type | Default
-----------|------------|------|--------
| content    | Toast content       | React.Element or String    | -           |
| duration   | Delay time of auto close, units per second | number                 | 3          |
| onClose    | A callback function Triggered when the Toast is closed |  Function                 | -          |
| mask    | Whether to show transparent mask, To prevent touch penetration |  Boolean  | true          |

> **Notice：** OnClose is invalid and Toast does not hide, if set duration = 0. To hide Toast need manually call.

Provides global configuration and global destroy methods:

- `Toast.hide()`
