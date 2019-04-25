import classnames from 'classnames';
import * as React from 'react';
import { WhiteSpacePropsType } from './PropsType';

export interface WhiteSpaceProps extends WhiteSpacePropsType {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'am-whitespace',
    size: 'md',
  };

  render() {
    const { prefixCls, size, className, style, onClick } = this.props;
    const wrapCls = classnames(prefixCls, `${prefixCls}-${size}`, className);

    return <div className={wrapCls} style={style} onClick={onClick} />;
  }
}
