---
category: Components
type: Feedback
title: Toast
---


A lightweight feedback or tips, used to display content that does not interrupt user operations. Suitable for page transitions, data interaction and other scenes.


### Rules
- Only one Toast is allowed at a time.
- Toast with Icon, 4-6 words is recommended.; Toast without Icon, the number of words should not exceed 14.

## API

- `Toast.success(content, duration, onClose, mask)`
- `Toast.fail(content, duration, onClose, mask)`
- `Toast.info(content, duration, onClose, mask)`
- `Toast.loading(content, duration, onClose, mask)`
- `Toast.offline(content, duration, onClose, mask)`

The component provide several static methods：

Properties | Descrition | Type | Default
-----------|------------|------|--------
| content    | Toast content       | React.Element or String    | -           |
| duration   | Delay time to close, which units is second | number                 | 3          |
| onClose    | A callback function Triggered when the Toast is closed |  Function                 | -          |
| mask    | Whether to show a transparent mask, which will prevent touch event of the whole page |  Boolean  | true          |

> **Notice：** OnClose is invalid and Toast does not hide, If set duration = 0, toast will not auto hide, you have to manually do it.

Provides global configuration and global destroy methods:

- `Toast.config({ duration, mask })`

- `Toast.hide()`
