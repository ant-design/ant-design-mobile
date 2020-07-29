---
title: Steps
nav:
  title: Components
  path: /components
---

### DEMO

<code src="./demo/basic.tsx" />

### API

Steps

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| current | To set the current step, counting from 0 | number | `0` |
| direction | To specify the direction of the step bar `vertical` \| `horizontal` | string  | `vertical` |

Steps.Step

| Properties | Description | Type | Default |
| --- | --- | --- | --- |
| title | title |  string | `-` |
| description | Detail of the step | string  | `-` |
| fail | whether fail，only for `vertical` | boolean  | `false` |
