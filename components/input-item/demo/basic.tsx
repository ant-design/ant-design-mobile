import * as React from 'react';
import { View, Image, TextInput } from 'react-native';
import { InputItem, List } from 'antm';

// <InputItem>基本</InputItem>
export default class BasicInputItemExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
    };
  }

  render() {
    return (
      <List>
        <List.Body>
          <InputItem
            clear
            error
            value={this.state.value}
            onChange={(value) => {
              this.setState({
                value: value
              });
            }}
            placeholder="有标签"
          >输入框1</InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value) => {
              this.setState({
                value1: value
              });
            }}
            placeholder="无标签"
            last
          />
        </List.Body>
      </List>
    );
  }
}
