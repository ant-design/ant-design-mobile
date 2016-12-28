interface TabsProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onChange?: (key: string) => void;
  onTabClick?: (key: string) => void;
  tabBarPosition?: 'top' | 'bottom';
  animated?: boolean;
  swipeable?: boolean;
  /*rn only*/
  underlineColor?: string;
  activeUnderlineColor?: string;
  textColor?: string;
  activeTextColor?: string;
  styles?: any;
  barStyle?: any;
  /*web only*/
  className?: string;
  prefixCls?: string;
}

export default TabsProps;
