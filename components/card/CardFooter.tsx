import React from 'react';
import classnames from 'classnames';
import { CardFooterProps as BasePropsType } from './PropsType';

export interface CardFooterProps extends BasePropsType {
  prefixCls?: string;
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
