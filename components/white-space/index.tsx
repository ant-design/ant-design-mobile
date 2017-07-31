import React from 'react';
import classNames from 'classnames';
import WhiteSpaceProps from './PropsType';

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md',
  };

  render() {
    const { prefixCls, size, className, style, onClick } = this.props;

    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: true,
      [className as string]: !!className,
    });

    return (
      <div className={wrapCls} style={style} onClick={onClick} />
    );
  }
}
