import React from 'react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export interface CardProps {
  prefixCls?: string;
  className?: string;
  full?: boolean;
}

export default class Card extends React.Component <CardProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
    full: false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { prefixCls, full, children, className } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [`${prefixCls}-full`]: full,
      [className]: className,
    });

    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
}
