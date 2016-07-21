---
order: 0
title: 基本
---

日期时间选择示例

````jsx

import { DatePicker, List } from 'antm';
import { createForm } from 'rc-form';

let Test = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <List>
        <List.Header>选择时间</List.Header>
        <List.Body>
          <DatePicker
            className="am-date-picker"
            mode="date"
            title="选择日期"
            extra="可选,小于结束日期"
            { ...getFieldProps('date1', {
              initialValue: '2015-08-06',
            })}
            minDate="2014-08-06"
            maxDate="2016-12-3"
          >
            <List.Item arrow="horizontal">日期</List.Item>
          </DatePicker>
          <DatePicker mode="time" { ...getFieldProps('time1', {
            initialValue: '',
          })}
          >
            <List.Item arrow="horizontal">时间,不限定上下限</List.Item>
          </DatePicker>
          <DatePicker mode="time" { ...getFieldProps('time', {
            initialValue: '',
          })}
            minDate="00:30"
            maxDate="22:00"
          >
            <List.Item arrow="horizontal">时间</List.Item>
          </DatePicker>
          <DatePicker mode="datetime" { ...getFieldProps('datetime', {
            initialValue: '',
          })}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
          <DatePicker
            mode="datetime"
            format={val => val}
            { ...getFieldProps('customformat', {
              initialValue: '',
            })}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
        </List.Body>
      </List>
    </div>);
  },
});

Test = createForm()(Test);

ReactDOM.render(<Test />, mountNode);
````
