import React from 'react';
import { List, Switch } from 'antd-mobile';

export default class SwitchExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onSwitchChange = (value) => {
    this.setState({
      checked: value,
    });
  }
  render() {
    return (
      <List style={{ marginTop: 20 }}>
        <List.Item extra={<Switch checked />}>默认开(受控)</List.Item>
        <List.Item extra={<Switch />}>默认关(受控)</List.Item>
        <List.Item extra={<Switch checked={this.state.checked} onChange={this.onSwitchChange} />}>
          onChange 事件，开关状态：{this.state.checked ? 'open' : 'close'}
        </List.Item>
        <List.Item extra={<Switch disabled />}>默认关不可修改</List.Item>
      </List>
    );
  }
}
