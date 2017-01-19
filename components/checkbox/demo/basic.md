---
order: 0
title: 示例
---


````__react
import { List, Checkbox, Flex } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const Test = React.createClass({
  onChange(val) {
    console.log(val);
  },
  render() {
    const data = [
      { value: 0, label: '博士' },
      { value: 1, label: '本科' },
      { value: 2, label: '高中' },
    ];
    return (<div>
      <List renderHeader={() => 'CheckboxItem 演示'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          初中<List.Item.Brief>辅助文字内容</List.Item.Brief>
        </CheckboxItem>
      </List>

      <Flex>
        <Flex.Item>
          <AgreeItem data-seed="logId" onChange={(e) => console.log('checkbox', e)}>
            已阅读协议<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《协议链接》</a>
          </AgreeItem>
        </Flex.Item>
      </Flex>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
