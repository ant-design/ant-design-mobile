---
order: 0
title: 基本
---

基本功能展示


````jsx
import { NavBar, Progress, Icon, WhiteSpace, Flex, WingBlank } from 'antd-mobile';

const MyProgress = React.createClass({
  getInitialState() {
    return {
      percent: 0,
      autoplayPaused: null,
    };
  },
  componentDidMount() {
    this.play();
  },
  componentWillUnmount() {
    this.stop();
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 0;
    }
    this.setState({ percent });
  },
  play() {
    this.autoplayID = setInterval(this.increase, 1000);
    this.setState({ autoplayPaused: null });
  },

  stop() {
    if (this.autoplayID) {
      clearInterval(this.autoplayID);
    }
    this.setState({ autoplayPaused: true });
  },

  reset() {
    this.stop();
    this.setState({ percent: 0 }, function () {
      this.play();
    });
  },

  render() {
    return (
      <div className="progress-container">
        <div>
          <NavBar iconName={false} mode="light">未填充无色</NavBar>
          <Progress percent={this.state.percent} position="fixed" />
        </div>

        <Progress percent={this.state.percent} position="normal" unfilled="hide" />
        <WhiteSpace size="lg" />
        <WhiteSpace size="lg" />

        <NavBar iconName={false} mode="light">未填充有色</NavBar>
        <Progress percent={this.state.percent} position="normal" />

        <WhiteSpace size="xl" />
        <WingBlank size="lg" className="control">
          <Flex
            justify="center"
            className="flex-container-justify"
          >
            <div className="action">
              { this.state.autoplayPaused ?
                <Icon type="caret-right" onClick={this.play} />
                :
                <Icon type="pause" onClick={this.stop} />
              }
            </div>
            <div className="action">
              <Icon type="reload" onClick={this.reset} />
            </div>
          </Flex>
          <WhiteSpace size="lg" />
          <Flex
            justify="center"
            className="flex-container-justify"
          >
            <div className="action">
              { this.state.autoplayPaused ? '播放' : '暂停' }
            </div>
            <div className="action">
              重置
            </div>
          </Flex>
        </WingBlank>
      </div>
    );
  },
});
ReactDOM.render(<MyProgress />, mountNode);
````

```css
.control {
  font-size: 0.36rem;
  color: #000;
}
.action {
  width: 3rem;
  text-align: center;
}
```