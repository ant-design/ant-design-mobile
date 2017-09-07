import React from 'react';
import classnames from 'classnames';
import { FlexItemProps } from './PropsType';

export default class FlexItem extends React.Component<FlexItemProps, any> {
  static defaultProps = {
    prefixCls: 'am-flexbox',
  };
  render() {
    let{ children, className, prefixCls, style, ...restProps } = this.props;
    const wrapCls = classnames(`${prefixCls}-item`, className);
    return (
      <div className={wrapCls} style={style} {...restProps}>{children}</div>
    );
  }
}
