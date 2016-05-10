---
order: 0
title: Dropdown
---


````jsx
import { Dropdown, Button, WingBlank, WhiteSpace, SelectList } from 'antm';

const SelectorDataForDropdown = [
  {
    name: '浙江',
    pinyin: 'zhejiang',
    py: 'zj',
    id: 'zj'
  }, {
    name: '上海(不可选)',
    pinyin: 'shanghai',
    py: 'sh',
    id: 'sh',
    disabled: true
  }, {
    name: '关闭浮层',
    pinyin: 'quxiao',
    py: 'qx',
    id: 'qx'
  }
];

const Test = React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Dropdown.show(<div>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" onClick={() => { this.onClose('opt 1'); }}>创建层叠Dropdown</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" ghost onClick={() => { this.onClose('opt 2'); }}>opt 2</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank>
        <Button onClick={() => { this.onClose('cancel'); }}>取消</Button>
      </WingBlank>
      <WhiteSpace />
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
    const hide = (el) => {
      if (el.id === 'qx') {
        ins.hide();
      }
    };
    ins.show(<SelectList
      value={[SelectorDataForDropdown[0]]}
      data={SelectorDataForDropdown}
      onChange={hide}
    />, { maskClosable: false });
  },
  render() {
    return (<div>
      <WhiteSpace />
      <WingBlank>
        <Button type="primary" onClick={this.onClick}>show Dropdown</Button>
        已选项目：{this.state.sel}
      </WingBlank>
      <WhiteSpace />
    </div>);
  }
});

ReactDOM.render(<Test />, mountNode);
````
