import {View, TouchableHighlight, StyleSheet} from 'react-native';
import { DatePicker, List } from 'antm';
import * as React from 'react';

export default class PopupExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  }
  render() {
    return (<View>
      <List>
        <List.Body>
          <DatePicker
            triggerType="onClick"
            value={this.state.value}
            mode="date"
            minDate="2015-08-06"
            maxDate="2016-12-3"
            onChange={this.onChange}
          >
            <List.Item arrow="horizontal">选择时间</List.Item>
          </DatePicker>
        </List.Body>
      </List>
    </View>);
  }
}

export const title = 'DatePicker';
export const description = 'DatePicker example';
