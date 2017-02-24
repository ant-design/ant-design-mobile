---
order: 0
title: 示例
---


````jsx
import { List, Radio, Flex, WhiteSpace } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

class Test extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  onChange2 = (value) => {
    console.log('checkbox');
    this.setState({
      value2: value,
    });
  };
  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
    ];
    const data2 = [
      { value: 0, label: '篮球', extra: '辅助文字内容' },
      { value: 1, label: '足球', extra: '辅助文字内容' },
    ];

    return (<div>
      <List renderHeader={() => 'RadioItem 演示'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
      <WhiteSpace size="lg" />
      <List>
        {data2.map(i => (
          <RadioItem key={i.value} checked={value2 === i.value} onChange={() => this.onChange2(i.value)}>
            {i.label}<List.Item.Brief>{i.extra}</List.Item.Brief>
          </RadioItem>
        ))}
      </List>

      <List renderHeader={() => '禁用状态'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value3 === i.value} onChange={() => this.onChange3(i.value)} disabled>
            {i.label}
          </RadioItem>
        ))}
      </List>
      <WhiteSpace size="lg" />
      <List>
        {data2.map(i => (
          <RadioItem key={i.value} checked={value4 === i.value} onChange={() => this.onChange4(i.value)} disabled>
            {i.label}<List.Item.Brief>{i.extra}</List.Item.Brief>
          </RadioItem>
        ))}
      </List>
      <Flex style={{ padding: '0.3rem' }}>
        <Flex.Item style={{ padding: '0.3rem 0', color: '#888', flex: 'none' }}>Radio 演示 (自定义样式)</Flex.Item>
        <Flex.Item>
          <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>同意协议</Radio>
        </Flex.Item>
      </Flex>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
````css
.my-radio .am-radio {
  padding: 0.05rem;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 0.1rem;
}
````
