import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Drawer, List, Button, WhiteSpace } from 'antd-mobile';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flex: 1,
  },
});

export default class DrawerExample extends React.Component<any, any> {
  static drawer: any;
  drawer: any;
  onOpenChange = (isOpen) => {
    /* tslint:disable: no-console */
    console.log('是否打开了 Drawer', (isOpen).toString());
    Actions.refresh({ key: this.props.navigationState.key, open: isOpen });
  }
  render() {
    const sidebar = (<ScrollView style={[styles.container, { backgroundColor: '#fff' }]}>
      <List>

          {Array.apply(null, Array(20)).map(function (_, i) {return i;}).map((_i, index) => {
            if (index === 0) {
              return (<List.Item key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                multipleLine
              >
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <Text>分类 - {index}</Text>
                  <Button type="primary" size="small" onClick={() => this.drawer.drawer.closeDrawer()}>
                    关闭 drawer
                  </Button>
                </View>
              </List.Item>);
            }
            return (<List.Item key={index}
              thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
            ><Text>分类 - {index}</Text></List.Item>);
          })}

      </List>
    </ScrollView>);

    const drawerProps = {
      position: 'left',
      onOpenChange: this.onOpenChange,
    };

    return (
      <Drawer sidebar={sidebar} {...drawerProps} ref={d => {
        this.drawer = d;
        DrawerExample.drawer = d;
      } }>
        <DefaultRenderer
          navigationState={this.props.navigationState.children[0]}
          onNavigate={this.props.onNavigate} />
      </Drawer>
    );
  }
}

export class DrawerMain extends React.Component<any, any> {
  drawer: any;
  componentDidMount() {
    setTimeout(() => {
      this.drawer = this.props.drawerComponent.drawer.drawer;
    }, 20);
  }
  render() {
    return (
      <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
        <Button onClick={() => this.drawer && this.drawer.openDrawer() }>打开 drawer</Button>
        <WhiteSpace />
        <Button onClick={() => Actions.pop()}>返回 demo list</Button>
      </View>
    );
  }
};
