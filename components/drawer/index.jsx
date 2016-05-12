import React, { PropTypes } from 'react';
import RcDrawer from 'rc-drawer';
// function noop() {}

export default class Drawer extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    enableDragHandle: PropTypes.bool,
  }
  static defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
  }

  render() {
    let { children, prefixCls, ...others } = this.props;

    return (<RcDrawer prefixCls={prefixCls} {...others}>
      {children}
    </RcDrawer>);
  }
}
