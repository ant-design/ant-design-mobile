---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
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
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];
    const data2 = [
      { value: 0, label: 'basketball', extra: 'details' },
      { value: 1, label: 'football', extra: 'details' },
    ];

    return (<div>
      <List renderHeader={() => 'RadioItem demo'}>
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

      <List renderHeader={() => 'Disabled'}>
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
      <Flex style={{ padding: '15px' }}>
        <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>Radio demo(dustomized style)</Flex.Item>
        <Flex.Item>
          <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</Radio>
        </Flex.Item>
      </Flex>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
````css
.my-radio .am-radio {
  padding: 2.5px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-right: 5px;
}
````
