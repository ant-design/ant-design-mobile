---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

使用走马灯时，会遇到“每个项目“的”高度变化“时如何处理的问题：

> [issues/1002](https://github.com/ant-design/ant-design-mobile/issues/1002#issuecomment-287301262)、[nuka-carousel/issues/103](https://github.com/FormidableLabs/nuka-carousel/issues/103)

- 每个项目的高度如果会随着不同状态而变化（例如 img 加载前中后状态）
    - 项目的高度变化后，需要通过设置新的 props (即触发组件的`componentWillReceiveProps`方法) 或触发 window resize 事件能够改变高度，最终的高度大小由你传入的“每个项目自身的高度”大小确定。
    - 因此底层依赖提供的`initialSlideHeight`实际用处不大，只是设置了最开始的高度值，但马上在`componentDidMount`生命周期里去取“每个项目的高度”来做修改，随后也会因为 img 的加载成功或失败而再次修改。(少数情况、如果`componentDidMount`比较晚才执行，`initialSlideHeight`才算有用)
- 每个项目的高度各不相同，默认使用最大高度（`fixedHeight`属性可控制使用可变高度、暂不支持设置）


````jsx
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <WingBlank>
        <div className="sub-title">normal</div>
        <Carousel
          className="my-carousel" autoplay={false} infinite selectedIndex={1}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(ii => (
            <a href="http://www.baidu.com" key={ii} style={hProp}>
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                  });
                }}
              />
            </a>
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
      </WingBlank>
    );
  }
}

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
.sub-title {
  color: #888;
  font-size: .28rem;
  padding: 30px 0 18px 0;
}
````
