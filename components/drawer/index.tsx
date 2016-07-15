import React, { PropTypes } from 'react';
import { Platform, DrawerLayoutAndroid } from 'react-native';
import RnDrawer from 'react-native-drawer';
import tsPropsType from './PropsType';

export default class Drawer extends React.Component<tsPropsType, any> {
  static propTypes = {
    children: PropTypes.any,
  };
  static defaultProps = {
    position: 'left',
    onOpenChange: () => { },
    drawerWidth: 300,
    drawerBackgroundColor: 'rgb(0,0,0)',
  };

  constructor(props) {
    super(props);
  }

  renderIos() {
    const {
      children, sidebar, open, onOpenChange, position,
      drawerWidth, drawerBackgroundColor
    } = this.props;
    const drawerStyles = {
      drawer: { backgroundColor: drawerBackgroundColor },
      drawerOverlay: { backgroundColor: drawerBackgroundColor },
      main: { backgroundColor: drawerBackgroundColor },
      mainOverlay: { backgroundColor: drawerBackgroundColor },
    };
    return (
      <RnDrawer
        content={sidebar}
        open={open}
        onOpen={() => onOpenChange(true)}
        onClose={() => onOpenChange(false)}
        side={position}
        openDrawerOffset={(viewport) => viewport.width - drawerWidth}
        styles={drawerStyles}
        style={{ position: 'relative' }}
      >
        {children}
      </RnDrawer>
    );
  }
  renderAndroid() {
    const {
      children, sidebar, open, onOpenChange, position,
      drawerWidth, drawerBackgroundColor
    } = this.props;
    let drawerPosition = DrawerLayoutAndroid.positions.Left;
    if (position === 'right') {
      drawerPosition = DrawerLayoutAndroid.positions.right;
    }
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() => sidebar}
        drawerWidth={drawerWidth}
        drawerBackgroundColor={drawerBackgroundColor}
        drawerPosition={drawerPosition}
        onDrawerOpen={() => onOpenChange(true)}
        onDrawerClose={() => onOpenChange(false)}
      >
        {children}
      </DrawerLayoutAndroid>
    );
  }
  render() {
    if (Platform.OS === 'android') {
      return this.renderAndroid();
    }
    return this.renderIos();
  }
}
