---
category: Components
type: Navigation
title: Drawer
---

Drawer is a panel that displays the app's navigation options on the left edge of the screen.

### Rules

- Recommaned way to show navigation options on Android, it is a common pattern found in Android APPs.

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| sidebar | The sidebar content. | ReactNode | - |
| onOpenChange | Callback called when open state of `Drawer` changes. | (open: bool): void | - |
| open | If the sidebar should be open. | Boolean | false |
| position | Position of `Drawer`. | String | 'left', enum{'left', 'right', 'top'(`web only`), 'bottom'(`web only`)} |
| sidebarStyle (`web only`)| - | Object | {} |
| contentStyle (`web only`) | - | Object | {} |
| overlayStyle(`web only`) | - | Object | {} |
| dragHandleStyle(`web only`) | - | Object | {} |
| touch(`web only`) | If touch gestures should be enabled | Boolean | true |
| transitions(`web only`) | If transitions should be enabled. | Boolean | true |
| docked(`web only`) | If the sidebar should be docked in document. | Boolean | false |
| enableDragHandle(`web only`) | If dragHandle should be enabled | Boolean | false |
| dragToggleDistance(`web only`) | Distance the sidebar has to be dragged before it will open/close after it is released. | Number | 30 |
| drawerWidth (`rn only`) | Width of `Drawer` | Number | 300 |
| drawerBackgroundColor (`rn only`) | Background color of `Drawer` | String | - |
| openDrawer (`rn only`) | Opens the `Drawer`.  | (): void | - |
| closeDrawer (`rn only`) | Closes the `Drawer`. | (): void | - |
