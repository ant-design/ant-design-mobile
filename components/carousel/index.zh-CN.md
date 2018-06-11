---
category: Components
type: Data Display
title: Carousel
subtitle: 走马灯
---

走马灯，轮播图

## API

属性 | 说明 | 类型 | 默认值
----|-----|------|------
| selectedIndex |  手动设置当前显示的索引  |  number  |  0  |
| dots | 是否显示面板指示点 | Boolean   | true |
| vertical | 垂直显示 | Boolean   | false |
| autoplay | 是否自动切换 | Boolean   | false |
| autoplayInterval | 自动切换的时间间隔 | Number | 3000 |
| infinite | 是否循环播放 | Boolean   | false |
| afterChange  | 切换面板后的回调函数 | (current: number): void  | 无 |
| dotStyle  | 指示点样式 | Object | 无 |
| dotActiveStyle  | 当前激活的指示点样式 | Object | 无 |
| frameOverflow | 设置 slider frame 的 overflow 样式 | string | `hidden` |
| cellSpacing | 项目之间的间距，以`px`为单位 | number | - |
| slideWidth | 手动设置项目宽度. 可以是`slideWidth="20px"`，也可以是相对容器的百分比`slideWidth={0.8}` | string / number | - |
| easing | 缓动函数，你可以使用[这里](https://github.com/chenglou/tween-functions)提供的其他函数 | Function   | easeOutCirc |
| swipeSpeed | 滑动灵敏度 |  number | 12 |
| beforeChange | 切换面板前的回调函数 | (from: number, to: number): void | 无 |
