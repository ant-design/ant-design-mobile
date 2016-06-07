import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default class Flex extends React.Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    style: PropTypes.object,
    align: PropTypes.oneOf(['top', 'middle', 'bottom']),
  };

  static defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'middle',
  };

  render() {
    let { align, className, children, prefixCls, style } = this.props;

    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-top`]: align === 'top',
      [`${prefixCls}-middle`]: align === 'middle',
      [`${prefixCls}-bottom`]: align === 'bottom',
      [className]: className
    });

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
