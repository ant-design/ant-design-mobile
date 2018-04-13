---
order: 3
title:
  zh-CN: 竖向
  en-US: Vertical
---

````jsx
import { Carousel, WingBlank } from 'antd-mobile';

ReactDOM.render(
  <WingBlank>
    <Carousel className="my-carousel"
      vertical
      dots={false}
      dragging={false}
      swiping={false}
      autoplay
      infinite
    >
      <div className="v-item">carousel 1</div>
      <div className="v-item">carousel 2</div>
      <div className="v-item">carousel 3</div>
    </Carousel>
  </WingBlank>
  , mountNode);
````
````css
.my-carousel .v-item {
  height: 36px;
  line-height: 36px;
  padding-left: 10px;
}
````
