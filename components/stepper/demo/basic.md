---
order: 0
title: 基本
---

数字输入框。


````jsx
import { List, Stepper } from 'antd-mobile';

const Demo = React.createClass({
  getInitialState() {
    return { val: 3 };
  },
  onChange(val) {
    // console.log(val);
    this.setState({ val });
  },
  render() {
    return (
      <List renderHeader={() => '演示'}>
        <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '2rem' }}
            showNumber max={10} min={1} value={this.state.val} onChange={this.onChange}
          />}
        >
        显示数值
        </List.Item>
        <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '2rem' }}
            showNumber max={10} min={1} defaultValue={3} disabled
          />}
        >
        禁用
        </List.Item>
      </List>
    );
  },
});
ReactDOM.render(<Demo />, mountNode);
````
