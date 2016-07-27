---
order: 0
title: 基本
---

基本使用方式, 弹出一个浮层

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <WhiteSpace size={20} />
        <WingBlank>
          <Button type="primary" onClick={this.showModal}>
            显示对话框
          </Button>
          <Modal animated transparent={false} visible={this.state.visible} >
            <div style={{ height: '50%', paddingTop: 200 }}>
              这是内容...<br />
              这是内容...<br />
            </div>
            <Button type="primary" inline onClick={this.onClose}>close modal</Button>
          </Modal>
        </WingBlank>
        <WhiteSpace size={20} />
      </div>
    );
  },
});

ReactDOM.render(
  <App />
, mountNode);

````
