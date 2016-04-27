---
order: 0
title: ActionSheet
---


````jsx
import { ActionSheet, Button, WingBlank, WhiteSpace } from 'antm';

const Test = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  onClick() {
    this.setState({
      visible: true,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
  render() {
    let as = null;
    if (this.state.visible) {
      as = (
        <ActionSheet visible={this.state.visible} onClose={this.onClose}>
          <WingBlank>
            <Button type="primary">操作 1</Button>
          </WingBlank>
          <WhiteSpace />
          <WingBlank>
            <Button type="primary" ghost>操作 2</Button>
          </WingBlank>
          <WhiteSpace />
          <WingBlank>
            <Button onClick={this.onClose}>取消</Button>
          </WingBlank>
        </ActionSheet>
      );
    }
    return (<div>
      <Button type="primary" onClick={this.onClick}>show ActionSheet</Button>
      {as}
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
