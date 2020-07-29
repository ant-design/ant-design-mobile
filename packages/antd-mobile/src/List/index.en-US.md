---
title: List
nav:
  title: Components
  path: /components
---

### List

<code src="./demo/basic.tsx" />

### API

#### List

Properties | Descrition | Type | Default
-----------|------------|------|--------
| radius       | list radius  | boolean |  false  |
| renderHeader       | list heder  | (): void |    |
| renderFooter       | list footer  | (): void |    |

#### List.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| thumb       | thumbnail on the left side of `List`(string type will be used to set img src)  | String/React.Element |   |
| brief       | Brief information  | String/React.Element |   |
| extra      | extra content on the right side of `List`        | String/React.Element |    |
| arrow      | arrow direction, options: `horizontal`,`up`,`down`, `empty`; `empty` option may hide the dom  | String |     |
| align    | vertical alignment of child elements，options: `top`,`middle`,`bottom`  | String   | `middle` |
| onPress    | callback is called when  list is clicked | (): void |    |
| error    | Whether to display error style(the color of text on the right side may change to orange) | Boolean  | `false`  |
| wrap    | Whether to wrap long texts, otherwise it will be hidden by default. | Boolean  | `false`  |
| platform  |  set the special style depends on platform, Options  `android`, `ios`， default to be `cross`， which means we will detect UA and change the component style | String | `'cross'`|
