import React from 'react';
import classnames from 'classnames';
import { CardBodyProps as BasePropsType } from './PropsType';

export interface CardBodyProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const wrapCls = classnames(`${prefixCls}-body`, className);

    return (
      <div className={wrapCls} {...restProps} />
    );
  }
}
