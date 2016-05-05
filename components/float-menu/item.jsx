/* eslint no-console:0 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';

export default class Item extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    iconName: PropTypes.string,
    disabled: PropTypes.bool,
  }

  static defaultProps = {
    prefixCls: 'am-floatmenu',
    disabled: false,
  }

  static FloatMenuItem = true;

  render() {
    let { children, className, prefixCls, iconName, disabled, ...other } = this.props;

    const cls = {
      [className]: className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
    };

    return (<div className={classNames(cls)} {...other}>
      {iconName ? <span className={`${prefixCls}-item-icon`}><Icon type={iconName} /></span> : null}
      <span className={`${prefixCls}-item-content`}>{children}</span>
    </div>);
  }
}
