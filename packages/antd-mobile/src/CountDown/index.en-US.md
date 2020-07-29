---
title: CountDown
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| t | countdown total time(ms) | number | - |
| renderDuration | duration between twice render(ms) | number | 1000 |
| render | view of counting | React.Component<{t: number}> | - |
| onComplete | callback of count complete | () => void | - |
