---
order: 0
title: 基本
---

最简单的用法。

````jsx
import { Carousel } from 'antm';

function onChange(a, b, c) {
  console.log(a, b, c);
}

ReactDOM.render(
  <Carousel afterChange={onChange}>
    <div><h3>Pic1</h3></div>
    <div><h3>Pic2</h3></div>
    <div><h3>Pic3</h3></div>
    <div><h3>Pic4</h3></div>
    <div><h3>Pic5</h3></div>
  </Carousel>
, mountNode);
````
