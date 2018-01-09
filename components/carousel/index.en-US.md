---
category: Components
type: Data Display
title: Carousel
---

## API

Support WEB, React-Native.

Properties | Descrition | Type | Default
-----------|------------|------|--------
| selectedIndex |  current selected index  |  number  |  0  |
| dots | whether to display the indication dots | Boolean | true |
| vertical | for web, this prop controls the content display direction； for react-native, controls the pagination display direction. | Boolean   | false |
| autoplay | autoplay mode active | Boolean   | false |
| autoplayInterval | interval for autoplay iteration | Number | 3000 |
| infinite | whether is infinite loop | Boolean   | false |
| afterChange  | callback to be called after a slide is changed | (current: number): void | |
| dotStyle  | style of dots | Object | |
| dotActiveStyle  | style of active dot | Object  | |
| frameOverflow (`web only`) | Used to set overflow style property on slider frame. | string | `hidden` |
| cellSpacing (`web only`) | Space between slides, as an integer, but reflected as `px` | number | - |
| slideWidth (`web only`) | Manually set slideWidth. If you want hard pixel widths, use a string like `slideWidth="20px"`, and if you prefer a percentage of the container, use a decimal integer like `slideWidth={0.8}` | string / number | - |
| easing (`web only`) | Animation easing function, see valid easings [here](https://github.com/chenglou/tween-functions) | Function | easeOutCirc |
| swipeSpeed (`web only`) | configure the swipe sensitivity | number | 12 |
| beforeChange (`web only`) | callback to be called before a slide is changed | (from: number, to: number): void | |
| onScrollBeginDrag (`rn only`) | as same as react-native scrollView `onScrollBeginDrag` | (): void | - |
| bounces (`rn only`) | as same as react-native scrollView `bounces` | Boolean | true |
| pagination (`rn only`) | A generator function which could be used to customized pagination. | (props) => React.ReactNode  | |
