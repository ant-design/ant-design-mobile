---
order: 0
title: Dropdown 效果
---

Popup Dropdown 效果

````jsx
import { Popup, Button, Menu } from 'antd-mobile';

const SelectorDataForPopup = [
  {
    label: '中餐',
    value: '21',
  }, {
    label: '还没生效',
    value: '22',
    disabled: true,
  }, {
    label: '关闭浮层',
    value: 'qx',
  }, {
    label: '自助餐',
    value: '24',
  }, {
    label: '快餐',
    value: '25',
  }, {
    label: '小吃',
    value: '26',
  },
];

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Popup.show(<div style={{ padding: 8 }}>
      <Button type="primary" onClick={() => { this.onClose('opt 1'); }}>创建层叠Popup</Button>
      <div style={{ height: 8 }} />
      <Button type="ghost" onClick={() => { this.onClose('opt 2'); }}>操作二</Button>
      <div style={{ height: 8 }} />
      <Button onClick={() => { this.onClose('cancel'); }}>取消</Button>
    </div>, { maskClosable: false });
  },
  onClose(sel) {
    if (sel === 'opt 1') {
      this.newInstance();
      return;
    }
    this.setState({ sel });
    Popup.hide();
  },
  newInstance() {
    const ins = Popup.newInstance();
    const hide = (value) => {
      if (value[0] === 'qx') {
        ins.hide();
      }
    };
    ins.show(<Menu
      level={1}
      value={[SelectorDataForPopup[0]]}
      data={SelectorDataForPopup}
      onChange={hide}
    />, { maskClosable: false });
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
