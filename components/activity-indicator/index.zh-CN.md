---
category: Components
type: Feedback
title: ActivityIndicator
subtitle: 活动指示器
---

活动指示器。
表明某个任务正在进行中。

### 规则
- 不要让活动指示器静止，用户会以为该任务停滞了。
- 在某些特定场景下，提供有意义的文案，帮助用户明白哪个任务正在进行中，eg：正在上传照片。
- 如果能知道用户的等待时间，可以使用组件 Progress 来替代。


## API

```jsx
<ActivityIndicator />
<ActivityIndicator color="white" />
<ActivityIndicator size="large" />
<ActivityIndicator text="正在加载" />
<ActivityIndicator toast />
<ActivityIndicator toast text="正在加载" />
```

### ActivityIndicator

属性 | 说明 | 类型 | 默认值
----|-----|------|------
|  animating  | 显隐状态 | boolean  | true  |
|  size  | spinner大小，可选`small`/`large` | string  | small  |
|  toast  | loading样式类型 | boolean  | false  |
|  text  | loading文本 | string |  -   |
