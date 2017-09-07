import React from 'react';
import classnames from 'classnames';
import { CardBodyProps } from './PropsType';

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
