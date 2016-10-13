---
order: 2
title: 内容为图片
---

图片切换

````jsx
import { WhiteSpace, WingBlank, Flex, Carousel } from 'antd-mobile';

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
      selectedIndex: this.state.current,
      beforeChange: this.beforeSlide,
      afterChange: this.slideTo,
    };
    return (
      <div>
        <div className="pagination-container" >
          <WingBlank>
            <Carousel {...settings}>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 1</h3>
              </Flex>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 2</h3>
              </Flex>
              <Flex
                justify="center"
                className="flex-container-justify"
              >
                <h3>Carousel 3</h3>
              </Flex>
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
.flex-container-justify {
  height: 3.6rem !important;
}
.flex-container-justify h3 {
  font-size: 0.36rem;
  font-weight: 300;
  text-align: center;
}
````