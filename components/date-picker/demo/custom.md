---
order: 1
title:
  zh-CN: 日期选择组件，支持开始结束的范围选择
  en-US: 'datepicker support start to end'
---

````jsx
import { DatePicker, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import moment from 'moment';
import 'moment/locale/zh-cn';

const zhNow = moment().locale('zh-cn').utcOffset(8);
const maxDate = moment('2019-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2014-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);

class Test extends React.Component {
  state = {
    date: zhNow,
    dpArrValues: null,
    visible: false,
  }
  onChange = (dpArrValues) => {
    console.log('onChange', dpArrValues);
    this.setState({
      dpArrValues,
    });
  }
  render() {
    return (<div>
      <List
        className="date-picker-list"
        style={{ backgroundColor: 'white' }}
      >
        <DatePicker
          type="multi"
          mode="date"
          split="至"
          title="组合DatePicker"
          extra="开始日期至结束日期"
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          minStartDate={minDate}
          maxStartDate={maxDate}
          minEndDate={minDate}
          maxEndDate={maxDate}
          value={this.state.dpArrValues}
          onChange={this.onChange}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk123', v)}
        >
          <List.Item arrow="horizontal">range(CST)</List.Item>
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