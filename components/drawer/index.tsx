import RmcDrawer from 'rmc-drawer';
import * as React from 'react';
import { DrawerWebProps } from './PropsType';

export default class Drawer extends React.Component<DrawerWebProps, any> {
  static defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
  };
  render() {
    return <RmcDrawer {...this.props} />;
  }
}
