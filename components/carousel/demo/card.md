---
order: 2
title: 卡片模式
---

最简单的用法。

````jsx
import { Carousel } from 'antm';

const settings = {
  mode: 'card',
  beforeChange(index) {
    console.log(`Slider will change from: ${index}`);
  },
  afterChange(currentSlide) {
    console.log(`Slider Changed to : ${(currentSlide + 1)}`);
  }
};

ReactDOM.render(
  <Carousel {...settings}>
  <div style={{ width: 272 }}><p>Pic1</p></div>
  <div style={{ width: 272 }}><p>Pic2</p></div>
  <div style={{ width: 272 }}><p>Pic3</p></div>
  <div style={{ width: 272 }}><p>Pic4</p></div>
  <div style={{ width: 272 }}><p>Pic5</p></div>
  </Carousel>
, mountNode);
````
