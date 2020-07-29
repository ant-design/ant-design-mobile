---
title: Carousel
nav:
  title: Components
  path: /components
---

### DEMO

#### 基本用法
<code src="./demo/basic.tsx" />

### API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| afterSlide | 切换后回调 | () => void | - |
| beforeSlide | 切换前回调 | () => void | - |
| autoplay | 是否自动播放 | boolean | false |
| autoplayInterval | 自动播放时间间隔 | number(ms) | - |
| easing | 切换的动效函数，见 https://github.com/d3/d3-ease | () => void | - |
| heightMode | 跑马灯高度 | 'current'\|'max'\|'first' | 'max' |
| vertical | 纵向 | boolean | false |
| slideIndex | 初始的选项 | number | 0 |
| dots | 是否显示 dots | boolean | true |
| infinite | 是否无限 | () => void | - |
