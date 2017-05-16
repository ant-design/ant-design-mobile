---
category: Components
type: Data Display
title: Table (Deprecated)
---

Note: this component has been **deprecated**. Please use `List / ListView` instead.


## API

Support WEB.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| columns     | columns of table   | Array   |    -       |
| dataSource  | data record array to be rendered | any[]  |  -   |
| direction   | can be `horizon / vetical / mix`    | String | horizon   |
| scrollX     | whether to scroll horizontally    |  Boolean   |    false    |
| titleFixed  | whether the title column is fixed when scrolling horizontally   | Boolean   | false      |

### columns

Properties | Descrition | Type | Default
-----------|------------|------|--------
| title  | title of this column    | string\|ReactNode  |  -  |
| key    | key of this column | string          | - |
| dataIndex  | display field of the data record, could be set like `a.b.c` | string | - |
| render | renderer of table cell, has three params: text, record and index of this row. The render value should be a ReactNode  | (text, record, index) => React.Node | - |
