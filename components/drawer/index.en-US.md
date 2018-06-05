---
category: Components
type: Navigation
title: Drawer
---

Drawer is a panel that displays the app's navigation options on the left edge of the screen.

### Rules

- Recommaned way to show navigation options on Android, it is a common pattern found in Android APPs.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| sidebar | The sidebar content. | ReactNode | - |
| onOpenChange | Callback called when open state of `Drawer` changes. | (open: bool): void | - |
| open | If the sidebar should be open. | Boolean | false |
| position | Position of `Drawer`. | String | 'left', enum{'left', 'right', 'top', 'bottom'} |
| sidebarStyle | - | Object | {} |
| contentStyle | - | Object | {} |
| overlayStyle  | - | Object | {} |
| dragHandleStyle  | - | Object | {} |
| touch  | If touch gestures should be enabled | Boolean | true |
| transitions  | If transitions should be enabled. | Boolean | true |
| docked  | If the sidebar should be docked in document. | Boolean | false |
| enableDragHandle  | If dragHandle should be enabled | Boolean | false |
| dragToggleDistance  | Distance the sidebar has to be dragged before it will open/close after it is released. | Number | 30 |
