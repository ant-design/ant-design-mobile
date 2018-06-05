---
category: Components
type: Data Display
title: Tag
---

Tag for categorizing or markuping, can be used to make classification or mark the attributes and dimensions of objects.

### Rules

- The content should be displayed completely.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| small   |  Whether to show a smaller size  |   Boolean    |  `false`  |
| disabled   | Whether is disabled      | Boolean |    `false`  |
| closable   | Whether can be closed(invalid in `small` or `disabled` mode) | Boolean | `false` |
| selected   | Whether is selected by default     | Boolean |   `false`  |
| onChange   | The callback function that is triggered when the selected state changes. | (selected: bool): void |   -  |
| onClose   | The callback function that is triggered when the tag is closed. | (): void |   -  |
| afterClose   | The callback function that is triggered after close. | (): void |   -  |
