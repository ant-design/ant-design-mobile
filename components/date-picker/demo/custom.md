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

class Test extends React.Component {
  state = {
    date: zhNow,
    dpArrValues1: null,
    dpArrValues2: null,
    dpArrValues3: null,
    dpArrValues4: null,
    dpArrValues5: null,
    visible: false,
  }
  onChange1 = (dpArrValues1) => {
    this.setState({
      dpArrValues1,
    });
  }
  onChange2 = (dpArrValues2) => {
    this.setState({
      dpArrValues2,
    });
  }
  onChange3 = (dpArrValues3) => {
    this.setState({
      dpArrValues3,
    });
  }
  onChange4 = (dpArrValues4) => {
    this.setState({
      dpArrValues4,
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
          defaultDate={[moment('2017-01-01'), moment('2017-01-07')]}
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          value={this.state.dpArrValues1}
          onChange={this.onChange1}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk1', v)}
        >
          <List.Item arrow="horizontal">默认时间</List.Item>
        </DatePicker>
        <DatePicker
          type="multi"
          mode="date"
          split="到"
          title="组合DatePicker"
          extra="开始日期至结束日期"
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          minStartDate={moment('2017-01-01')}
          maxStartDate={moment('2017-03-01')}
          value={this.state.dpArrValues2}
          onChange={this.onChange2}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk1', v)}
        >
          <List.Item arrow="horizontal">限制开始时间</List.Item>
        </DatePicker>
        <DatePicker
          type="multi"
          mode="date"
          split="至"
          title="组合DatePicker"
          extra="开始日期至结束日期"
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          minEndDate={moment('2017-01-01')}
          maxEndDate={moment('2017-03-01')}
          value={this.state.dpArrValues3}
          onChange={this.onChange3}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk1', v)}
        >
          <List.Item arrow="horizontal">限制结束时间</List.Item>
        </DatePicker>
        <DatePicker
          type="multi"
          mode="date"
          split="至"
          title="组合DatePicker"
          extra="开始日期至结束日期"
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          minStartDate={moment('2017-01-01')}
          maxStartDate={moment('2017-03-01')}
          minEndDate={moment('2017-01-01')}
          maxEndDate={moment('2017-03-01')}
          value={this.state.dpArrValues4}
          onChange={this.onChange4}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk1', v)}
        >
          <List.Item arrow="horizontal">限制时间</List.Item>
        </DatePicker>
        <DatePicker
          type="multi"
          mode="date"
          split="至"
          title="组合DatePicker"
          extra="开始日期至结束日期"
          defaultDate={[moment('2017-01-02'), moment('2017-02-20')]}
          startLabelText={<em>定制开始时间文案</em>}
          endLabelText="定制结束时间文案"
          minStartDate={moment('2017-01-01')}
          maxStartDate={moment('2017-03-01')}
          minEndDate={moment('2017-01-01')}
          maxEndDate={moment('2017-03-01')}
          value={this.state.dpArrValues5}
          onChange={this.onChange5}
          format={v => v.format('YYYY-MM-DD')}
          onOk={v => console.log('onOk1', v)}
        >
          <List.Item arrow="horizontal">全量配置</List.Item>
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