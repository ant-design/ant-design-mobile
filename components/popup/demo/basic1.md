---
order: 1
title: ActionSheet 效果
---

Popup ActionSheet 效果

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
    return (<div style={{ padding: 8 }}>
      <Button type="primary" onClick={this.onClick}>显示</Button>
      已选项目：{this.state.sel}
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
