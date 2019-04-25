import * as React from 'react';

export interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;
  tabBarPosition?: 'top' | 'bottom';

  /** default: false */
  animated?: boolean;
  /** default: false */
  swipeable?: boolean;
}
export type TabIcon = React.ReactElement<any> | { uri: string };
export interface TabBarItemProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: TabIcon;
  selectedIcon?: TabIcon;
  title: string;
  dot?: boolean;
  prefixCls?: string;
  style?: React.CSSProperties;
}
