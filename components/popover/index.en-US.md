---
category: Components
type: Navigation
title: Popover
---

After clicking on a control or an area, a Popover menu appears for doing more.
If set mask prop, it is recommended to exit by clicking on any of the mask layers.

## API

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
| style  | item style   | Object |  -   |
| icon   | icon   | ReactNode |  -   |
