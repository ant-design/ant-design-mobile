import React from 'react';

export interface FlexProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  direction?: 'row'|'row-reverse'|'column'|'column-reverse';
  wrap?: 'nowrap'|'wrap'|'wrap-reverse';
  justify?: 'start'|'end'|'center'|'between'|'around';
  align?: 'top'|'start'|'middle'|'center'|'bottom'|'end'|'baseline'|'stretch';
  alignContent?: 'start'|'end'|'center'|'between'|'around'|'stretch';
  children?: any;
  /** web only */
  onClick?: (e?: any) => void;
}

export interface FlexItemProps {
  flex?: number;
  onPress?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e?: any) => void;
  children?: any;
}
