import React from 'react';
import classNames from 'classnames';
import { CardBodyProps } from './PropsType';

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
