---
order: 0
title: 基本
---

基本功能展示


````jsx
import { NavBar, Progress, WhiteSpace, Button, Flex, WingBlank } from 'antd-mobile';

const MyProgress = React.createClass({
  getInitialState() {
    return {
      percent: 0,
    };
  },
  increase() {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent, status });
  },
  decline() {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent, status });
  },
  render() {
    return (
      <div className="progress-container">
        {this.state.percent === 100 ? null :
          <div>
            <NavBar iconName={false} mode="light">未填充无色</NavBar>
            <Progress percent={this.state.percent} position="fixed" />
          </div>
        }
        <Progress percent={this.state.percent} position="normal" unfilled="hide" />
        <WhiteSpace size={20} />
        <WingBlank size={20}>
          <Flex>
            <Flex.Item>
              <Button onClick={this.increase}> + </Button>
            </Flex.Item>
            <Flex.Item>
              <Button onClick={this.decline}> - </Button>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size={20} />
        <Progress percent={this.state.percent} position="normal" />
      </div>
    );
  },
});
ReactDOM.render(<MyProgress />, mountNode);
````
