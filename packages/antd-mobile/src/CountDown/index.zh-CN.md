---
title: 倒计时
nav:
  title: 组件
  path: /components
---

### 展示

<code src="./demo/basic.tsx" />

### 参数

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| t | 倒计时总时间(ms) | number | - |
| renderDuration | 两次渲染间隔(ms) | number | 1000 |
| render | 倒计时中的渲染视图 | React.Component<{t: number}> | - |
| onComplete | 渲染结束后的回调 | () => void | - |
