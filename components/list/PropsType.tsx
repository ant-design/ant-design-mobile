import * as React from 'react';
// export type ListType = JSX.Element
export interface ListPropsType {
  renderHeader?: (() => React.ReactType) | string | JSX.Element;
  renderFooter?: (() => React.ReactType) | string | JSX.Element;
  children?: false | JSX.Element | JSX.Element[];
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
