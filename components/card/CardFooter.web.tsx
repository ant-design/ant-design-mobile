import React from 'react';
import classNames from 'classnames';

export interface CardFooterProps {
  prefixCls?: string;
  content?: any;
  className?: string;
  extra?: any;
}

export default class CardFooter extends React.Component <CardFooterProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, content, className, extra } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-footer`]: true,
      [className as string]: className,
    });

    return (
      <div className={wrapCls}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        { extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div> }
      </div>
    );
  }
}
