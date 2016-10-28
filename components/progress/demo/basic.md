---
order: 0
title: 基本
---

基本功能展示


````jsx
import { Progress, Icon, Flex } from 'antd-mobile';

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
        <Progress percent={this.state.percent} position="fixed" />
        <div style={{ height: '0.36rem' }} />
        <Progress percent={this.state.percent} position="normal" unfilled="hide" />
        <div style={{ height: '0.36rem' }} />
        <Progress percent={this.state.percent} position="normal" />

        <div style={{ fontSize: '0.36rem', marginTop: '0.36rem' }}>
          <Flex
            justify="center"
            className="flex-container-justify"
          >
            <div className="action">
              { this.state.autoplayPaused ? (
                <Icon type="caret-right" onClick={this.play} />
              ) : (
                <Icon type="pause" onClick={this.stop} />
              ) }
            </div>
            <div className="action">
              <Icon type="reload" onClick={this.reset} />
            </div>
          </Flex>
          <div style={{ height: 16 }} />
          <Flex
            justify="center"
            className="flex-container-justify action-info"
          >
            <div className="action">
              { this.state.autoplayPaused ? '播放' : '暂停' }
            </div>
            <div className="action">
              重置
            </div>
          </Flex>
        </div>
      </div>
    );
  },
});
ReactDOM.render(<MyProgress />, mountNode);
````

```css
.action {
  width: 3rem;
  text-align: center;
}
.action-info {
  color: #000;
}
```
