import React, { ReactNode } from 'react';
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
