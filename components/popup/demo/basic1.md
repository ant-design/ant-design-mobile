---
order: 1
title: 向上弹出效果
---

Popup 向上弹出效果

````jsx
import { Popup, List, Button } from 'antd-mobile';

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Popup.show(<div>
      <List title="委托买入">
        <List.Body>
          <List.Item>股票名称</List.Item>
          <List.Item>股票代码</List.Item>
          <List.Item>买入价格</List.Item>
          <List.Item>买入数量</List.Item>
        </List.Body>
      </List>
      <ul style={{ padding: 10 }}>
        <li>投资说明投资说明...</li>
        <li>交易金额以实际成交为准</li>
      </ul>
      <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
    </div>, { maskClosable: false, animationType: 'slide-up' });
  },
  onClose(sel) {
    this.setState({ sel });
    Popup.hide();
  },
  render() {
    return (<div style={{ padding: '15px' }}>
      <Button type="ghost" onClick={this.onClick}>显示</Button>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
