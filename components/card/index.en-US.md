---
category: Components
type: Data Display
title: Card
---

Card can be used to organize information and operations, usually also as an entry for detailed information.

### Rules
- The shape is rectangular.
- The content can consist of multiple elements of varying type, eg: images, texts, buttons, etc.

## API

### Card

Properties | Descrition | Type | Default
-----------|------------|------|--------
|   full  |  whether is full column | boolean | `false` |

### Card.Header

Properties | Descrition | Type | Default
-----------|------------|------|--------
|title| title for `Card.Header` | React.Element、String | |
|thumb| thumb to render in the left of  `Card.Header`  | String、React.Element |  |
|thumbStyle| style of thumb | Object | {} |
|extra| extra content to render in the right of `Card.Header` | React.Element、String |  |

### Card.Body

Properties | Descrition | Type | Default
-----------|------------|------|--------
| | | | |

### Card.Footer

Properties | Descrition | Type | Default
-----------|------------|------|--------
|content| content of `Card.Footer` | React.Element、String | |
|extra| extra content of `Card.Footer` | React.Element、String |  |
