---
order: 0
title: 示例
---


````jsx
import { List, Radio, Flex } from 'antd-mobile';

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
        <RadioItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
        </RadioItem>
      </List>
      <Flex style={{ padding: '0.3rem' }}>
        <Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>Radio 演示</Flex.Item>
        <Flex.Item>
          <Radio className="my-radio">选项一</Radio>
          <Radio className="my-radio" style={{ marginLeft: '0.1rem' }}>选项二</Radio>
        </Flex.Item>
      </Flex>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
````css
.my-radio .am-radio {
  padding: 0.05rem;
  border: 1px solid #ccc;
  border-radius: 0.15rem;
  margin-right: 0.1rem;
}
````
