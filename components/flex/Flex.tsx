import classnames from 'classnames';
import * as React from 'react';
import { FlexPropsType as BasePropsType } from './PropsType';

export interface FlexProps extends BasePropsType {
  alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  prefixCls?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
}

export default class Flex extends React.Component<FlexProps, any> {
  static Item: any;

  static defaultProps = {
    prefixCls: 'am-flexbox',
    align: 'center',
  };

  render() {
    const {
      direction,
      wrap,
      justify,
      align,
      alignContent,
      className,
      children,
      prefixCls,
      style,
      ...restProps
    } = this.props;

    const wrapCls = classnames(prefixCls, className, {
      [`${prefixCls}-dir-row`]: direction === 'row',
      [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
      [`${prefixCls}-dir-column`]: direction === 'column',
      [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

      [`${prefixCls}-nowrap`]: wrap === 'nowrap',
      [`${prefixCls}-wrap`]: wrap === 'wrap',
      [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

      [`${prefixCls}-justify-start`]: justify === 'start',
      [`${prefixCls}-justify-end`]: justify === 'end',
      [`${prefixCls}-justify-center`]: justify === 'center',
      [`${prefixCls}-justify-between`]: justify === 'between',
      [`${prefixCls}-justify-around`]: justify === 'around',

      [`${prefixCls}-align-start`]: align === 'start',
      [`${prefixCls}-align-center`]: align === 'center',
      [`${prefixCls}-align-end`]: align === 'end',
      [`${prefixCls}-align-baseline`]: align === 'baseline',
      [`${prefixCls}-align-stretch`]: align === 'stretch',

      [`${prefixCls}-align-content-start`]: alignContent === 'start',
      [`${prefixCls}-align-content-end`]: alignContent === 'end',
      [`${prefixCls}-align-content-center`]: alignContent === 'center',
      [`${prefixCls}-align-content-between`]: alignContent === 'between',
      [`${prefixCls}-align-content-around`]: alignContent === 'around',
      [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch',
    });

    return (
      <div className={wrapCls} style={style} {...restProps}>
        {children}
      </div>
    );
  }
}
