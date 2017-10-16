import React from 'react';
import classnames from 'classnames';
import BasePropsType from './PropsType';

export interface WingBlankProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'am-wingblank',
    size: 'lg',
  };

  render() {
    const { prefixCls, size, className, children, style } = this.props;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return (
      <div className={wrapCls} style={style}>{children}</div>
    );
  }
}
