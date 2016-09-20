---
order: 0
title: 向下弹出效果
---

Popup 向下弹出效果

````jsx
import { Popup, List, Button, Menu } from 'antd-mobile';

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
    Popup.show(
      <List
        renderHeader={() => '账户总览 (已绑定3个）'}
      >
        <List.Body>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            onClick={() => { this.onClose('cancel'); }}
          >东吴证券 (5728）</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            onClick={() => { this.onClose('cancel'); }}
          >东吴证券 (5728）</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
            arrow="horizontal"
            onClick={() => { this.onClose('opt 1'); }}
          >更多</List.Item>
        </List.Body>
      </List>
    );
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
    return (<div style={{ padding: '15px' }}>
      <Button type="ghost" onClick={this.onClick}>显示</Button>
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
