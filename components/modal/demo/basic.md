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
import { Modal, Button, WhiteSpace, WingBlank } from 'antd-mobile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
    };
  }
  showModal = key => (e) => {
    // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 时所在的位置「重叠」起来，
    // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/确定等按钮遇到同样情况也会如此)
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
      <div>
        <WhiteSpace />
        <WingBlank>
          <Button onClick={this.showModal('modal1')}>Auto Platform</Button>
        </WingBlank>
        <WhiteSpace />
        <Modal
          title="title"
          transparent
          maskClosable={false}
          visible={this.state.modal1}
          onClose={this.onClose('modal1')}
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal1')(); } }]}
        >
          Content...<br />
          Content...<br />
        </Modal>
        <WingBlank>
          <Button onClick={this.showModal('modal2')}> Android UI </Button>
        </WingBlank>
        <WhiteSpace />
        <Modal
          title="Title"
          transparent
          maskClosable={false}
          visible={this.state.modal2}
          onClose={this.onClose('modal2')}
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal2')(); } }]}
          platform="android"
        >
          Content...<br />
          Content...<br />
        </Modal>
        <WingBlank>
          <Button onClick={this.showModal('modal3')}> iOS UI</Button>
        </WingBlank>
        <WhiteSpace />
        <Modal
          title="title"
          transparent
          maskClosable={false}
          visible={this.state.modal3}
          onClose={this.onClose('modal3')}
          footer={[{ text: 'Ok', onPress: () => { console.log('ok'); this.onClose('modal3')(); } }]}
          platform="ios"
        >
          Content...<br />
          Content...<br />
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
