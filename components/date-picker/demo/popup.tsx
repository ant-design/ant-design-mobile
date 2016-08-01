/* tslint:disable:no-console */
import { View } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
import * as React from 'react';
import moment from 'moment';

export default class PopupExample extends React.Component<any, any> {
  date1MinDate: any;
  date1MaxDate: any;
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    return (<View>
      <List>
        <List.Body>
          <DatePicker
            value={this.state.value}
            mode="date"
            minDate={this.date1MinDate || (this.date1MinDate = moment('2015-08-06','YYYY-MM-DD'))}
            maxDate={this.date1MaxDate || (this.date1MaxDate = moment('2016-12-06','YYYY-MM-DD'))}
            onChange={this.onChange}
          >
              <List.Item
                arrow="horizontal"
                extra={this.state.value}
                last
              >
                选择时间
              </List.Item>
          </DatePicker>
        </List.Body>
      </List>
    </View>);
  }
}
