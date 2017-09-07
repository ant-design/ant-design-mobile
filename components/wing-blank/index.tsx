import React from 'react';
import classnames from 'classnames';
import WingBlankProps from './PropsType';

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg',
  };

  render() {
    const { prefixCls, size, className, children, style } = this.props;
    let wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
