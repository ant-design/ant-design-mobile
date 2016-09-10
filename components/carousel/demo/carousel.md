---
order: 2
title: 图片切换
---

图片切换

````jsx
import { WhiteSpace, WingBlank, Carousel } from 'antd-mobile';

const App = React.createClass({
  getInitialState() {
    return {
      current: 2,
    };
  },

  beforeSlide(from, to) {
    console.log(`slide from ${from} to ${to}`);
  },

  slideTo(index) {
    console.log('slide to', index);
  },

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      mode: 'banner',
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    };
    return (
      <div>
        <div className="pagination-container" >
          <WhiteSpace size="lg" />
          <WingBlank>
            <Carousel {...settings}>
              <div className="item"><h3>Carousel 1</h3></div>
              <div className="item"><h3>Carousel 2</h3></div>
              <div className="item"><h3>Carousel 3</h3></div>
            </Carousel>
          </WingBlank>
          <WhiteSpace size="lg" />
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.loading-example .title {
  margin-right: 0.2rem;
}
.slider {
  background: #fff;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.6rem !important;
}
.item h3 {
  font-size: 34px;
  font-weight: 300;
}
````