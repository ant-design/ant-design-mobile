---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

日期时间选择示例 ([rc-form 文档](https://github.com/react-component/form))

````jsx

import { DatePicker, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2018-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

const maxTime = moment('22:00 +0800', 'HH:mm Z').utcOffset(8);
const minTime = moment('08:30 +0800', 'HH:mm Z').utcOffset(8);

const gmtNow = moment().utcOffset(0);

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
  >
    {props.children}
    <span style={{ float: 'right', color: '#888' }}>{props.extra}</span>
  </div>
);

class Test extends React.Component {
  state = {
    date: zhNow,
    dpValue: null,
    visible: false,
  }
  onChange = (date) => {
    // console.log('onChange', date);
    this.setState({
      date,
    });
  }
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <List
        className="date-picker-list"
        style={{ backgroundColor: 'white' }}
      >
        <DatePicker
          mode="date"
          title="选择日期"
          extra="可选,小于结束日期"
          {...getFieldProps('date1', {
            initialValue: zhNow,
          })}
          minDate={minDate}
          maxDate={maxDate}
        >
          <List.Item arrow="horizontal">日期(CST)</List.Item>
        </DatePicker>
        <DatePicker mode="time" {...getFieldProps('time1')} minuteStep={5}>
          <List.Item arrow="horizontal">时间(local time)</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          {...getFieldProps('time', {
            initialValue: zhNow,
          })}
          minDate={minTime}
          maxDate={maxTime}
        >
          <List.Item arrow="horizontal">时间(CST)，限定上下限</List.Item>
        </DatePicker>
        <DatePicker className="forss"
          mode="datetime"
          onChange={this.onChange}
          value={this.state.date}
        >
          <List.Item arrow="horizontal">日期+时间</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          format={val => val.format('HH:mm Z')}
          okText="OK"
          dismissText="Cancel"
          locale={enUs}
          {...getFieldProps('customformat', {
            initialValue: gmtNow,
          })}
        >
          <List.Item arrow="horizontal">time(utc, UK time)</List.Item>
        </DatePicker>
        <List.Item extra={this.state.dpValue && this.state.dpValue.format('HH:mm Z')}>
          <div onClick={() => this.setState({ visible: true })}>自定义控制显示/隐藏的元素</div>
        </List.Item>
        <DatePicker
          visible={this.state.visible}
          mode="date"
          title={<span onClick={() => this.setState({ visible: false })}>点击可以关闭</span>}
          extra="请选择(可选)"
          onOk={() => console.log('onOk')}
          onDismiss={() => console.log('onDismiss')}
          value={this.state.dpValue}
          onChange={v => this.setState({ dpValue: v, visible: false })}
        />
        <DatePicker
          mode="date"
          title="选择日期"
          extra="请选择(可选)"
          value={this.state.dpValue}
          onChange={v => this.setState({ dpValue: v })}
        >
          <CustomChildren>时间选择(自定义 children)</CustomChildren>
        </DatePicker>
      </List>
    </div>);
  }
}

const TestWrapper = createForm()(Test);

ReactDOM.render(<TestWrapper />, mountNode);
````
````css
.date-picker-list .am-list-item .am-list-line .am-list-extra {
  flex-basis: initial;
}
````
