import React from 'react';

export interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;
  children?: any;
  /*web only*/
  prefixCls?: string;
  className?: string;
  hidden?: boolean;
  placeholder?: React.ReactNode;
  /** default: false */
  animated?: boolean;
  /** default: false */
  swipeable?: boolean;
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
  /*web only*/
  dot?: boolean;
  /*web only*/
  prefixCls?: string;
  /*web only*/
  style?: any;
}
