---
category: Components
type: Data Display
title: List
---

A single and continuous block content is vertically arranged to display current contents, status and available operations. eg：Contact List.

### Rule
- Generally `List` consists of main infomation, main operations, secondary infomation and secondary operations.
- The main infomation and main operations are placed on the left side of list, and secondary infomation and secondary operations are placed on the right side.


## API

Support WEB, React-Native.

### List

Properties | Descrition | Type | Default
-----------|------------|------|--------
| renderHeader       | list heder  | (): void |    |
| renderFooter       | list footer  | (): void |    |

### List.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| thumb       | thumbnail on the left side of `List`(string type will be used to set img src)  | String/React.Element |   |
| extra      | extra content on the right side of `List`        | String/React.Element |    |
| arrow      | arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom  | String |     |
| align    |    vertical alignment of `Flex` child elements，options: `top`,`middle`,`bottom`  | String   | `middle` |
| onClick    | callback is called when  list is clicked | (): void |    |
| onLongPress  | callback is called when  list is long pressed | (): void |    |
| error(`web only`)    | Whether to display error style(the color of text on the right side may change to orange) | Boolean  | `false`  |
| multipleLine    | multiple line | Boolean  | `false`  |
| wrap    | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false`  |
| activeStyle(`web only`)    | customized active style | Object  |   |
| platform (`web only`) |  set the special style depends on platform, Options  `android`, `ios`， default to be `cross`， which means we will detect UA and change the component style | String | `'cross'`|

### List.Item.Brief

Brief infomation
