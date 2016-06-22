import React, { PropTypes } from 'react';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
export default class ListHeader extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let [{prefixCls, children, className}, restProps] = splitObject(this.props,
      ['prefixCls', 'children', 'className']);
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>{children}</div>
    );
  }
}
