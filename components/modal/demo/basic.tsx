import * as React from 'react';
import { View, Text } from 'react-native';
import { Modal, Button } from 'antd-mobile';

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  onClose = () => {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <View style={{ paddingTop: 30, marginTop: 64 }}>
        <Button type="primary" size="small" inline onPress={this.showModal}>
          显示对话框
        </Button>
        {/*<Modal animated transparent={false} visible={this.state.visible} >
          <View style={{ paddingVertical: 220 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button type="primary" inline onPress={this.onClose}>close modal</Button>
        </Modal>
        */}
        <Modal title="测试" animated transparent visible={this.state.visible} maskClosable closable>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
            <Text style={{ textAlign: 'center' }}>这是内容...</Text>
          </View>
          <Button type="primary" inline onPress={this.onClose}>close modal</Button>
        </Modal>
      </View>
    );
  }
}
