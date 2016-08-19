interface TabBarProps {
  badge?: string | number;
  onPress?: () => void;
  selected?: boolean;
  icon?: any;
  selectedIcon?: any;
  style?: any;
  children: any;
  title: string;
  tintColor?: string;
  unselectedTintColor?: string;
  /*react-native ios only*/
  systemIcon?: any;
  renderAsOriginal?: boolean;
  /*web only*/
  rootPrefixCls?: string;
  className?: string;
}

export default TabBarProps;
