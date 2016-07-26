import * as React from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class TimelineItem extends React.Component {
  static defaultProps = {
    prefixCls: 'am-timeline',
    color: 'blue',
    last: false,
    pending: false,
  };

  render() {
    let [{prefixCls, color, last, children, pending, className}, restProps] = splitObject(this.props,
      ['prefixCls', 'color', 'last', 'children', 'pending', 'className']);
    const itemClassName = classNames({
      [`${prefixCls}-item`]: true,
      [`${prefixCls}-item-last`]: last,
      [`${prefixCls}-item-pending`]: pending,
      [className]: className,
    });
    return (
      <li {...restProps} className={itemClassName}>
        <div className={`${prefixCls}-item-tail`}/>
        <div className={`${prefixCls}-item-head ${prefixCls}-item-head-${color}`}/>
        <div className={`${prefixCls}-item-content`}>{children}</div>
      </li>
    );
  }
}
