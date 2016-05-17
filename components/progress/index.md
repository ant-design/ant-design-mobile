---
category: Components
type: Components
chinese: 进度条
english: Progress
---

出现在手机顶部的进度条。

---

## 何时使用

当一个任务存在明确的进程，可以使用进度条来给用户反馈，适合用于工具栏内。

* 是一条轨迹，随着进程的进行从左向右进行填充。
* 不支持用户交互行为



## API

| 属性      | 说明           | 类型     | 默认值         |
|----------|---------------|----------|---------------|
| percent  | 进度百分比 | number | 0 |
| position   | 进度条的位置，fixed将浮出固定在最顶层，可选：`fixed` `normal` | string   | `fixed` |
