---
order: 1
title:
  zh-CN: 结合 form 验证示例
  en-US: With form validation
---

## zh-CN

日期时间选择示例， ([rc-form](https://github.com/react-component/form))

## en-US

Examples for `DatePicker`, ([rc-form](https://github.com/react-component/form))


````jsx

import { DatePicker, List, Button, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));
// console.log(now, utcOffset, now.toISOString(), utcOffset.toISOString());

class Test extends React.Component {
  state = {
    dpValue: now,
    idt: utcOffset.toISOString().slice(0, 10),
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
      } else {
        console.log(error);
        alert('Validation failed');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
    setTimeout(() => console.log(this.state), 0);
  }
  validateIdp = (rule, date, callback) => {
    if (isNaN(Date.parse(date))) {
      callback(new Error('Invalid Date'));
    } else {
      const cDate = new Date(date);
      const newDate = new Date(+this.state.dpValue);
      newDate.setFullYear(cDate.getFullYear());
      newDate.setMonth(cDate.getMonth());
      newDate.setDate(cDate.getDate());
      // this.setState({ dpValue: newDate });
      setTimeout(() => this.props.form.setFieldsValue({ dp: newDate }), 10);
      callback();
    }
  }
  validateDatePicker = (rule, date, callback) => {
    if (date && date.getMinutes() !== 15) {
      callback();
    } else {
      callback(new Error('15 is invalid'));
    }
  }
  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    return (<form>
      <List
        className="date-picker-list"
        renderFooter={() => getFieldError('dp') && getFieldError('dp').join(',')}
      >
        <InputItem
          placeholder="must be the format of YYYY-MM-DD"
          error={!!getFieldError('idp')}
          {...getFieldProps('idp', {
            initialValue: this.state.idt,
            rules: [
              { validator: this.validateIdp },
            ],
          })}
        >Input date</InputItem>
        <DatePicker
          {...getFieldProps('dp', {
            initialValue: this.state.dpValue,
            rules: [
              { required: true, message: 'Must select a date' },
              { validator: this.validateDatePicker },
            ],
          })}
        >
          <List.Item arrow="horizontal">Date</List.Item>
        </DatePicker>
        <List.Item>
          <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
          <Button size="small" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>Reset</Button>
        </List.Item>
      </List>
    </form>);
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
