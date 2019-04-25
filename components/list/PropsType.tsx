import * as React from 'react'
// export type ListType = JSX.Element
export interface ListPropsType {
  renderHeader?: () => React.ReactNode | React.ReactNode;
  renderFooter?: () => React.ReactNode | React.ReactNode;
  children?: React.ReactNode;
}

export interface ListItemPropsType {
  align?: 'top' | 'middle' | 'bottom';
  disabled?: boolean;
  multipleLine?: boolean;
  children?: React.ReactNode;
  thumb?: React.ReactNode | null;
  extra?: React.ReactNode;
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | '';
  wrap?: boolean;
  activeStyle?: React.CSSProperties;
  error?: boolean;
  platform?: 'android' | 'ios';
}

export interface BriefProps {
  children?: React.ReactNode;
  wrap?: boolean;
  style?: React.CSSProperties;
}
