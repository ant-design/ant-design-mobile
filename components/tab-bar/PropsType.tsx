import React from 'react';

export interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;
  children: any;
  /*web only*/
  prefixCls?: string;
  className?: string;
  hidden?: boolean;
  placeholder?: React.ReactNode;
  /** rn android only**/
  styles?: any;
}

export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: any;
  selectedIcon?: any;
  title: string;
}
