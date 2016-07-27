/* tslint:disable:no-console */
import { View, TouchableWithoutFeedback } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
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
            <TouchableWithoutFeedback>
              <List.Item
                arrow="horizontal"
                extra={this.state.value}
              >
                选择时间
              </List.Item>
            </TouchableWithoutFeedback>
          </DatePicker>
        </List.Body>
      </List>
    </View>);
  }
}
