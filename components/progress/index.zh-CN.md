---
category: Components
type: Feedback
title: Progress
subtitle: 进度条
---

表明某个任务的当前进度。

### 规则

- 需要准确告知当前进度，否则应该使用组件 ActivityIndicator。
- 和 NavBar 一起搭配使用时，可以隐藏 Progress 未填充部分的轨道，提升整体感。

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
percent | 进度百分比 | number | 0
position | 进度条的位置，fixed 将浮出固定在最顶层，可选: `fixed` `normal` | string | `fixed`
unfilled | 是否显示未填充的轨道 | boolean | true
style | 进度条样式 | object | {}
barStyle | 进度样式 | object | {}
