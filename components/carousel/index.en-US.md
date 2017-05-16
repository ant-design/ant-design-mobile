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
| dots | whether to display the indication dots | Boolean   | true |
| vertical | for web, this prop controls the content display direction； for react-native, controls the pagination display direction. | Boolean   | false |
| autoplay | autoplay mode active | Boolean   | false |
| autoplayInterval |  interval for autoplay iteration |    Number  |  3000         |
| infinite | whether is infinite loop | Boolean   | false |
| afterChange  | callback to be called after a slide is changed     | (current: number): void  |
| easing (`web only`) | animation timing function | String   | linear |
| beforeChange  (`web only`)     | callback to be called before a slide is changed     | (from: number, to: number): void |
| onScrollBeginDrag (`rn only`) | as same as react-native scrollView `onScrollBeginDrag` | (): void |  |
| bounces (`rn only`) | as same as react-native scrollView `bounces`       |   Boolean      | true |
| pagination (`rn only`) | A generator function which could be used to customized pagination. | (props) => React.ReactNode  | |

More parameters can be found in: https://github.com/FormidableLabs/nuka-carousel (`web only`)
