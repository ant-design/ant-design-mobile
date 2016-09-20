/* eslint no-console:0 */
import React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
export default class Item extends React.Component<any, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    iconName: PropTypes.string,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };

  static PopoverItem = true;

  render() {
    let[{ children, className, prefixCls, iconName, disabled }, restProps] = splitObject(this.props,
      ['children', 'className', 'prefixCls', 'iconName', 'disabled']);

    const cls = {
      [className]: className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
    };

    return (<div className={classNames(cls)} {...restProps}>
      {iconName ? <span className={`${prefixCls}-item-icon`}><Icon type={iconName} /></span> : null}
      <span className={`${prefixCls}-item-content`}>{children}</span>
    </div>);
  }
}
