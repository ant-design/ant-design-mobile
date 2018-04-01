import React, { ReactNode } from 'react';
// export type ListType = React.ReactNode
export interface ListPropsType {
  renderHeader?: () => React.ReactType | React.ReactNode;
  renderFooter?: () => React.ReactType | React.ReactNode;
  children?: false | React.ReactNode | React.ReactNode[];
}

export interface ListItemPropsType {
  align?: 'top' | 'middle' | 'bottom';
  disabled?: boolean;
  multipleLine?: boolean;
  children?: ReactNode;
  thumb?: ReactNode | null;
  extra?: ReactNode;
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | '';
  wrap?: boolean;
  activeStyle?: React.CSSProperties;
  error?: boolean;
  platform?: 'android' | 'ios';
}

export interface BriefProps {
  children?: ReactNode;
  wrap?: boolean;
  style?: React.CSSProperties | {} | Array<{}>;
}
