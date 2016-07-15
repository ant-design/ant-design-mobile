import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Drawer, List, Button } from 'antm';

export default class DrawerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'left',
    };
  }
  onOpenChange = (isOpen) => {
    Alert.alert('是否打开了 Drawer', (isOpen).toString());
  }
  render() {
    const sidebar = (<View style={{ height: 300, backgroundColor: 'blue' }}><List>
      <List.Body>
        <List.Item>仅可进行收款、退款及查账操作</List.Item>
        <List.Item>仅可进行收款、退款及查账操作</List.Item>
        <List.Item>仅可进行收款、退款及查账操作</List.Item>
        <Button inline onPress={() => this.setState({ open: false })}>关闭 drawer</Button>
      </List.Body>
    </List></View>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (
      <Drawer sidebar={sidebar} {...drawerProps}>
        <View style={{ margin: 10, height: 300, backgroundColor: 'transparent' }}>
          <Button type="primary" inline onPress={() => this.setState({ open: true })}>打开 drawer</Button>
          <Text style={{ color: 'red' }}>主内容</Text>
        </View>
      </Drawer>
    );
  }
}

export const title = 'Drawer';
export const description = 'Drawer example';
