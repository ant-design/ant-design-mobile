import React, { ReactNode } from 'react';

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
  last?: boolean;
  /** web only */
  prefixCls?: string;
  style?: any;
  /** web only */
  className?: string;
  thumb?: ReactNode | null;
  extra?: React.ReactNode;
  arrow?: 'horizontal'|'down'|'up'|'empty'|'';
  align?: string;
  onClick?: (e?: any) => void;
  error?: boolean;
  multipleLine?: boolean;
  children?: any;
  wrap?: boolean;
  line?: number;
}

export interface BriefProps {
  style?: React.CSSProperties;
  children?: any;
}
