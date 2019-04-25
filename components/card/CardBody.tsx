import classnames from 'classnames';
import * as React from 'react';

export interface CardBodyProps extends React.HTMLProps<HTMLDivElement> {
  prefixCls?: string;
}

export default class CardBody extends React.Component<CardBodyProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, className, ...restProps } = this.props;
    const wrapCls = classnames(`${prefixCls}-body`, className);

    return <div className={wrapCls} {...restProps} />;
  }
}
