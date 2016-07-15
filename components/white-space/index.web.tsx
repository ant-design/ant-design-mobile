import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';
import WhiteSpaceProps from './WhiteSpacePropsType';

export default class WhiteSpace extends React.Component<WhiteSpaceProps, any> {
  static defaultProps = {
    prefixCls: 'am-whitespace',
    size: 8,
  };

  render() {
    const { prefixCls, size, className, style, onClick } = this.props;

    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: !!className,
      [`${prefixCls}-ws${size}`]: true,
    });

    return (
      <div className={wrapCls} style={style} onClick={onClick} />
    );
  }
}
