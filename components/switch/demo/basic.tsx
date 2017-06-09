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
        <List.Item extra={<Switch checked />}>On(controlled)</List.Item>
        <List.Item extra={<Switch />}>Off(controlled)</List.Item>
        <List.Item extra={<Switch checked={this.state.checked} onChange={this.onSwitchChange} />}>
          onChange event, switch status: {this.state.checked ? 'open' : 'close'}
        </List.Item>
        <List.Item extra={<Switch disabled />}>disabled</List.Item>
      </List>
    );
  }
}
