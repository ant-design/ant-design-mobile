import * as React from 'react';
import { PropTypes } from 'react';
import classNames from 'classnames';

export interface ListFooterProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  onClick?: Function;
  children?: any;
}

export default class ListFooter extends React.Component<ListFooterProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-list',
  };

  render() {
    let  { prefixCls, children, className, style, onClick } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className]: className,
    });
    return (
      <div className={wrapCls} style={style} onClick={onClick}>
        {children}
      </div>
    );
  }
}
