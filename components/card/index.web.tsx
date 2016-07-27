import * as React from 'react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export interface CardProps {
  prefixCls?: string;
  className?: string;
}

export default class Card extends React.Component <CardProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { prefixCls, children, className } = this.props;
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div className={wrapCls}>
        {children}
      </div>
    );
  }
}
