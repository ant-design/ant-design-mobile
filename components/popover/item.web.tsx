/* eslint no-console:0 */
import React from 'react';
import classNames from 'classnames';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
import touchableFeedback from '../_util/touchableFeedback';

class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };

  render() {
    let [{ children, className, prefixCls, iconName, disabled, touchFeedback, firstItem }, restProps] =
      splitObject(this.props,
      ['children', 'className', 'prefixCls', 'iconName', 'disabled', 'touchFeedback', 'firstItem']);

    const cls = {
      [className as string]: !!className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-active`]: touchFeedback,
      [`${prefixCls}-item-fix-active-arrow`]: firstItem && touchFeedback,
    };

    return (<div className={classNames(cls)} {...restProps}>
      {iconName ? <span className={`${prefixCls}-item-icon`}><Icon type={iconName} /></span> : null}
      <span className={`${prefixCls}-item-content`}>{children}</span>
    </div>);
  }
}
export default touchableFeedback(Item, 'PopoverItem');
