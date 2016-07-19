import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Drawer, List, Button } from 'antm';
import { Actions, DefaultRenderer } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
});

export default class DrawerExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      position: 'left',
    };
  }
  onOpenChange = (isOpen) => {
    console.log('是否打开了 Drawer', (isOpen).toString());
  }
  render() {
    const sidebar = (<View style={[styles.container, { backgroundColor: '#fff' }]}>
      <List>
        <List.Body>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <List.Item>仅可进行收款、退款及查账操作</List.Item>
          <Button inline onPress={() => this.drawer.drawer.closeDrawer()}>关闭 drawer</Button>
        </List.Body>
      </List>
    </View>);

    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };

    const children = (
      <View style={{ height: Dimensions.get("window").height }}>
        <Button type="primary" inline onPress={() => this.drawer.drawer.openDrawer() }>打开 drawer</Button>
        <Text style={{ color: 'red' }}>主内容</Text>
      </View>
    );
    return (
      <Drawer sidebar={sidebar} {...drawerProps} ref={(drawer) => { return this.drawer = drawer } }>
        <DefaultRenderer
          navigationState={this.props.navigationState.children[0]}
          onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

export const DrawerMain = (props, context) => {
  const drawer = context.drawer;
  console.log(drawer, context, 'xdfsfsd');
  return (
    <View style={{ height: Dimensions.get("window").height }}>
      <Button type="primary" inline onPress={() => drawer.openDrawer() }>打开 drawer</Button>
      <Text style={{ color: 'red' }}>主内容</Text>
    </View>
  );
};

export const title = 'Drawer';
export const description = 'Drawer example';
