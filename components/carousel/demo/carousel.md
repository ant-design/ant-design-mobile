---
order: 3
title: 图片切换
---

图片切换

````jsx
import { WhiteSpace, WingBlank, Carousel } from 'antd-mobile';

const App = React.createClass({
  getInitialState() {
    return {
      current: 1,
    };
  },
  slideTo(index) {
    this.setState({ current: index });
  },
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      mode: 'banner',
      initialSlide: this.state.current,
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
.pagination-container {
  
}
.item {
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 3.6rem !important;
  font-size: 34px;
  font-weight: 300;
}
````