/* tslint:disable:no-console */
import React from 'react';
import { View, Text } from 'react-native';
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile';

export default class BasicModalExample extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visible2: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  }

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  }

  onButtonClick = () => {
    Modal.alert(
      '标题',
     ('alert 内容内容'),
      [
        { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
        { text: 'OK', onPress: () => console.log('ok') },
      ],
    );
  }

  onButtonClick2 = () => {
    Modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') },
    ]);
  }

  render() {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') },
    ];
    return (
      <View style={{ paddingTop: 30, marginTop: 64 }}>
        <WingBlank>
          <Button onClick={this.showModal}>显示对话框</Button>
          <WhiteSpace />
          <Button onClick={this.showModal2}>显示全屏对话框</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick}>显示 Modal.alert</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick2}>显示 Modal.opertation</Button>
        </WingBlank>
        <Modal
          transparent={false}
          visible={this.state.visible2}
          animationType="slide-up"
        >
          <View style={{ paddingVertical: 220 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button type="primary" inline onClick={this.onClose2}>close modal</Button>
        </Modal>
        <Modal
          title="测试"
          transparent
          onClose={this.onClose}
          maskClosable
          visible={this.state.visible}
          closable
          footer={footerButtons}
        >
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button type="primary" inline onClick={this.onClose}>close modal</Button>
        </Modal>
      </View>
    );
  }
}
