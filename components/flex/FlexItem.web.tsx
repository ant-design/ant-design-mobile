import React from 'react';
import classNames from 'classnames';

export interface FlexItemProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  onClick?: (_e: any) => void;
  children?: any;
}

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-flexbox',
  };
  render() {
    let{ children, className, prefixCls, style, onClick } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-item`]: true,
      [className as string]: className,
    });
    return (
      <div className={wrapCls} style={style} onClick={onClick}>{children}</div>
    );
  }
}
