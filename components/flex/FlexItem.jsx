import React, { PropTypes } from 'react';
import classNames from 'classnames';
function noop() {}

export default class FlexItem extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    prefixCls: 'am-flexbox',
    onClick: noop,
  };
  render() {
    const { children, className, prefixCls, onClick } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className]: className
    });
    return (
      <div className={wrapCls} onClick={onClick}>{children}</div>
    );
  }
}
