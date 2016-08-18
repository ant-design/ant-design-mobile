---
order: 2
title: 顶部模式
---

最简单的用法。

````jsx
import { Carousel } from 'antd-mobile';

function onChange(a, b, c) {
  console.log(a, b, c);
}

ReactDOM.render(
  <Carousel afterChange={onChange} mode="banner">
    <div><h3>Pic1</h3></div>
    <div><h3>Pic2</h3></div>
    <div><h3>Pic3</h3></div>
    <div><h3>Pic4</h3></div>
  </Carousel>
, mountNode);
````

<style>
.am-carousel .slick-slide {
  text-align: center;
  height: 480px;
  line-height: 480px;
  background: #71B5DE;
  color: #fff;
  overflow: hidden;
}
.am-carousel h3 {
  height: 480px;
}
.am-carousel-card .slick-slide p, .am-carousel h3 {
  background: #71B5DE;
  color: #fff;
  text-align: center;
  margin: 0;
}
.am-carousel-card .slick-slide p {
  margin: 0px 10px;
  height: 152px;
  line-height: 152px;
}
</style>
