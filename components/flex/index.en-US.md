---
category: Components
type: Layout
title: Flex
---

Flex is a wrap of  Flexible Box.

## API

### Flex

Properties | Descrition | Type | Default
-----------|------------|------|--------
| direction    |   how flex items are placed in the flex container，value could be `row`,`row-reverse`,`column`,`column-reverse`, RN only support `row`,`column`  | String  | `row` |
| wrap    |  the wrap way of sub-elements，option `nowrap`,`wrap`,`wrap-reverse`,RN only support `nowrap`,`wrap`  | String  | `nowrap` |
| justify  | the way of alignment for sub-elements of main axis, option `start`,`end`,`center`,`between`,`around`    | String   | `start` |
| align    | the way of alignment for sub-elements of cross-axis, option `start`,`center`,`end`,`baseline`,`stretch` RN only support `start`,`end`,`center`,`stretch`  | String   | `center` |
| alignContent | the way of alignment when have multiple axes,  option `start`,`end`,`center`,`between`,`around`,`stretch`    | String  | `stretch` |

### Flex.Item

Flex.Item component has style `flex:1` as default, ensure all items average division width, Flex container‘s children maybe not Flex.Item.
