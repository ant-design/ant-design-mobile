---
order: 0
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本对话框。

## en-US

Basic Modal.

````jsx
import { Modal, List, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
    };
  }
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  render() {
    return (
      <WingBlank>
        <Button onClick={this.showModal('modal1')}>basic</Button>
        <WhiteSpace />
        <Modal
          visible={this.state.modal1}
          transparent
          maskClosable={false}
          onClose={this.onClose('modal1')}
          title="Title"
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
        >
          Content...<br />
          Content...<br />
        </Modal>

        <Button onClick={this.showModal('modal2')}>popup</Button>
        <WhiteSpace />
        <Modal
          visible={this.state.modal2}
          popup
          maskClosable={false}
          animationType="slide-up"
        >
          <List renderHeader={() => <div>委托买入</div>} className="popup-list">
            {['股票名称', '股票代码', '买入价格'].map((i, index) => (
              <List.Item key={index}>{i}</List.Item>
            ))}
            <List.Item>
              <Button type="primary" onClick={this.onClose('modal2')}>买入</Button>
            </List.Item>
          </List>
        </Modal>
      </WingBlank>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
````css
.popup-list .am-list-body {
  height: 210px;
  overflow: auto;
}
````
