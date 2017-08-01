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
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const now = new Date(2017, 7, 1, 15, 3);
const maxDate = new Date(2016, 11, 3, 22, 0);
const minDate = new Date(2015, 7, 6, 8, 30);

const gmtNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

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
    date: now,
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
            initialValue: now,
          })}
          minDate={minDate}
          maxDate={maxDate}
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
          format={val => val.toLocaleString()}
          okText="OK"
          dismissText="Cancel"
          locale={enUs}
          {...getFieldProps('customformat', {
            initialValue: gmtNow,
          })}
        >
          <List.Item arrow="horizontal">UK time</List.Item>
        </DatePicker>
        <List.Item extra={this.state.dpValue && this.state.dpValue.toDateString()}>
          <div onClick={() => this.setState({ visible: true })}>自定义控制显示/隐藏的元素</div>
        </List.Item>
        <DatePicker
          visible={this.state.visible}
          title={<span onClick={() => this.setState({ visible: false })}>点击可以关闭</span>}
          extra="请选择(可选)"
          onOk={() => console.log('onOk', this.state.dpValue)}
          onDismiss={() => console.log('onDismiss')}
          value={this.state.dpValue}
          onChange={v => this.setState({ dpValue: v, visible: false })}
        />
        <DatePicker
          use12Hours
          format="HH:mm"
          title="选择时间"
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
