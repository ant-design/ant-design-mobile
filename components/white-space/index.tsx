import React from 'react';
import classnames from 'classnames';
import WhiteSpaceProps from './PropsType';

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md',
  };

  render() {
    const { prefixCls, size, className, style, onClick } = this.props;

    let wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return (
      <div className={wrapCls} style={style} onClick={onClick} />
    );
  }
}
