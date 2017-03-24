import React from 'react';
import { Platform } from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import tsPropsType from './PropsType';

export default class Drawer extends React.Component<tsPropsType, any> {
  static defaultProps = {
    position: 'left',
    drawerWidth: 300,
  };
  drawer: any;
  render() {
    let { children, sidebar, onOpenChange = (_x: boolean) => { }, position, ...restProps } = this.props;
    if (Platform.OS === 'android') {
      position = DrawerLayout.positions.Left;
      if (position === 'right') {
        position = DrawerLayout.positions.Right;
      }
    }
    return (
      <DrawerLayout
        ref={drawer => this.drawer = drawer}
        renderNavigationView={() => sidebar}
        drawerPosition={position}
        onDrawerOpen={() => onOpenChange(true)}
        onDrawerClose={() => onOpenChange(false)}
        {...restProps}
      >
        {children}
      </DrawerLayout>
    );
  }
}
