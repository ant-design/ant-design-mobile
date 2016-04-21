import React from 'react';
import Page from '../common/Page';
import { List, ListDatePicker } from 'antm';
import { createForm } from 'rc-form';

let DatePickerExample = React.createClass({
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Page title="DatePicker" subtitle="&lt;DatePicker mode='date' minDate='2016-01-29' /&gt;">
        <List>
          <List.Header>店铺位置</List.Header>
          <List.Body>
            <ListDatePicker
              mode="date"
              { ...getFieldProps('date1', {
                initialValue: ''
              })}
              minDate="2014-08-06"
              maxDate="2016-12-3"
            >
              <List.Item arrow="horizontal">日期</List.Item>
            </ListDatePicker>
            <ListDatePicker
              mode="time"
              { ...getFieldProps('time1', {
                initialValue: ''
              })}
            >
              <List.Item arrow="horizontal">时间,不限定上下限</List.Item>
            </ListDatePicker>
            <ListDatePicker
              mode="time"
              { ...getFieldProps('time', {
                initialValue: ''
              })}
              minDate="00:30"
              maxDate="22:00"
            >
              <List.Item arrow="horizontal">时间</List.Item>
            </ListDatePicker>
            <ListDatePicker mode="datetime" { ...getFieldProps('datetime', {
              initialValue: ''
            })}
            >
              <List.Item arrow="horizontal">日期+时间</List.Item>
            </ListDatePicker>
          </List.Body>
        </List>
      </Page>
    );
  },
});

DatePickerExample = createForm()(DatePickerExample);

export default DatePickerExample;
