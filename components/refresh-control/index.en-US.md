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

- icon (any) - the indicator icon, contains `pull` and` release` status
- loading (any) - loading indicator.
- distanceToRefresh (number, default: 50 / 2 * (window.devicePixelRatio || 2)) - distance to refresh.
- onRefresh (function, required) - Called when the view starts refreshing.
- refreshing (boolean, false) - Whether the view should be indicating an active refresh.

How to set `icon`/`loading` yourself? See https://github.com/ant-design/ant-design-mobile/blob/master/components/refresh-control/index.web.tsx#L11

## API (react-native)
See https://facebook.github.io/react-native/docs/refreshcontrol.html#props
