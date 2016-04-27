/* eslint no-console:0 */
import React, { PropTypes } from 'react';
import Dialog from 'rc-dialog';

export default class Dropdown extends React.Component {
  static propTypes = {
    transitionName: PropTypes.string,
    maskTransitionName: PropTypes.string,
  }

  static defaultProps = {
    prefixCls: 'am-dropdown',
  }

  render() {
    let { children, prefixCls, transitionName, maskTransitionName, ...other } = this.props;

    transitionName = transitionName || `${prefixCls}-slide-fade`;
    maskTransitionName = maskTransitionName || `${prefixCls}-fade`;

    return (<Dialog
      {...other}
      prefixCls={prefixCls}
      transitionName={transitionName}
      maskTransitionName={maskTransitionName}
    >{children}</Dialog>);
  }
}
