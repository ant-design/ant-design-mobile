---
category: Components
type: Feedback
title: Sticky
---

The Sticky Component will stick to top of the viewport by default when the position of sticky component is scrolled to the trigger position. You can set the property (stickTop) to decided where should the component fixed to. 

## API

### Sticky

Properties | Descrition | Type | Default
-----------|------------|------|--------
| prefixCls    | CSS prefix    | string |  am-sticky   |
| disable      | disable sticky effect | Boolean | false |
| isHidden     | （iOS）whether the ancestor container of sticky component has  property of overflow: hidden or overflow: auto  | Boolean | false |
| stickTop    | position to top | Number | 0 |
| onSticky()   | callback function when on sticking | (): void | - |
| offSticky()     | callback function when off sticking | (): void | - |

* At iOS platform, the component was implemented by using position: sticky, which is not compatible if the ancestor container has the property (overflow: hidden or overflow: auto).