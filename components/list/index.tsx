/* tslint:disable:jsx-no-multiline-js */
import React from 'react';
import Item from './ListItem';
import classnames from 'classnames';
import { ListProps as BasePropsType } from './PropsType';

export interface ListProps extends BasePropsType {
  prefixCls?: string;
  className?: string;
  role?: string;
}

export default class List extends React.Component<ListProps, any> {
  static Item = Item;

  static defaultProps: Partial<ListProps> = {
    prefixCls: 'am-list',
  };

  render() {
    let { prefixCls, children, className, style, renderHeader, renderFooter, ...restProps } = this.props;
    const wrapCls = classnames(prefixCls, className);

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {renderHeader ? (<div className={`${prefixCls}-header`}>
          {typeof renderHeader === 'function' ? renderHeader() : renderHeader}
        </div>) : null}
        {children ? (<div className={`${prefixCls}-body`}>{children}</div>) : null}
        {renderFooter ? (<div className={`${prefixCls}-footer`}>
          {typeof renderFooter === 'function' ? renderFooter() : renderFooter}
        </div>) : null}
      </div>
    );
  }
}
