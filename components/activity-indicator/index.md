---
category: Components
type: Components
chinese: 活动指示器
english: ActivityIndicator
---


### 定义／Definition
活动指示器表明任务或进程正在进行中。

### 规则 / Rule
- 当任务进行和加载时旋转，任务完成后自动消失；
- 不支持用户的交互行为；
- 不要使用静止的活动指示器，用户会以为该进程停滞了；


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

活动指示器。

| 参数      | 说明                                     | 类型       |  可选值 |默认值 |
|-----------|------------------------------------------|------------|-------|--------|
|  animating  | 显隐状态 | boolean | true or false | true  |
|  color  | spinner颜色 | string | gray or white | gray  |
|  size  | spinner大小 | string | small or large | small  |
|  toast  | loading样式类型 | boolean | true or false | false  |
|  text  | loading文本 | string | 无 | ''  |