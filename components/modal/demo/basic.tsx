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
  };

  showModal2 = () => {
    this.setState({
      visible2: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  };

  render() {
    return (
      <View style={{ paddingTop: 30, marginTop: 64 }}>
        <WingBlank>
          <Button onClick={this.showModal}>显示对话框</Button>
          <WhiteSpace />
          <Button onClick={this.showModal2}>显示全屏对话框</Button>
          <WhiteSpace />
        </WingBlank>
        <Modal
          transparent={false}
          onClose={this.onClose}
          visible={this.state.visible2}
          style={{flex: 1}}
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
          footer={[
            { text: 'Cancel', onPress: () => console.log('cancel') },
            { text: 'Ok', onPress: () => console.log('ok') },
          ]}
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
