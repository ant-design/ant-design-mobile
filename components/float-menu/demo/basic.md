---
order: 0
title: FloatMenu
---


````jsx
import { FloatMenu, Button, WingBlank, WhiteSpace } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  handleVisibleChange(visible) {
    this.setState({
      visible,
    });
  },
  render() {
    const overlay = (<div>
      <WingBlank>
        <Button type="primary">操作 1</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" ghost>操作 2</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button onClick={() => this.handleVisibleChange(false)}>取消</Button>
      </WingBlank>
    </div>);
    return (<div>
      <FloatMenu
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        overlay={overlay}
      >
        <a href="#">menu</a>
      </FloatMenu>
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
