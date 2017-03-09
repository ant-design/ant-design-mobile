---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

数字输入框。


````jsx
import { List, Stepper } from 'antd-mobile';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 3,
    };
  }
  onChange = (val) => {
    // console.log(val);
    this.setState({ val });
  }
  render() {
    return (
      <List renderHeader={() => '演示'}>
        <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '2rem' }}
            showNumber max={10} min={1} value={this.state.val} onChange={this.onChange}
          />}
          wrap
        >
        显示数值(pc 上操作无效)
        </List.Item>
        <List.Item extra={
          <Stepper
            style={{ width: '100%', minWidth: '2rem' }}
            showNumber max={10} min={1} value={this.state.val} onChange={this.onChange}
            useTouch={false}
          />}
          wrap
        >
        显示数值(只用于 pc 演示，勿用于实际项目)
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
  }
}
ReactDOM.render(<Demo />, mountNode);
````
