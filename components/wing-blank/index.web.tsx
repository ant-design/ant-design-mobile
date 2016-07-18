import * as React from 'react';
import classNames from 'classnames';

export interface WingBlankProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  size?: number;
  className?: string;
}

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'am-wingblank',
    size: 8,
  };

  render() {
    let { prefixCls, size, className, children, style } = this.props;
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: !!className,
      [`${prefixCls}-wb${size}`]: true,
    });

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
