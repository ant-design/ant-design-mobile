import React from 'react';
import classnames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import { CardProps as BasePropsType } from './PropsType';

export interface CardProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

export default class Card extends React.Component<CardProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
    full: false,
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    const { prefixCls, full, className, ...resetProps } = this.props;
    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-full`]: full,
    });

    return (
      <div className={wrapCls} {...resetProps} />
    );
  }
}
