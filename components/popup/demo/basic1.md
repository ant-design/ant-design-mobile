---
order: 1
title: 向上弹出效果
---

Popup 向上弹出效果

````jsx
import { Popup, Button } from 'antd-mobile';

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Popup.show(<div style={{ padding: 8 }}>
      <Button type="primary" onClick={() => { this.onClose('opt 1'); }}>操作一</Button>
      <div style={{ height: 8 }} />
      <Button type="ghost" onClick={() => { this.onClose('opt 2'); }}>操作二</Button>
      <div style={{ height: 8 }} />
      <Button onClick={() => { this.onClose('cancel'); }}>取消</Button>
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
