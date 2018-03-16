// tslint:disable:jsx-no-multiline-js
import { List, Switch } from 'antd-mobile';
import React from 'react';

export default class SwitchExample extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  onSwitchChange = (value: any) => {
    this.setState({
      checked: value,
    });
  }
  render() {
    return (
      <List style={{ marginTop: 20 }}>
        <List.Item extra={<Switch checked />}>On(controlled)</List.Item>
        <List.Item extra={<Switch />}>Off(controlled)</List.Item>
        <List.Item
          extra={
            <Switch
              checked={this.state.checked}
              onChange={this.onSwitchChange}
            />
          }
        >
          onChange event, switch status: {this.state.checked ? 'open' : 'close'}
        </List.Item>
        <List.Item extra={<Switch disabled />}>disabled</List.Item>
        <List.Item extra={<Switch color="red" checked />}>color</List.Item>
      </List>
    );
  }
}
