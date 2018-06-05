---
category: Components
type: Gesture
title: PullToRefresh
---

Instantly reload the content by triggering.

### Rules
- Can be used in conjunction with `ListView` or alone.
- Can be considered regular automatic refresh, e.g. login APP, automatically refresh the first page List.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
| direction  | pull direction, can be `up` or `down` | String | `down` |
| distanceToRefresh | distance to refresh | number | 25 |
| refreshing | Whether the view should be indicating an active refresh | bool | false |
| onRefresh | required, Called when the view starts refreshing. | () => void | - |
| indicator  | indicator config `{ activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }` | Object | - |
| damping | pull damping, suggest less than 200 | number | 100 |
