import React, { PropTypes } from 'react';
import RcDrawer from 'rc-drawer';
import splitObject from '../_util/splitObject';
// function noop() {}

export default class Drawer extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    enableDragHandle: PropTypes.bool,
  };
  static defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
  };

  render() {
    let[{ prefixCls, children }, restProps] = splitObject(this.props,
      ['prefixCls', 'children']);

    return (<RcDrawer prefixCls={prefixCls} {...restProps}>
      {children}
    </RcDrawer>);
  }
}
