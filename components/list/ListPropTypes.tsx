import React from 'react';
import ReactNode = __React.ReactNode;

export interface ListProps {
  /** web only */
  prefixCls?: string;
  style?: React.CSSProperties;
  /** web only */
  className?: string;
  children?: any;
  renderHeader?: Function;
  renderFooter?: Function;
}

export interface ListItemProps {
  lazy?: boolean;
  last?: boolean;
  /** web only */
  prefixCls?: string;
  style?: any;
  /** web only */
  className?: string;
  thumb?: ReactNode;
  extra?: any;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  align?: string;
  onClick?: (e: any) => void;
  error?: boolean;
  multipleLine?: boolean;
  children?: any;
  wrap?: boolean;
  line?: number;
}
