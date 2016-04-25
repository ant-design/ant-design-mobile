/* eslint no-console:0 */
import React, { PropTypes } from 'react';
import Tooltip from 'rc-tooltip';

export default class FloatMenu extends React.Component {
  static propTypes = {
    placement: PropTypes.string,
    trigger: PropTypes.array,
  }

  static defaultProps = {
    prefixCls: 'am-floatmenu',
    placement: 'bottomRight',
    trigger: ['click'],
  }

  render() {
    let { children, prefixCls, placement, trigger, ...other } = this.props;

    return (<Tooltip
      placement={placement}
      trigger={trigger}
      prefixCls={prefixCls}
      {...other}
    >
      {children}
    </Tooltip>);
  }
}
