---
category: Components
type: Components
chinese: 走马灯
english: Carousel
---

旋转木马，一组轮播的区域。

## 何时使用

- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## API

| 参数             | 说明                                         | 类型     | 默认值                          |
|------------------|----------------------------------------------|----------|---------------------------------|
| mode | 展示模式，可取banner，card，提供定制化的顶部banner型和卡片型两种样式 | String | 无 |
| effect           | 动画效果函数，可取 scrollx, fade | String | scrollx |
| dots | 是否显示面板指示点 | Boolean   | true |
| vertical | 垂直显示 | Boolean   | false |
| autoplay | 是否自动切换 | Boolean   | false |
| easing | 动画效果 | String   | linear |
| beforeChange      | 切换面板的回调                              | function(from, to) | 无
| afterChange       | 切换面板的回调                              | function(current)  | 无

更多参数可参考：https://github.com/akiran/react-slick

<style>
.demo-preview-wrapper .demo-preview-scroller * {
    box-sizing: border-box;
}
.am-carousel .slick-slide {
  text-align: center;
  height: 120px;
  line-height: 120px;
  background: #71B5DE;
  color: #fff;
  overflow: hidden;
}
.variable-width .slick-slide p, h3 {
  background: #71B5DE;
  color: #fff;
  text-align: center;
}
.variable-width .slick-slide p {
  height: 352px;
  margin: 0px 10px;
  line-height: 352px;
}
h3 {
  height: 120px;
}
#components-carousel-demo-vertical .am-carousel {
  margin-right: 35px;
}
</style>
