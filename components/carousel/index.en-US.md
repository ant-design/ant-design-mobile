---
category: Components
type: Data Display
title: Carousel
---

走马灯，轮播图

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| selectedIndex |  手动设置当前显示的索引  |  number  |  0  |
| dots | 是否显示面板指示点 | Boolean   | true |
| vertical | 垂直显示(web 为内容，rn 为 pagination) | Boolean   | false |
| autoplay | 是否自动切换 | Boolean   | false |
| autoplayInterval |  Interval for autoplay iteration |    Number  |  3000         |
| infinite | 是否循环播放 | Boolean   | false |
| afterChange  | 切换面板后的回调函数     | (current: number): void  | 无
| easing (`web only`) | 动画效果 | String   | linear |
| beforeChange  (`web only`)     | 切换面板前的回调函数     | (from: number, to: number): void | 无
| onScrollBeginDrag (`rn only`) | 见 react-native scrollView onScrollBeginDrag | (): void | 无 |
| bounces (`rn only`) | 见 react-native scrollView bounces       |   Boolean      | true |

更多参数可参考：https://github.com/FormidableLabs/nuka-carousel
