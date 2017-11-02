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
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
  /* eslint no-confusing-arrow: 0 */
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
  return `${dateStr} ${timeStr}`;
}

// If not using `List.Item` as children
// The `onClick / extra` props need to be processed within the component
const CustomChildren = ({ extra, onClick, children }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: '#fff', height: '45px', lineHeight: '45px', padding: '0 15px' }}
  >
    {children}
    <span style={{ float: 'right', color: '#888' }}>{extra}</span>
  </div>
);

class Demo extends React.Component {
  state = {
    date: now,
    time: now,
    utcDate: utcNow,
    dpValue: null,
    customChildValue: null,
    visible: false,
  }
  render() {
    return (
      <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
        <DatePicker
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">Datetime</List.Item>
        </DatePicker>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>

        <DatePicker
          mode="time"
          minuteStep={2}
          use12Hours
          value={this.state.time}
          onChange={time => this.setState({ time })}
        >
          <List.Item arrow="horizontal">Time (am/pm)</List.Item>
        </DatePicker>
        <DatePicker
          mode="time"
          minDate={minDate}
          maxDate={maxDate}
          value={this.state.time}
          onChange={time => this.setState({ time })}
        >
          <List.Item arrow="horizontal">Limited time</List.Item>
        </DatePicker>

        <DatePicker
          mode="time"
          locale={enUs}
          format={val => `UTC Time: ${formatDate(val).split(' ')[1]}`}
          value={this.state.utcDate}
          onChange={date => this.setState({ utcDate: date })}
        >
          <List.Item arrow="horizontal">UTC time</List.Item>
        </DatePicker>

        <List.Item
          extra={this.state.dpValue && formatDate(this.state.dpValue)}
          onClick={() => this.setState({ visible: true })}
        >
          External control visible state
        </List.Item>
        <DatePicker
          visible={this.state.visible}
          value={this.state.dpValue}
          onOk={date => this.setState({ dpValue: date, visible: false })}
          onDismiss={() => this.setState({ visible: false })}
        />

        <DatePicker
          mode="time"
          format="HH:mm"
          title="Select Time"
          value={this.state.customChildValue}
          onChange={v => this.setState({ customChildValue: v })}
          extra="click to choose"
        >
          <CustomChildren>With customized children</CustomChildren>
        </DatePicker>
      </List>
    );
  }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.date-picker-list .am-list-item .am-list-line .am-list-extra {
  flex-basis: initial;
}
````
