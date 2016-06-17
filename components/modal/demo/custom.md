---
order: 1
title: 可关闭
---

可关闭的浮层

````jsx
import { Modal, Button, WhiteSpace, WingBlank } from 'antm';

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
        <WhiteSpace mode={20} />
        <WingBlank>
          <Button type="primary" size="small" inline onClick={this.showModal}>
            可关闭对话框
          </Button>
          <Modal animated={false} transparent closable onClose={this.onClose} visible={this.state.visible} >
            这是内容...<br />
            这是内容...<br />
          </Modal>
        </WingBlank>
        <WhiteSpace mode={20} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />
, mountNode);

````
