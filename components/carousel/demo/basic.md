---
order: 0
title: 示例
---


````jsx
import { Carousel } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (<div>
      <div style={{ color: '#888', margin: '0.2rem' }}>normal</div>
      <Carousel className="my-carousel" autoplay infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        <div className="item">Carousel 1</div>
        <div className="item">Carousel 2</div>
        <div className="item">Carousel 3</div>
      </Carousel>

      <div style={{ color: '#888', margin: '0.2rem' }}>vertical</div>
      <Carousel className="my-carousel" dots={false} dragging={false} autoplay infinite vertical>
        <div className="v-item">Carousel 1</div>
        <div className="v-item">Carousel 2</div>
        <div className="v-item">Carousel 3</div>
      </Carousel>
    </div>);
  },
});

ReactDOM.render(<App />, mountNode);
````
````css
.my-carousel .slider {
  background: #fff;
}
.my-carousel .item {
  height: 3.6rem;
  line-height: 3.6rem;
  text-align: center;
}
.my-carousel .v-item {
  height: 0.72rem;
  line-height: 0.72rem;
  padding-left: 0.2rem;
}
````
