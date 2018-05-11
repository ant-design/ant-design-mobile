---
order: 1
title:
  zh-CN: 子元素数量变化
  en-US: Dynamic child elements
---


````jsx
import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    slideIndex: 2,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  componentDidUpdate() {
    // After the new child element is rendered, change the slideIndex
    // https://github.com/FormidableLabs/nuka-carousel/issues/327
    if (this.state.slideIndex !== this.state.data.length - 1) {
      /* eslint react/no-did-update-set-state: 0 */
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render() {
    return (
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              data: this.state.data.concat('AiyWuByWklrrUDlFignR'),
            });
          }}
        >Click me to add child</Button>
        <WhiteSpace />
        <Carousel
          autoplay={false}
          infinite
          selectedIndex={this.state.slideIndex}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map((val, index) => (
            <a
              key={val + index}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
