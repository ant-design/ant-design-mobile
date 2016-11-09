import React from 'react';
import classNames from 'classnames';
import { FlexItemProps } from './PropsType';

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
