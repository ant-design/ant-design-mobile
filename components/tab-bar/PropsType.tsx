interface TabBarProps {
  barTintColor?: string;
  tintColor?: string;
  unselectedTintColor?: string;
  children: any;
  /*web only*/
  prefixCls?: string;
  className?: string;
  hidden?: boolean;
  /** rn android only**/
  styles?: any;
}

export default TabBarProps;
