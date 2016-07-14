import {PropTypes} from 'react';
import * as React from 'react';
import classNames from 'classnames';

export interface WingBlankProps {
  prefixCls?:string;
  style?: React.CSSProperties;
  mode?:number;
}

export default class WingBlank extends React.Component<WingBlankProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
    mode: PropTypes.oneOf([4, 8, 12, 16, 20, 24, 28, 32]),
  };

  static defaultProps = {
    prefixCls: 'am-wingblank',
    mode: 8,
  };

  render() {
    let {prefixCls, mode, className, children, style } = this.props;
    let wrapCls = classNames({
      [`${prefixCls}`]: true,
      [className]: className
    });
    wrapCls += ` ${prefixCls}-wb${mode}`;

    return (
      <div className={wrapCls} style={style}>
        {children}
      </div>
    );
  }
}
