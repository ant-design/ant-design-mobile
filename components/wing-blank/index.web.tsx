import * as React from 'react';
import classNames from 'classnames';
import WingBlankProps from './WingBlankPropsType';

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static defaultProps = {
    prefixCls: 'am-wingblank',
    size: 8,
  };

  render() {
    const { prefixCls, size, className, children, style } = this.props;
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
