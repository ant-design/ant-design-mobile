import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Header from './CardHeader';
import Body from './CardBody';
import Footer from './CardFooter';
import splitObject from '../_util/splitObject';

interface CardProps {
  prefixCls?:string;
}

class Card extends React.Component <CardProps, any> {
  static propTypes = {
    prefixCls: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    let [{prefixCls, children, className}, restProps] = splitObject(
      this.props, ['prefixCls', 'children', 'className']
    );
    const wrapCls = classNames({
      [prefixCls]: true,
      [className]: className
    });

    return (
      <div {...restProps} className={wrapCls}>
        {children}
      </div>
    );
  }
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
