import { PropTypes } from 'react';
import * as React from 'react';
import classNames from 'classnames';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import splitObject from '../_util/splitObject';

export interface CardProps {
  prefixCls?: string;
}

export default class Card extends React.Component <CardProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-card',
  };

  static Header = CardHeader;
  static Body = CardBody;
  static Footer = CardFooter;

  render() {
    let [{prefixCls, children, className}, restProps] = splitObject(
      this.props, ['prefixCls', 'children', 'className']
    );
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className,
    });

    return (
      <div {...restProps} className={wrapCls}>
        {children}
      </div>
    );
  }
}
