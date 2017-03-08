---
order: 1
title:
  zh-CN: 向上弹出效果
  en-US: 'open from bottom to top'
---

Popup 向上弹出效果

````jsx
import { Popup, List, Button, Icon } from 'antd-mobile';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  // Note: the popup content will not scroll.
  wrapProps = {
    // onTouchStart: e => e.preventDefault(),
  };
}

class Test extends React.Component {
  state = {
    sel: '',
  };
  onClick = () => {
    Popup.show(<div>
      <List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          委托买入
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onClose('cancel')}
          >
            <Icon type="cross" />
          </span>
        </div>)}
        className="popup-list"
      >
        {['股票名称', '股票代码', '买入价格', '买入数量', '更多', '更多'].map((i, index) => (
          <List.Item key={index}>{i}</List.Item>
        ))}
      </List>
      <ul style={{ padding: '0.18rem 0.3rem', listStyle: 'none' }}>
        <li>投资说明投资说明...</li>
        <li style={{ marginTop: '0.18rem' }}>
          <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
        </li>
      </ul>
    </div>, { animationType: 'slide-up', wrapProps, maskClosable: false });
  };
  onClose = (sel) => {
    this.setState({ sel });
    Popup.hide();
  };
  render() {
    return (<div style={{ padding: '0.15rem' }}>
      <Button onClick={this.onClick}>显示</Button>
    </div>);
  }
}

ReactDOM.render(<Test />, mountNode);
````
````css
.popup-list .am-list-body {
  height: 4.2rem;
  overflow: auto;
}
````
