---
category: Components
type: Navigation
title: Menu
---

Show a seires of operations on a panel.

### Rules

- Should includes more than 2 menu items.
- Should not be used as main navigation.

## API

Support WEB.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| data    | `Menu` data (children will be ignored when `isLeaf` is true). | `Array<{label, value, disabled?, children<data>?, isLeaf?}>` | [] |
| level    | `Menu` levels, available values: `1`, `2`.  | number  | 2 |
| value    |  Selected value of `Menu`, it's a array which includes first and second level's `value`. | Array | [] |
| onChange    | Callback called when menu item is selected.  | (item: Object): void  |  |
| height    |   Height of `Menu`.  | number  | `document.documentElement.clientHeight / 2` |
