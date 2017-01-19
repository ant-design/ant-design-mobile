import React from 'react';
import classNames from 'classnames';

export interface CardBodyProps {
  prefixCls?: string;
  children?: any;
  className?: string;
  style?: {};
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const wrapCls = classNames({
      [`${prefixCls}-body`]: true,
      [className as string]: className,
    });

    return (
      <div className={wrapCls} {...restProps} />
    );
  }
}
