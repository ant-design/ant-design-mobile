---
category: Components
type: Gesture
title: RefreshControl
---

Instantly reload the content by triggering.

### Rules
- Can only be used in conjunction with ListView and can not be used alone.
- Can be considered regular automatic refresh, e.g. login APP, automatically refresh the first page List.


## API (web)

> Note: RefreshControl will automatically use the ListView's `useZscroller` setting (see ListView code), so you need to set a fixed height for the ListView.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| icon | refresh indicator, include `pull` and `release` state | react node | - |
| loading | loading indicator | react node | - |
| distanceToRefresh | distance to refresh | number | `25px` |
| onRefresh | required, Called when the view starts refreshing. | () => void | - |
| refreshing | Whether the view should be indicating an active refresh | bool | false |


How to set `icon`/`loading` yourself? See https://github.com/ant-design/ant-design-mobile/blob/master/components/refresh-control/index.tsx#L8

## API (react-native)
See https://facebook.github.io/react-native/docs/refreshcontrol.html#props
