---
title: 跑马灯
nav:
  title: 组件
  path: /components
---

### DEMO

#### 基本用法
<code src="./demo/basic.tsx" />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| indicator | 指示器， false 表示没有，有默认色和浅色两种模式 | boolean \| { type: 'primary' \| 'light' } | true |
| autoplay | 是否自动播放 | boolean | false |
| interval | 自动播放时间间隔 | number(ms) | 5000 |
| duration | 切换动画时间 | number(ms) | 500 |
| loop | 是否无限循环 | boolean | false |
| direction | 方向 | 'horizontal' \| 'vertical' | 'horizontal' |
| initIndex | 初始的选项 | number | 0 |
| itemActiveClass | 激活时的样式 | string | - |
| itemsPerView | 每一个视图展示多少项 | number | 1 |
| spaceBetween | 每一个项的间隔 px | number | 0 |
| onChange | 切换回调 | (res: {current: number}) => void | - |
