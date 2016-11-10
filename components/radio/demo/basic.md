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
    return (<div>
      <List renderHeader={() => 'RadioItem 演示'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
        <RadioItem key="disabled" disabled data-seed="logId">初中</RadioItem>
      </List>
      <div style={{ padding: 30 }}>
        <div style={{ padding: '30px 0', color: '#888' }}>Radio 演示</div>
        <label htmlFor="n1"><Radio name="n1" style={{ padding: 5, border: '1px solid #ccc', borderRadius: 15 }} /> 选项一</label>
        <label htmlFor="n2"><Radio name="n2" style={{ padding: 5, border: '1px solid #ccc', borderRadius: 15, marginLeft: 10 }} /> 选项二</label>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
