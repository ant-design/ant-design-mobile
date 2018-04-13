---
order: 4
title:
  zh-CN: 抽奖
  en-US: Lottery
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
      speed={200}
      autoplayInterval={300}
      resetAutoplay={false}
    >
      {['ring', 'ruby', 'iPhone', 'iPod', 'sorry', 'tourism', 'coke', 'ticket', 'note'].map(type => (
        <div className="v-item" key={type}>{type}</div>
      ))}
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
