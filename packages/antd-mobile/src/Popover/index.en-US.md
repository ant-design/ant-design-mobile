---
title: Popover
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API


### Popover

Properties | Descrition | Type | Default
-----------|------------|------|--------
| visible    | visible state  | Boolean |  false   |
| onVisibleChange    | visible state change callback    | (visible: bool): void |  -   |
| placement    | enum{'left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'} | String |  'bottomRight'   |
| mask    | Whether to display the mask background layer  | Boolean |  false  |
| overlay   | Popup layer content  | ReactNode |  -   |
| onSelect   | when an option is selected    | (node: any, index?: number): void |  -   |

more available API can be found at [rmc-tooltip](https://github.com/react-component/m-tooltip#api)

### Popover.Item

Properties | Descrition | Type | Default
-----------|------------|------|--------
| disabled   | set disabled    | Boolean |  false   |
| icon   | icon   | ReactNode |  -   |
| badge   | badge   | { dot?: boolean, text?: string | number } |  -   |
