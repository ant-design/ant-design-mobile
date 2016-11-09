---
order: 0
title: 示例
---


````jsx
import { List, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

const Test = React.createClass({
  getInitialState() {
    return {
      value: 1,
    };
  },
  onChange(value) {
    this.setState({
      value,
    });
  },
  render() {
    const { value } = this.state;
    const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];
    return (
      <List renderHeader={() => '请选择学历'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
        <RadioItem key="disable" disabled data-seed="logId">初中</RadioItem>
      </List>
    );
  },
});

ReactDOM.render(<Test />, mountNode);
````
