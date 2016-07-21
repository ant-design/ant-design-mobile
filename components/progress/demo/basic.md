---
order: 0
title: 基本
---

基本功能展示


````jsx
import { Progress, WhiteSpace, Button, Flex, WingBlank } from 'antm';

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
          <Progress percent={this.state.percent} position="fixed" />
        }
        <Progress percent={this.state.percent} position="normal" />
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
      </div>
    );
  },
});
ReactDOM.render(<MyProgress />, mountNode);
````
