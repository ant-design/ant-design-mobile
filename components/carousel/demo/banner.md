---
order: 1
title: 顶部模式
---

最简单的用法。

````jsx
import { Carousel } from 'antm';

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
