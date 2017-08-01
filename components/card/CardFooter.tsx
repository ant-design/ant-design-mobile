import React from 'react';
import classNames from 'classnames';
import { CardFooterProps } from './PropsType';

export default class CardFooter extends React.Component <CardFooterProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, content, className, extra, ...restProps } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className as string]: className,
    });

    return (
      <div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
      </div>
    );
  }
}
