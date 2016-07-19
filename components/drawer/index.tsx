import React, { PropTypes } from 'react';
import DrawerLayout from 'react-native-drawer-layout';
import tsPropsType from './PropsType';
import splitObject from '../_util/splitObject';

export default class Drawer extends React.Component<tsPropsType, any> {
  static propTypes = {
    children: PropTypes.any,
  };
  static defaultProps = {
    position: 'left',
    onOpenChange: () => { },
    drawerWidth: 300,
    // drawerBackgroundColor: 'rgba(0,0,0,0.3)',
  };
  render() {
    let [{
      children, sidebar, open, onOpenChange, position,
      drawerWidth, drawerBackgroundColor, drawerPosition
    }, restProps] = splitObject(
      this.props,
      ['children', 'sidebar', 'open', 'onOpenChange', 'position',
        'drawerWidth', 'drawerBackgroundColor', 'drawerPosition']
    );
    return (
      <DrawerLayout
        ref={drawer => this.drawer = drawer}
        renderNavigationView={() => sidebar}
        drawerWidth={drawerWidth}
        drawerBackgroundColor={drawerBackgroundColor}
        drawerPosition={drawerPosition}
        onDrawerOpen={() => onOpenChange(true)}
        onDrawerClose={() => onOpenChange(false) }
        {...restProps}
      >
        {children}
      </DrawerLayout>
    );
  }
}
