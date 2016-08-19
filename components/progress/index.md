---
category: UI Controls
type: UI Controls
chinese: 进度条
english: Progress
---

### 定义／Definition
进度视图展示了任务或进程的进度。

### 规则 / Rule
1. 是一条轨迹，随着进程的进行从左向右进行填充；
2. 不支持用户交互行为


## API

| 属性      | 说明           | 类型     | 默认值         |
|----------|---------------|----------|---------------|
| percent  | 进度百分比 | number | 0 |
| position   | 进度条的位置，fixed将浮出固定在最顶层，可选：`fixed` `normal` | string   | `fixed` |
