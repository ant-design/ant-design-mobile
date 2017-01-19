---
order: 0
title: 示例
---


````__react
import { Carousel } from 'antd-mobile';

const App = React.createClass({
  render() {
    return (<div>
      <div style={{ color: '#888', margin: '0.2rem' }}>normal</div>
      <Carousel
        className="my-carousel" autoplay={false} infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
      >
        {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'].map((ii) => (
          <a href="#" key={ii}><img src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`} /></a>
        ))}
      </Carousel>

      <div style={{ color: '#888', margin: '0.2rem' }}>vertical</div>
      <Carousel className="my-carousel"
        dots={false} dragging={false} swiping={false} autoplay infinite vertical
      >
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
