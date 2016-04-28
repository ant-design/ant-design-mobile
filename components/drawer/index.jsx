import React, { PropTypes } from 'react';
import RcDrawer from 'rc-drawer';
function noop() {}

export default class Drawer extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    onClick: PropTypes.func,
  }
  static defaultProps = {
    prefixCls: 'am-drawer',
    onClick: noop,
  }

  onClick = () => {
    this.props.onClick(this);
  }

  render() {
    let { children, prefixCls, ...others } = this.props;

    return (<RcDrawer prefixCls={prefixCls} {...others}>
      {children}
    </RcDrawer>);
  }
}
