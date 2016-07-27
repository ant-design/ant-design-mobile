import * as React from 'react';
import classNames from 'classnames';

export interface ListHeaderProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  onClick?: Function;
  children?: any;
}

export default class ListHeader extends React.Component<ListHeaderProps, any> {
  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let {prefixCls, children, className, style, onClick } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-header`]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls} style={style} onClick={onClick}>
        {children}
      </div>
    );
  }
}
