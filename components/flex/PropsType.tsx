import React from 'react';

export interface FlexProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  direction?: string;
  wrap?: string;
  justify?: string;
  align?: string;
  alignContent?: string;
  children?: any;
  /** rn only */
  onPress?: any;
  /** web only */
  onClick?: (_e: any) => void;
}

export interface FlexItemProps {
  flex?: number;
  onPress?: any;
  /** web only */
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (_e: any) => void;
  children?: any;
}
