---
order: 3
title: 轮播图
---

轮播图。

````jsx
import { Pagination, WhiteSpace, WingBlank, Carousel } from 'antd-mobile';

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
      dots: false,
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
              <div><img src="https://zos.alipayobjects.com/rmsportal/JKLbnnQSjYXnfUq.jpg" width="100%" /></div>
              <div><img src="https://zos.alipayobjects.com/rmsportal/IHnTTMjYUgthhoW.jpg" width="100%" /></div>
              <div><img src="https://zos.alipayobjects.com/rmsportal/IDTtiHCFYvnGJjl.jpg" width="100%" /></div>
            </Carousel>
            <Pagination
              mode="pointer"
              total={3}
              current={this.state.current}
            />
          </WingBlank>
        </div>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.loading-example .title {
  margin-right: 20px;
}
````