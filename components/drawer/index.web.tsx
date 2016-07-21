import * as React from 'react';
import { PropTypes } from 'react';
import RcDrawer from 'rc-drawer';
import splitObject from '../_util/splitObject';
import tsPropsType from './PropsType';

export default class Drawer extends React.Component<tsPropsType, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    enableDragHandle: PropTypes.bool,
  };
  static defaultProps = {
    prefixCls: 'am-drawer',
    enableDragHandle: false,
  };

  render() {
    let[{ prefixCls, children }, restProps] = splitObject(this.props, ['prefixCls', 'children']);

    return (<RcDrawer prefixCls={prefixCls} {...restProps}>
      {children}
    </RcDrawer>);
  }
}
