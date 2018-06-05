---
category: Components
type: Data Display
title: Grid
---

We divided the design area into a number of aliquots in horizontal and vertical.

### Rules
- The contents of the blocks should have the same type. eg: they are all pictures or icons with text.

## API

Properties | Description | Type | Default
-----------|------------|------|--------
| data    |    data record array to be rendered     | `Array<{icon, text}>`  | [] |
| onClick    |   Handler to be called when the user taps the grid   | (el: Object, index: number): void  | - |
| columnNum    |   the number of columns   | number  |  `4` |
| hasLine    |   whether to show border    | boolean  |  `true` |
| isCarousel    |   whether to be played as a Carousel    | boolean  | `false` |
| carouselMaxRow    |   the max number of rows to be showed each page of the Carousel   | number  | `2` |
| renderItem    |   custom function to create each grid item   | (el, index) => React.Node  | - |
| square    |   whether each item restrict to a square   | boolean | true |
| activeStyle | the feedback's custom style (set to false to disable click feedback) | {}/false | {} |
| activeClassName  | the feedback's custom class name | string |  |
| itemStyle| Custom GridCell Style| object|{} |
When `isCarousel = true`, the APIs of [carousel](https://mobile.ant.design/components/carousel) also can be delivered.
