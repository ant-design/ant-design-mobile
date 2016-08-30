---
category: UI Controls
type: UI Controls
chinese: 走马灯
english: Carousel
---


### 定义／Definition
将图形化的对象组成列表放入到一个水平放置的带状或弓形区域中，并允许用户向前或向后滚动走马灯来查看他们。

### 规则 / Rule
1. 所展示信息属于同一个层级。
2. 当没有足够的空间来放置缩略图网格的时候使用。
3. 这一模式可以鼓励用户浏览和探索。
4. 分区的模块的内容有关或相仿。


## API

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| mode (`web only`) | 展示模式，可取banner，card，提供定制化的顶部banner型和卡片型两种样式 | String | 无 |
| effect (`web only`)          | 动画效果函数，可取 scrollx, fade | String | scrollx |
| dots | 是否显示面板指示点 | Boolean   | true |
| vertical (`web only`) | 垂直显示 | Boolean   | false |
| autoplay | 是否自动切换 | Boolean   | false |
| easing (`web only`) | 动画效果 | String   | linear |
| beforeChange  (`web only`)     | 切换面板的回调                              | function(from, to) | 无
| afterChange   (`web only`)     | 切换面板的回调                              | function(current)  | 无

更多参数可参考：https://github.com/akiran/react-slick
