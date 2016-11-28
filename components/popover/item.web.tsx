/* eslint no-console:0 */
import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import Icon from '../icon';
import splitObject from '../_util/splitObject';
import touchableFeedback from '../_util/touchableFeedback';

class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };

  render() {
    let [{ children, className, prefixCls, iconName, disabled, touchFeedback, activeStyle, firstItem }, restProps] =
      splitObject(this.props,
        ['children', 'className', 'prefixCls', 'iconName', 'disabled', 'touchFeedback', 'activeStyle', 'firstItem']);

    let style = assign({}, this.props.style);
    if (touchFeedback) {
      style = assign(style, activeStyle);
    }

    const cls = {
      [className as string]: !!className,
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-disabled`]: disabled,
      [`${prefixCls}-item-active`]: touchFeedback,
      [`${prefixCls}-item-fix-active-arrow`]: firstItem && touchFeedback,
    };

    return (<div className={classNames(cls)} {...restProps} style={style}>
      {iconName ? <span className={`${prefixCls}-item-icon`}><Icon type={iconName} /></span> : null}
      <span className={`${prefixCls}-item-content`}>{children}</span>
    </div>);
  }
}
export default touchableFeedback(Item, {
  myName: 'PopoverItem',
});
