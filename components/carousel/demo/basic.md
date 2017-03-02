---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---


````jsx
import { Carousel, WhiteSpace } from 'antd-mobile';

const App = () => (
  <div className="need-left-right-margin">
    <div className="sub-title">normal</div>
    <Carousel
      className="my-carousel" autoplay={false} infinite
      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
      afterChange={index => console.log('slide to', index)}
    >
      {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'].map(ii => (
        <a href="#" key={ii}><img src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`} /></a>
      ))}
    </Carousel>
    <WhiteSpace />
    <div className="sub-title">vertical</div>
    <Carousel className="my-carousel"
      dots={false} dragging={false} swiping={false} autoplay infinite vertical
    >
      <div className="v-item">Carousel 1</div>
      <div className="v-item">Carousel 2</div>
      <div className="v-item">Carousel 3</div>
    </Carousel>
  </div>
);

ReactDOM.render(<App />, mountNode);
````
````css
.my-carousel {
  background: #fff;
}
.my-carousel a {
  display: inline-block;
  width: 100%;
  margin: 0; padding: 0;
}
.my-carousel a img {
  width: 100%;
  vertical-align: top;
}
.my-carousel .v-item {
  height: 0.72rem;
  line-height: 0.72rem;
  padding-left: 0.2rem;
}
````
