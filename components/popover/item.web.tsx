/* eslint no-console:0 */
import React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
import splitObject from '../_util/splitObject';

class Item extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'am-popover',
    disabled: false,
  };

  render() {
    let [{ children, className, prefixCls, icon, disabled, touchFeedback, activeStyle, firstItem }, restProps] =
      splitObject(this.props,
        ['children', 'className', 'prefixCls', 'icon', 'disabled', 'touchFeedback', 'activeStyle', 'firstItem']);

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
      {icon ? <span className={`${prefixCls}-item-icon`}>{icon}</span> : null}
      <span className={`${prefixCls}-item-content`}>{children}</span>
    </div>);
  }
}
export default (Item);
