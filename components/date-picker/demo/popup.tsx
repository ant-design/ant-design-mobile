/* tslint:disable:no-console */
import { View } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';

const defaultDate = moment().locale('zh-cn').utcOffset(8);

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
    this.setState({value});
  }

  render() {
    return (<View>
      <List>
        <DatePicker
          defaultDate={defaultDate}
          value={this.state.value}
          mode="date"
          minDate={this.date1MinDate || (this.date1MinDate = moment('2015-08-06','YYYY-MM-DD'))}
          maxDate={this.date1MaxDate || (this.date1MaxDate = moment('2016-12-06','YYYY-MM-DD'))}
          onChange={this.onChange}
          format={val => val.fromNow()}
        >
          <List.Item arrow="horizontal">
            选择时间
          </List.Item>
        </DatePicker>
      </List>
    </View>);
  }
}
