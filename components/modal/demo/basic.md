---
order: 0
title: Modal
---

````jsx
import { Modal, Button } from 'antm';

const App = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true
    });
  },
  handleOk() {
    console.log('点击了确定');
    this.setState({
      visible: false
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>显示对话框</Button>
        <Modal title="第一个 Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel}>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
          <p>对话框的内容</p>
        </Modal>
      </div>
    );
  }
});

ReactDOM.render(
  <App />
, mountNode);

````
