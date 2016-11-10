---
order: 0
title: 示例
---


````jsx
import { List, Checkbox } from 'antd-mobile';

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
      <div style={{ padding: 30 }}>
        <div style={{ padding: '30px 0', color: '#888' }}>Checkbox 演示</div>
        <label htmlFor="n1"><Checkbox name="n1" />选项一</label>
        <label htmlFor="n2"><Checkbox name="n2" style={{ marginLeft: 10 }} /> 选项二</label>
      </div>
      <div style={{ padding: 30 }}>
        <div style={{ padding: '30px 0', color: '#888' }}>AgreeItem 演示</div>
        <AgreeItem data-seed="logId">
          已阅读协议<a onClick={(e) => { e.preventDefault(); alert('打开协议'); }}>《协议链接》</a>
        </AgreeItem>
      </div>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
