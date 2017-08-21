---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

````jsx

import { DatePicker, List } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const maxDate = new Date(nowTimeStamp + 1e7);
const minDate = new Date(nowTimeStamp - 1e7);

// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

// 如果不是使用 List.Item 作为 children
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
  >
    {props.children}
    <span style={{ float: 'right', color: '#888' }}>{props.extra}</span>
  </div>
);

class Test extends React.Component {
  state = {
    date: now,
    utcDate: utcNow,
    dpValue: null,
    visible: false,
  }
  onChange = (date) => {
    // console.log('onChange', date);
    this.setState({ date });
  }
  onConditionSelect = (date) => {
    if (date.getMinutes() === 15) {
      alert('15 is invalid');
      return;
    }
    this.setState({ dpValue: date, visible: false });
  }
  render() {
    return (<div>
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
        <DatePicker value={this.state.date} onChange={this.onChange}>
          <List.Item arrow="horizontal">日期+时间</List.Item>
        </DatePicker>
        <DatePicker mode="date" title="选择日期" extra="可选" value={this.state.date} onChange={this.onChange}>
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
        <DatePicker mode="time" minuteStep={5} use12Hours value={this.state.date} onChange={this.onChange}>
          <List.Item arrow="horizontal">时间</List.Item>
        </DatePicker>
        <DatePicker mode="time" minDate={minDate} maxDate={maxDate} value={this.state.date} onChange={this.onChange}>
          <List.Item arrow="horizontal">时间，限定上下限</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          locale={enUs}
          format={val => `UTC Time: ${formatDate(val).split(' ')[1]}`}
          value={this.state.utcDate}
          onChange={date => this.setState({ utcDate: date })}
        >
          <List.Item arrow="horizontal">utc time</List.Item>
        </DatePicker>

        <List.Item extra={this.state.dpValue && formatDate(this.state.dpValue)}>
          <div onClick={() => this.setState({ visible: true })}>条件选择(不能选15分钟)</div>
        </List.Item>
        <DatePicker
          visible={this.state.visible}
          value={this.state.dpValue}
          onOk={this.onConditionSelect}
          onDismiss={() => this.setState({ visible: false })}
        />
        <DatePicker
          format="HH:mm"
          title="选择时间"
          value={this.state.dpValue}
          onChange={v => this.setState({ dpValue: v })}
        >
          <CustomChildren>时间选择(自定义 children)</CustomChildren>
        </DatePicker>
      </List>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
````css
.date-picker-list .am-list-item .am-list-line .am-list-extra {
  flex-basis: initial;
}
````
