import classnames from 'classnames';
import * as React from 'react';
import { CardFooterPropsType } from './PropsType';

export interface CardFooterProps extends CardFooterPropsType {
  prefixCls?: string;
  className?: string;
}

export default class CardFooter extends React.Component<CardFooterProps, any> {
  static defaultProps = {
    prefixCls: 'am-card',
  };

  render() {
    const { prefixCls, content, className, extra, ...restProps } = this.props;
    const wrapCls = classnames(`${prefixCls}-footer`, className);

    return (
      <div className={wrapCls} {...restProps}>
        <div className={`${prefixCls}-footer-content`}>{content}</div>
        {extra && <div className={`${prefixCls}-footer-extra`}>{extra}</div>}
      </div>
    );
  }
}
