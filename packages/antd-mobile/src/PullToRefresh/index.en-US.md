---
title: PullToRefresh
nav:
  title: Components
  path: /components
---

### PullToRefresh

<code src="./demo/basic.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| direction | detect refresh or load more | 'up' | 'down' | 'down' |
| distanceToRefresh | distance to refresh | number | 26*devicePixelRatio |
| indicator | indicator when refresh or loading | `{ deactivate: ReactNode, activate: ReactNode, release: ReactNode, finish: ReactNode }` | - |
| onRefresh | required, callback when release | () => void | - |
| refreshing | required, detect refreshing | boolean | - |
