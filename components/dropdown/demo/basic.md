---
order: 0
title: Dropdown
---


````jsx
// 此处用作demo展示，不要用在生产环境
this.customNavFlag = true;

import { Dropdown, Button, Menu } from 'antd-mobile';

const SelectorDataForDropdown = [
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
  }, {
    label: '面包甜点',
    value: '27',
  }, {
    label: '生鲜水果',
    value: '28',
  }, {
    label: '面食',
    value: '29',
  }, {
    label: '休闲食品',
    value: '210',
  }, {
    label: '日韩料理',
    value: '211',
  }, {
    label: '咖啡',
    value: '212',
  }, {
    label: '粤菜',
    value: '213',
  },
];

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Dropdown.show(<div style={{ padding: 8 }}>
      <Button type="primary" onClick={() => { this.onClose('opt 1'); }}>创建层叠Dropdown</Button>
      <div style={{ height: 8 }} />
      <Button type="primary" ghost onClick={() => { this.onClose('opt 2'); }}>opt 2</Button>
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
    Dropdown.hide();
  },
  newInstance() {
    const ins = Dropdown.newInstance();
    const hide = (value) => {
      if (value[0] === 'qx') {
        ins.hide();
      }
    };
    ins.show(<Menu
      level={1}
      value={[SelectorDataForDropdown[0]]}
      data={SelectorDataForDropdown}
      onChange={hide}
    />, { maskClosable: false });
  },
  render() {
    return (<div style={{ padding: 8 }}>
      <Button type="primary" onClick={this.onClick}>show Dropdown</Button>
      已选项目：{this.state.sel}
    </div>);
  },
});

ReactDOM.render(<Test />, mountNode);
````
