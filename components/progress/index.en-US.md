---
category: Components
type: Feedback
title: Progress
---

Progress Bar to indicate your task's progress.

### Rules

- When you need a accurate progress，otherwise you should use ActivityIndicator.
- Hide the unfilled part when used with NavBar for better visual feeling.

## API

Properties | Descrition | Type | Default
-----------|------------|------|--------
percent | percent value of progress | number | 0
position | position of progress bar, optional：`fixed` `normal` | string | `fixed`
unfilled | whether to fill unfinished part of progress | boolean | true
style | the style of container | object | {}
barStyle | the style of bar | object | {}
